// Project.test.tsx

import React from 'react';
import { render, screen } from '@testing-library/react';
import Project from './Project';
import * as ReactQuery from 'react-query';
import { useParams } from 'react-router-dom';
import { DEFAULT_TITLE, PROJECT_TYPES } from '../../../utilities/models';

// Mocking useQuery from react-query
jest.mock('react-query', () => ({
  ...jest.requireActual('react-query'),
  useQuery: jest.fn(),
}));

// Mocking useParams from react-router-dom
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn(),
}));

describe('Project Component', () => {
  const mockProject = {
    id: 1,
    name: 'Test Project',
    thumbnail: 'test-thumbnail.jpg',
    description_innerHTML: '<p>This is a test project.</p>',
    show: true,
    date: '2023',
    languages: 'JavaScript, TypeScript',
    project_type: PROJECT_TYPES.WEB,
    technologies: ['React', 'TypeScript'],
    cloud_services: ['AWS'],
    screens: ['screen1.jpg', 'screen2.jpg'],
    website_link: 'https://example.com',
    github_link: 'https://github.com/example',
  };

  beforeEach(() => {
    // Reset mocks before each test
    jest.clearAllMocks();
    document.title = DEFAULT_TITLE; // Reset document title
  });

  test('Should render LoadingSpinner when project is not yet loaded', () => {
    (ReactQuery.useQuery as jest.Mock).mockReturnValue({
      data: undefined,
    });

    (useParams as jest.Mock).mockReturnValue({ id: '1' });

    render(<Project />);

    expect(screen.getByTestId('loading-spinner')).toBeInTheDocument();
  });

  test('Should render Not Found message when project.show is false', () => {
    (ReactQuery.useQuery as jest.Mock).mockReturnValue({
      data: { ...mockProject, show: false },
    });

    (useParams as jest.Mock).mockReturnValue({ id: '1' });

    render(<Project />);

    expect(screen.getByText('Not found')).toBeInTheDocument();
  });

  test('Should render project details when project is loaded', () => {
    (ReactQuery.useQuery as jest.Mock).mockReturnValue({
      data: mockProject,
    });

    (useParams as jest.Mock).mockReturnValue({ id: '1' });

    render(<Project />);

    expect(screen.getByText('Test Project')).toBeInTheDocument();
    expect(screen.getByAltText('Project Thumbnail')).toBeInTheDocument();
    expect(screen.getByText('About this project')).toBeInTheDocument();
    expect(screen.getByText('Screens')).toBeInTheDocument();
    expect(screen.getByText('Visit this website!')).toBeInTheDocument();
    expect(screen.getByText('Check it on Github!')).toBeInTheDocument();
  });

  test('Should render ProjectAbout component correctly', () => {
    (ReactQuery.useQuery as jest.Mock).mockReturnValue({
      data: mockProject,
    });

    (useParams as jest.Mock).mockReturnValue({ id: '1' });

    render(<Project />);

    // Check that the inner HTML is rendered
    expect(screen.getByText('This is a test project.')).toBeInTheDocument();
    // Check that the ProjectInfoTable is rendered
    expect(screen.getByText('Tech')).toBeInTheDocument();
    expect(screen.getByText('Year')).toBeInTheDocument();
    expect(screen.getByText('Language')).toBeInTheDocument();
    expect(screen.getByText('2023')).toBeInTheDocument();
    expect(screen.getByText('JavaScript, TypeScript')).toBeInTheDocument();
  });

  test('Should render ProjectScreens component correctly', () => {
    (ReactQuery.useQuery as jest.Mock).mockReturnValue({
      data: mockProject,
    });

    (useParams as jest.Mock).mockReturnValue({ id: '1' });

    render(<Project />);

    // Check that the screen images are rendered
    const images = screen.getAllByAltText('Project screen');
    expect(images).toHaveLength(2);
  });

  test('Should not render ProjectScreens if no screens are available', () => {
    const projectWithoutScreens = { ...mockProject, screens: undefined };

    (ReactQuery.useQuery as jest.Mock).mockReturnValue({
      data: projectWithoutScreens,
    });

    (useParams as jest.Mock).mockReturnValue({ id: '1' });

    render(<Project />);

    expect(screen.queryByText('Screens')).not.toBeInTheDocument();
  });

  test('Should render ProjectLinks component correctly', () => {
    (ReactQuery.useQuery as jest.Mock).mockReturnValue({
      data: mockProject,
    });

    (useParams as jest.Mock).mockReturnValue({ id: '1' });

    render(<Project />);

    expect(screen.getByText('Visit this website!')).toHaveAttribute(
      'href',
      'https://example.com'
    );
    expect(screen.getByText('Check it on Github!')).toHaveAttribute(
      'href',
      'https://github.com/example'
    );
  });

  test('Should not render Visit Website link if website_link is not provided', () => {
    const projectWithoutWebsite = { ...mockProject, website_link: undefined };

    (ReactQuery.useQuery as jest.Mock).mockReturnValue({
      data: projectWithoutWebsite,
    });

    (useParams as jest.Mock).mockReturnValue({ id: '1' });

    render(<Project />);

    expect(screen.queryByText('Visit this website!')).not.toBeInTheDocument();
    expect(screen.getByText('Check it on Github!')).toBeInTheDocument();
  });

  test('Should not render Github link if github_link is not provided', () => {
    const projectWithoutGithub = { ...mockProject, github_link: undefined };

    (ReactQuery.useQuery as jest.Mock).mockReturnValue({
      data: projectWithoutGithub,
    });

    (useParams as jest.Mock).mockReturnValue({ id: '1' });

    render(<Project />);

    expect(screen.getByText('Visit this website!')).toBeInTheDocument();
    expect(screen.queryByText('Check it on Github!')).not.toBeInTheDocument();
  });

  test('Should set document title to project name', () => {
    (ReactQuery.useQuery as jest.Mock).mockReturnValue({
      data: mockProject,
    });

    (useParams as jest.Mock).mockReturnValue({ id: '1' });

    render(<Project />);

    expect(document.title).toBe(mockProject.name);
  });
});
