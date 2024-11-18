import React from 'react';
import { render, screen } from '@testing-library/react';

import PortfolioHighlights from './PortfolioHighlights';
import * as ReactQuery from 'react-query';

jest.mock('react-query', () => ({
  ...jest.requireActual('react-query'),
  useQuery: jest.fn(),
}));

describe('Portfolio Highlights', () => {
  test('Should show portfolio highlights only', () => {
    const mockProjects = [
      {
        id: 1,
        name: 'Project 1',
        date: '2021',
        thumbnail: 'thumbnail 1',
      },
      {
        id: 2,
        name: 'Project 2',
        date: '2022',
        thumbnail: 'thumbnail 2',
      },
    ];
    (ReactQuery.useQuery as jest.Mock).mockReturnValue({
      data: mockProjects,
    });

    render(<PortfolioHighlights />);

    expect(screen.getByText('Project 1')).toBeInTheDocument();
    expect(screen.getByText('2021')).toBeInTheDocument();
    expect(screen.getByText('Project 2')).toBeInTheDocument();
    expect(screen.getByText('2022')).toBeInTheDocument();
    const projectCells = screen.getAllByTestId('project-cell');
    expect(projectCells).toHaveLength(2);
  });

  test('Should render loading spinner when projects are not available', () => {
    (ReactQuery.useQuery as jest.Mock).mockReturnValue({
      data: undefined,
    });

    render(<PortfolioHighlights />);

    expect(screen.getByTestId('loading-spinner')).toBeInTheDocument();
  });
});
