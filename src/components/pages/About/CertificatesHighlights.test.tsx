import React from 'react';
import { render, screen } from '@testing-library/react';

import { CertificatesHighlights } from './CertificatesHighlights';
import * as ReactQuery from 'react-query';

jest.mock('react-query', () => ({
  ...jest.requireActual('react-query'),
  useQuery: jest.fn(),
}));

describe('Portfolio Highlights', () => {
  test('Should show certificates highlights only', () => {
    const mockCertificates = [
      {
        id: 1,
        name: 'certificate 1',
        company: 'company 1',
      },
      {
        id: 2,
        name: 'certificate 2',
        company: 'company 2',
      },
    ];
    (ReactQuery.useQuery as jest.Mock).mockReturnValue({
      data: mockCertificates,
    });

    render(<CertificatesHighlights />);

    expect(screen.getByText('certificate 1')).toBeInTheDocument();
    expect(screen.getByText('certificate 2')).toBeInTheDocument();
    const certificateCells = screen.getAllByTestId(
      'certificate-highlight-cell'
    );
    expect(certificateCells).toHaveLength(2);
  });

  test('Should render loading spinner when certificates are not available', () => {
    (ReactQuery.useQuery as jest.Mock).mockReturnValue({
      data: undefined,
    });

    render(<CertificatesHighlights />);

    expect(screen.getByTestId('loading-spinner')).toBeInTheDocument();
  });
});
