import type { FilterType } from '@/types';

import { TodoFooter } from '@/components';
import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

describe('TodoFooter', () => {
  const defaultProps = {
    activeCount: 2,
    currentFilter: 'all' as FilterType,
    onFilterChange: vi.fn(),
    onClearCompleted: vi.fn(),
    hasCompleted: true,
  };

  it('renders active item count correctly', () => {
    render(<TodoFooter {...defaultProps} />);
    expect(screen.getByText('2 items left')).toBeInTheDocument();
  });

  it('renders "1 item left" when activeCount is 1', () => {
    render(<TodoFooter {...defaultProps} activeCount={1} />);
    expect(screen.getByText('1 item left')).toBeInTheDocument();
  });

  it('renders filter buttons', () => {
    render(<TodoFooter {...defaultProps} />);
    expect(screen.getByText('All')).toBeInTheDocument();
    expect(screen.getByText('Active')).toBeInTheDocument();
    expect(screen.getByText('Completed')).toBeInTheDocument();
  });

  it('calls onFilterChange when a filter button is clicked', () => {
    render(<TodoFooter {...defaultProps} />);
    const activeButton = screen.getByText('Active');
    fireEvent.click(activeButton);
    expect(defaultProps.onFilterChange).toHaveBeenCalledWith('active');
  });

  it('shows "Clear completed" button if hasCompleted is true', () => {
    render(<TodoFooter {...defaultProps} />);
    expect(screen.getByText('Clear completed')).toBeInTheDocument();
  });

  it('does not show "Clear completed" button if hasCompleted is false', () => {
    render(<TodoFooter {...defaultProps} hasCompleted={false} />);
    expect(screen.queryByText('Clear completed')).not.toBeInTheDocument();
  });

  it('calls onClearCompleted when "Clear completed" is clicked', () => {
    render(<TodoFooter {...defaultProps} />);
    fireEvent.click(screen.getByText('Clear completed'));
    expect(defaultProps.onClearCompleted).toHaveBeenCalled();
  });

  it('highlights the current filter', () => {
    render(<TodoFooter {...defaultProps} currentFilter="active" />);
    const activeBtn = screen.getByText('Active');
    expect(activeBtn.classList.contains('active')).toBe(true);
  });
});
