import React from 'react';
import { render, screen } from '@testing-library/react';
import { Portfolio } from './Portfolio';
import * as ReactQuery from 'react-query';
import { PROJECT_TYPES } from '../../../utilities/models';

jest.mock('react-query', () => ({
  ...jest.requireActual('react-query'),
  useQuery: jest.fn(),
}));

describe('Portfolio Component', () => {
  test('Should render loading spinner when projects are loading', () => {
    (ReactQuery.useQuery as jest.Mock).mockReturnValue({
      isLoading: true,
    });

    render(<Portfolio />);

    expect(screen.getByTestId('loading-spinner')).toBeInTheDocument();
  });

  test('Should render error message when there is an error', () => {
    (ReactQuery.useQuery as jest.Mock).mockReturnValue({
      isLoading: false,
      error: true,
    });

    render(<Portfolio />);

    expect(
      screen.getByText(
        'There was an error loading the projects. Please try again later.'
      )
    ).toBeInTheDocument();
  });

  test('Should render projects in the correct categories', () => {
    const mockProjects = [
      {
        id: 1,
        name: 'Cloud Project 1',
        project_type: PROJECT_TYPES.CLOUD,
      },
      {
        id: 2,
        name: 'Web Project 1',
        project_type: PROJECT_TYPES.WEB,
      },
      {
        id: 3,
        name: 'Coding Project 1',
        project_type: PROJECT_TYPES.CODE,
      },
      {
        id: 4,
        name: 'Cloud Project 2',
        project_type: PROJECT_TYPES.CLOUD,
      },
    ];

    (ReactQuery.useQuery as jest.Mock).mockReturnValue({
      isLoading: false,
      data: mockProjects,
    });

    render(<Portfolio />);

    expect(screen.getByText('Cloud Projects')).toBeInTheDocument();
    expect(screen.getByText('Web Development Projects')).toBeInTheDocument();
    expect(screen.getByText('Coding Projects')).toBeInTheDocument();

    expect(screen.getByText('Cloud Project 1')).toBeInTheDocument();
    expect(screen.getByText('Cloud Project 2')).toBeInTheDocument();
    expect(screen.getByText('Web Project 1')).toBeInTheDocument();
    expect(screen.getByText('Coding Project 1')).toBeInTheDocument();
  });

  test('Should render message when no projects in a category', () => {
    const mockProjects = [
      {
        id: 1,
        name: 'Cloud Project 1',
        project_type: PROJECT_TYPES.CLOUD,
      },
    ];

    (ReactQuery.useQuery as jest.Mock).mockReturnValue({
      isLoading: false,
      data: mockProjects,
    });

    render(<Portfolio />);

    expect(screen.getByText('Cloud Projects')).toBeInTheDocument();
    expect(screen.getByText('Cloud Project 1')).toBeInTheDocument();

    expect(screen.getByText('Web Development Projects')).toBeInTheDocument();
    expect(screen.getByText('Coding Projects')).toBeInTheDocument();

    expect(
      screen.getAllByText('There are no projects available in this category.')
        .length
    ).toBe(2);
  });
});
