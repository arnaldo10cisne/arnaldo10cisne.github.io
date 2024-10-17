import json
import boto3
import os
from boto3.dynamodb.conditions import Attr
from decimal import Decimal

dynamodb = boto3.resource('dynamodb')
TABLE_NOT_FOUND_ERROR = 'Table not found'

def get_ddb_table(resource):
    if resource == '/portfolio':
        return dynamodb.Table(os.environ.get('PORTFOLIO_TABLE_NAME'))
    elif resource == '/certificates':
        return dynamodb.Table(os.environ.get('CERTIFICATES_TABLE_NAME'))
    else:
        return TABLE_NOT_FOUND_ERROR

# Custom encoder to handle Decimal
class DecimalEncoder(json.JSONEncoder):
    def default(self, obj):
        if isinstance(obj, Decimal):
            return float(obj)
        return super(DecimalEncoder, self).default(obj)

# Filter for only highlighted items where 'show' is true, and sort by 'id'
def filter_only_highlights(table):
    try:
        response = table.scan(
            FilterExpression=Attr('highlight').eq(True) & Attr('show').eq(True)
        )
        items = response.get('Items', [])
        # Sort items by 'id' in ascending order
        sorted_items = sorted(items, key=lambda x: int(x['id']))
        return sorted_items
    except Exception as e:
        return {'error': str(e)}

# Extract a single entry and ensure 'show' is true
def extract_single_entry(table, id_number):
    try:
        response = table.get_item(Key={'id': int(id_number)})
        item = response.get('Item', {})

        # Check if the item exists and that 'show' is true
        if item and item.get('show', True):  # Default to True if 'show' attribute doesn't exist
            return item
        else:
            return {}  # Return an empty dictionary if 'show' is False
    except Exception as e:
        return {'error': str(e)}

# Scan for all items, but only return those where 'show' is true, and sort by 'id'
def do_scan(table):
    try:
        response = table.scan(
            FilterExpression=Attr('show').eq(True)
        )
        items = response.get('Items', [])
        # Sort items by 'id' in ascending order
        sorted_items = sorted(items, key=lambda x: int(x['id']))
        return sorted_items
    except Exception as e:
        return {'error': str(e)}

# Lambda handler
def lambda_handler(event, context):
    
    print('EVENT: ', event)
    
    table = get_ddb_table(event.get("resource", {}))
    
    if table == TABLE_NOT_FOUND_ERROR:
        return {
            'statusCode': 500,
            'body': json.dumps({'error': TABLE_NOT_FOUND_ERROR})
        }
    
    try:
        query_params = event.get("queryStringParameters", {})
        
        if query_params is None:
            query_params = {}

        # Default response to scan all items where 'show' is true and order by id
        response = do_scan(table)

        # If 'id' is provided, extract a single entry
        if 'id' in query_params:
            id_number = query_params['id']
            response = extract_single_entry(table, id_number)

        # If 'highlight' is 'true', filter only highlighted items and order by id
        if query_params.get('highlight') == 'true':
            response = filter_only_highlights(table)

        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Methods': 'GET',
                'Content-Type': 'application/json',
            },
            'body': json.dumps(response, cls=DecimalEncoder)
        }

    except Exception as e:
        return {
            'statusCode': 500,
            'body': json.dumps({'error': str(e)})
        }