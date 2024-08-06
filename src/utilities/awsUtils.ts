import { dynamoDB } from '../awsConfig';
import {
  CertificateItem,
  CERTIFICATES_DYNAMODB_TABLE_NAME,
  PORTFOLIO_DYNAMODB_TABLE_NAME,
  ProjectItem,
} from './models';

// Helper function to get a single item by ID
const getItemById = async <T>(
  tableName: string,
  id: number
): Promise<T | null> => {
  const params = {
    TableName: tableName,
    Key: { id },
  };

  try {
    const result = await dynamoDB.get(params).promise();
    return result.Item ? (result.Item as T) : null;
  } catch (error) {
    console.error(`Error getting item with ID ${id} from ${tableName}:`, error);
    return null;
  }
};

// Helper function to get all items from a table
const getAllItems = async <T>(tableName: string): Promise<T[]> => {
  const params = { TableName: tableName };

  try {
    const result = await dynamoDB.scan(params).promise();
    return result.Items ? (result.Items as T[]) : [];
  } catch (error) {
    console.error(`Error getting items from ${tableName}:`, error);
    return [];
  }
};

// Fetch a single certificate item by ID
export const getCertificateItemFromDynamoDB = async (
  id: number
): Promise<CertificateItem | null> => {
  return await getItemById<CertificateItem>(
    CERTIFICATES_DYNAMODB_TABLE_NAME ?? '',
    id
  );
};

// Fetch a single portfolio item by ID
export const getPortfolioItemFromDynamoDB = async (
  id: number
): Promise<ProjectItem | null> => {
  return await getItemById<ProjectItem>(
    PORTFOLIO_DYNAMODB_TABLE_NAME ?? '',
    id
  );
};

// Fetch all certificates
export const getAllCertificatesFromDynamoDB = async (): Promise<
  CertificateItem[]
> => {
  const items = await getAllItems<CertificateItem>(
    CERTIFICATES_DYNAMODB_TABLE_NAME ?? ''
  );
  return items.filter((course) => course.show).sort((a, b) => a.id - b.id);
};

// Fetch all projects
export const getAllProjectsFromDynamoDB = async (): Promise<ProjectItem[]> => {
  const items = await getAllItems<ProjectItem>(
    PORTFOLIO_DYNAMODB_TABLE_NAME ?? ''
  );
  return items.filter((project) => project.show).sort((a, b) => a.id - b.id);
};
