import { CERTIFICATES_API, PORTFOLIO_API } from './models';

// Reusable fetch handler
const fetchData = async (url: string) => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return await response.json();
};

// Fetch all projects
export const getAllProjectsFromDynamoDB = async (
  highlight: boolean = false
) => {
  return await fetchData(
    `${PORTFOLIO_API}${highlight ? '?highlight=true' : ''}`
  );
};

// Fetch single portfolio item
export const getPortfolioItemFromDynamoDB = async (id: number) => {
  return await fetchData(`${PORTFOLIO_API}?id=${id}`);
};

// Fetch all certificates
export const getAllCertificatesFromDynamoDB = async (
  highlight: boolean = false
) => {
  return await fetchData(
    `${CERTIFICATES_API}${highlight ? '?highlight=true' : ''}`
  );
};

// Fetch single certificate item
export const getCertificateItemFromDynamoDB = async (id: number) => {
  return await fetchData(`${CERTIFICATES_API}?id=${id}`);
};
