import { TodoList } from '@/components';
import { ITodo } from '@/types';
import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

describe('TodoList', () => {
  const todos: ITodo[] = [
    { id: 1, text: 'Todo 1', completed: false },
    { id: 2, text: 'Todo 2', completed: true },
  ];
  const onToggle = vi.fn();

  it('renders a list of todos', () => {
    render(<TodoList todos={todos} onToggle={onToggle} />);
    expect(screen.getByText('Todo 1')).toBeInTheDocument();
    expect(screen.getByText('Todo 2')).toBeInTheDocument();
  });

  it('calls onToggle when a todo is toggled', () => {
    render(<TodoList todos={todos} onToggle={onToggle} />);
    const checkboxes = screen.getAllByRole('checkbox');
    fireEvent.click(checkboxes[0]);
    expect(onToggle).toHaveBeenCalledWith(1);
  });
});
