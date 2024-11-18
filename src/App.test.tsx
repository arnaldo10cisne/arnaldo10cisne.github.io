import React from 'react';
import { render, screen } from '@testing-library/react';

import App from './App';

describe('Hero', () => {
  test('renders App component without crashing', () => {
    render(<App />);
  });

  test('renders HomePage at root path', () => {
    render(<App />);
    expect(screen.getByText('Hello! My name is')).toBeInTheDocument();
    expect(screen.getByText('Arnaldo Cisneros')).toBeInTheDocument();
    expect(screen.getByText("and I'm a Software Engineer")).toBeInTheDocument();
  });
});
