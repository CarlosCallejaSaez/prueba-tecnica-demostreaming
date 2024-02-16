import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; 
import Header from './Header'; 

describe('Header component', () => {
  it('renders correctly', () => {
    render(
      <MemoryRouter> 
        <Header />
      </MemoryRouter>
    );

    
    expect(screen.getByText('DEMO Streaming')).toBeInTheDocument();

    
    expect(screen.getByRole('button', { name: 'Log in' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Start your free trial' })).toBeInTheDocument();
  });

  
});
