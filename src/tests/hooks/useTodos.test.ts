import { useTodos } from '@/hooks/useTodos';
import { act, renderHook } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

describe('useTodos', () => {
  it('adds a new todo', () => {
    const { result } = renderHook(() => useTodos());

    act(() => {
      result.current.setInputValue('New Task');
    });

    act(() => {
      result.current.handleAddTodo();
    });

    expect(result.current.todos).toHaveLength(1);
    expect(result.current.todos[0].text).toBe('New Task');
  });

  it('toggles a todo', () => {
    const { result } = renderHook(() => useTodos());

    act(() => {
      result.current.setInputValue('Toggle Me');
    });

    act(() => {
      result.current.handleAddTodo();
    });

    const addedTodo = result.current.todos[0];

    act(() => {
      result.current.handleToggleTodo(addedTodo.id);
    });

    expect(result.current.todos[0].completed).toBe(true);
  });

  it('clears completed todos', () => {
    const { result } = renderHook(() => useTodos());

    act(() => {
      result.current.setInputValue('Complete me');
    });

    act(() => {
      result.current.handleAddTodo();
    });

    const addedTodo = result.current.todos[0];

    act(() => {
      result.current.handleToggleTodo(addedTodo.id);
    });

    act(() => {
      result.current.handleClearCompleted();
    });

    expect(result.current.todos).toHaveLength(0);
  });
});
