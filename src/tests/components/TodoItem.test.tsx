import { TodoItem } from '@/components';
import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

describe('TodoItem', () => {
  const mockTodo = { id: 1, text: 'Test task', completed: false };
  const onToggle = vi.fn();

  it('renders todo text', () => {
    render(<TodoItem todo={mockTodo} onToggle={onToggle} />);
    expect(screen.getByText('Test task')).toBeInTheDocument();
  });

  it('checkbox is not checked when todo is incomplete', () => {
    render(<TodoItem todo={mockTodo} onToggle={onToggle} />);
    expect(screen.getByRole('checkbox')).not.toBeChecked();
  });

  it('checkbox is checked when todo is completed', () => {
    render(<TodoItem todo={{ ...mockTodo, completed: true }} onToggle={onToggle} />);
    expect(screen.getByRole('checkbox')).toBeChecked();
  });

  it('calls onToggle when checkbox is clicked', () => {
    render(<TodoItem todo={mockTodo} onToggle={onToggle} />);
    fireEvent.click(screen.getByRole('checkbox'));
    expect(onToggle).toHaveBeenCalledWith(1);
  });
});
