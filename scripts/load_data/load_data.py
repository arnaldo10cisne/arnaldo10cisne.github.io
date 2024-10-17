import boto3
import json
from boto3.dynamodb.types import TypeDeserializer
from botocore.exceptions import NoCredentialsError, PartialCredentialsError, ClientError

def load_data_to_dynamodb(json_file_path, table_name, region_name='us-east-1'):
    dynamodb = boto3.resource('dynamodb', region_name=region_name)
    table = dynamodb.Table(table_name)

    try:
        with open(json_file_path, 'r') as f:
            data = json.load(f)
    except FileNotFoundError:
        print(f"Error: File {json_file_path} not found.")
        return
    except json.JSONDecodeError as e:
        print(f"Error parsing JSON file: {e}")
        return

    # Initialize the deserializer
    deserializer = TypeDeserializer()

    # Determine the data key ('certificates' or 'portfolio')
    key = None
    if 'certificates' in data:
        key = 'certificates'
    elif 'portfolio' in data:
        key = 'portfolio'
    else:
        print(f"Error: Valid key ('certificates' or 'portfolio') not found in JSON.")
        return

    # Iterate over the items and upload them to the table
    for item_wrapper in data[key]:
        item = item_wrapper.get('Item')
        if not item:
            print("Warning: 'Item' not found in the element. Skipping this element.")
            continue

        try:
            # Deserialize the item to convert it into a Python dictionary
            deserialized_item = {k: deserializer.deserialize(v) for k, v in item.items()}
        except Exception as e:
            print(f"Error deserializing item: {e}")
            continue

        try:
            # Upload the item to DynamoDB
            table.put_item(Item=deserialized_item)
            print(f"Item with id {deserialized_item.get('id')} uploaded successfully to table '{table_name}'.")
        except (NoCredentialsError, PartialCredentialsError):
            print("Error: AWS credentials not configured properly.")
            return
        except ClientError as e:
            print(f"Error uploading item with id {deserialized_item.get('id')} to table '{table_name}': {e.response['Error']['Message']}")
            continue
        except Exception as e:
            print(f"Unknown error uploading item with id {deserialized_item.get('id')} to table '{table_name}': {e}")
            continue

def main():
    region_name = 'us-east-1'

    # Certificates table data
    certificates_json_file = './data/certificates_db.json'
    certificates_table_name = 'PersonalWebsite__certificates-table'

    # Portfolio table data
    portfolio_json_file = './data/portfolio_db.json'
    portfolio_table_name = 'PersonalWebsite__portfolio-table'

    # Load data into the Certificates table
    load_data_to_dynamodb(certificates_json_file, certificates_table_name, region_name)

    # Load data into the Portfolio table
    load_data_to_dynamodb(portfolio_json_file, portfolio_table_name, region_name)

if __name__ == '__main__':
    main()
