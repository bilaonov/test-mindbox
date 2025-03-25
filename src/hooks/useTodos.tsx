import { useMemo, useState } from 'react';

import { FilterType, ITodo } from '@types';

export const useTodos = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [filter, setFilter] = useState<FilterType>('all');
  const [isExpanded, setIsExpanded] = useState(true);

  const handleAddTodo = () => {
    const trimmed = inputValue.trim();
    if (!trimmed) return;

    setTodos((prevTodos) => [
      ...prevTodos,
      {
        id: prevTodos.length ? Math.max(...prevTodos.map((t) => t.id)) + 1 : 1,
        text: trimmed,
        completed: false,
      },
    ]);
    setInputValue('');
  };

  const handleToggleTodo = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo))
    );
  };

  const handleClearCompleted = () => {
    setTodos((prevTodos) => prevTodos.filter((todo) => !todo.completed));
  };

  const filteredTodos = useMemo(() => {
    switch (filter) {
      case 'active':
        return todos.filter((todo) => !todo.completed);
      case 'completed':
        return todos.filter((todo) => todo.completed);
      default:
        return todos;
    }
  }, [todos, filter]);

  const activeCount = useMemo(() => todos.filter((t) => !t.completed).length, [todos]);
  const hasCompleted = useMemo(() => todos.some((t) => t.completed), [todos]);

  return {
    todos,
    inputValue,
    setInputValue,
    filter,
    setFilter,
    isExpanded,
    setIsExpanded,
    handleAddTodo,
    handleToggleTodo,
    handleClearCompleted,
    filteredTodos,
    activeCount,
    hasCompleted,
  };
};
