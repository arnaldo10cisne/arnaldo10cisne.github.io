import { dynamoDB } from '../awsConfig';
import {
  CertificateItem,
  CERTIFICATES_DYNAMODB_TABLE_NAME,
  PORTFOLIO_DYNAMODB_TABLE_NAME,
  ProjectItem,
} from './models';

export const getCertificateItemFromDynamoDB = async (
  id: number
): Promise<CertificateItem | null> => {
  const params = {
    TableName: CERTIFICATES_DYNAMODB_TABLE_NAME!,
    Key: {
      id,
    },
  };

  try {
    const result = await dynamoDB.get(params).promise();
    return result.Item as CertificateItem;
  } catch (error) {
    console.error('ERROR GETTING CERTIFICATES ITEMS:', error);
    return null;
  }
};

export const getPortfolioItemFromDynamoDB = async (
  id: number
): Promise<ProjectItem | null> => {
  const params = {
    TableName: PORTFOLIO_DYNAMODB_TABLE_NAME!,
    Key: {
      id,
    },
  };

  try {
    const result = await dynamoDB.get(params).promise();
    return result.Item as ProjectItem;
  } catch (error) {
    console.error('ERROR GETTING PORTFOLIO ITEMS:', error);
    return null;
  }
};

export const getAllCertificatesFromDynamoDB = async (): Promise<
  CertificateItem[]
> => {
  const params = {
    TableName: CERTIFICATES_DYNAMODB_TABLE_NAME!,
  };

  try {
    const result = await dynamoDB.scan(params).promise();
    return (result.Items as CertificateItem[])
      .filter((course) => course.show)
      .sort((a, b) => a.id - b.id);
  } catch (error) {
    console.error('ERROR GETTING CERTIFICATE ITEMS:', error);
    return [];
  }
};

export const getAllProjectsFromDynamoDB = async (): Promise<ProjectItem[]> => {
  const params = {
    TableName: PORTFOLIO_DYNAMODB_TABLE_NAME!,
  };

  try {
    const result = await dynamoDB.scan(params).promise();
    return (result.Items as ProjectItem[])
      .filter((project) => project.show)
      .sort((a, b) => a.id - b.id);
  } catch (error) {
    console.error('ERROR GETTING PORTFOLIO ITEMS:', error);
    return [];
  }
};
