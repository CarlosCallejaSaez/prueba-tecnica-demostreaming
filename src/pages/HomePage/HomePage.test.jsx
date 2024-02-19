import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import HomePage from './HomePage';

describe('HomePage component', () => {
  it('renders popular series and movies links with claqueta images', () => {
    render(
      <Router>
        <HomePage />
      </Router>
    );


    expect(screen.getByText('Popular Series')).toBeInTheDocument();
    expect(screen.getByText('Popular Movies')).toBeInTheDocument();


    const claquetaImages = screen.getAllByAltText('Claqueta');
    expect(claquetaImages.length).toBe(2);
  });
});
