import { TodoInput } from '@/components';
import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

describe('TodoInput', () => {
  const defaultProps = {
    value: '',
    onChange: vi.fn(),
    onAdd: vi.fn(),
    onToggleExpand: vi.fn(),
    isExpanded: false,
  };

  it('renders input and toggle button', () => {
    render(<TodoInput {...defaultProps} />);
    expect(screen.getByPlaceholderText('What needs to be done?')).toBeInTheDocument();
    expect(screen.getByText('❯')).toBeInTheDocument();
  });

  it('calls onChange when input value changes', () => {
    render(<TodoInput {...defaultProps} />);
    const input = screen.getByPlaceholderText('What needs to be done?');
    fireEvent.change(input, { target: { value: 'New todo' } });
    expect(defaultProps.onChange).toHaveBeenCalledWith('New todo');
  });

  it('calls onAdd when Enter is pressed', () => {
    render(<TodoInput {...defaultProps} />);
    const input = screen.getByPlaceholderText('What needs to be done?');
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter', charCode: 13 });
    expect(defaultProps.onAdd).toHaveBeenCalled();
  });

  it('calls onToggleExpand when ❯ button is clicked', () => {
    render(<TodoInput {...defaultProps} />);
    const toggleBtn = screen.getByText('❯');
    fireEvent.click(toggleBtn);
    expect(defaultProps.onToggleExpand).toHaveBeenCalled();
  });

  it('renders + button only if value is not empty', () => {
    render(<TodoInput {...defaultProps} value="New task" />);
    expect(screen.getByText('+')).toBeInTheDocument();
  });

  it('does not render + button if value is empty', () => {
    render(<TodoInput {...defaultProps} value="" />);
    expect(screen.queryByText('+')).not.toBeInTheDocument();
  });

  it('calls onAdd when + button is clicked', () => {
    render(<TodoInput {...defaultProps} value="Some task" />);
    fireEvent.click(screen.getByText('+'));
    expect(defaultProps.onAdd).toHaveBeenCalled();
  });

  it('adds "expanded" class when isExpanded is true', () => {
    render(<TodoInput {...defaultProps} isExpanded={true} />);
    const toggleBtn = screen.getByText('❯');
    expect(toggleBtn.classList.contains('expanded')).toBe(true);
  });
});
