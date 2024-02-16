import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Modal from './Modal';

describe('Modal component', () => {
  it('should not render when show is false', () => {
    render(<Modal show={false} onClose={() => {}} />);
    expect(screen.queryByText('Close')).not.toBeInTheDocument();
  });

  it('should render when show is true', () => {
    render(<Modal show={true} onClose={() => {}}>Modal Content</Modal>);
    expect(screen.getByText('Modal Content')).toBeInTheDocument();
    expect(screen.getByText('Close')).toBeInTheDocument();
  });

  it('should call onClose when close button is clicked', async () => {
    const handleClose = vi.fn();
    render(<Modal show={true} onClose={handleClose}>Modal Content</Modal>);
    
    fireEvent.click(screen.getByText('Close'));
    expect(handleClose).toHaveBeenCalledTimes(1);
  });
});
