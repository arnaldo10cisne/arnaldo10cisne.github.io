import React from 'react';
import { render, screen } from '@testing-library/react';

import NavbarLogo from './NavbarLogo';

describe('NavbarLogo', () => {
  test('renders NavbarLogo component without crashing', () => {
    render(<NavbarLogo />);
  });

  test('renders NavbarLogo image', () => {
    render(<NavbarLogo />);

    const logoImage = screen.getByRole('img', { name: /logo/i });
    expect(logoImage).toBeInTheDocument();
    expect(logoImage).toHaveAttribute(
      'src',
      'https://s3.us-east-1.amazonaws.com/arnaldocisneros.com/images/logo_small(3).png'
    );
    expect(logoImage).toHaveAttribute('alt', 'logo');
  });
});
