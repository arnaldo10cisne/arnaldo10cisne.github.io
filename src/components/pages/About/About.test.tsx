import React, { ReactNode } from 'react';
import { render, screen } from '@testing-library/react';

import { About } from './About';
import {
  ABOUT_EDUCATION_TEXT,
  ABOUT_EXPERTISE_TEXT,
  ABOUT_ME_TEXT,
  ABOUT_WORK_TEXT,
} from '../../../utilities/models';
import * as ReactQuery from 'react-query';

const queryClient = new ReactQuery.QueryClient();

const QueryClientWrapper = (child: ReactNode) => (
  <ReactQuery.QueryClientProvider client={queryClient}>
    {child}
  </ReactQuery.QueryClientProvider>
);

describe('About', () => {
  test('Should show about texts', () => {
    render(QueryClientWrapper(<About />));

    expect(screen.getByText(ABOUT_ME_TEXT)).toBeInTheDocument();
    expect(screen.getByText(ABOUT_WORK_TEXT)).toBeInTheDocument();
    expect(screen.getByText(ABOUT_EXPERTISE_TEXT)).toBeInTheDocument();
    expect(screen.getByText(ABOUT_EDUCATION_TEXT)).toBeInTheDocument();
  });
});
