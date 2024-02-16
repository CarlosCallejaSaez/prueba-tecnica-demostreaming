import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer component', () => {
  it('renders social media links', () => {
    render(<Footer />);

    
    expect(screen.getByAltText('Facebook')).toBeInTheDocument();
    expect(screen.getByAltText('Twitter')).toBeInTheDocument();
    expect(screen.getByAltText('Instagram')).toBeInTheDocument();
  });

  it('renders store links', () => {
    render(<Footer />);

    
    expect(screen.getByAltText('App Store')).toBeInTheDocument();
    expect(screen.getByAltText('Play Store')).toBeInTheDocument();
    expect(screen.getByAltText('Windows Store')).toBeInTheDocument();
  });

  it('renders copyright text', () => {
    render(<Footer />);

    
    const copyRightText = screen.getByText(/2016 DEMO Streaming. All Rights Reserved./i);
    expect(copyRightText).toBeInTheDocument();
  });

  
});
