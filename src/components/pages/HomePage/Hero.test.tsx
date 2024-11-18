import React from 'react';
import { render, screen } from '@testing-library/react';

import Hero from './Hero';
import { HERO_DESCRIPTION } from '../../../utilities/models';

describe('Hero', () => {
  test('Should show hero text', () => {
    render(<Hero />);

    expect(screen.getByText('Hello! My name is')).toBeInTheDocument();
    expect(screen.getByText('Arnaldo Cisneros')).toBeInTheDocument();
    expect(screen.getByText("and I'm a Software Engineer")).toBeInTheDocument();
    expect(
      screen.getByText('located in Medellín, Colombia.')
    ).toBeInTheDocument();
    expect(screen.getByText(HERO_DESCRIPTION)).toBeInTheDocument();
  });
});
