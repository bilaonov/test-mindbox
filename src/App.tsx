import React from 'react';

import { TodoFooter, TodoInput, TodoList } from '@/components';
import { useTodos } from '@/hooks';

import './App.css';

export const App: React.FC = () => {
  const {
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
  } = useTodos();

  return (
    <div className="container">
      <div className="box">
        <h1 className="app-title">todos</h1>
        <div className="todo-container">
          <TodoInput
            value={inputValue}
            onChange={setInputValue}
            onAdd={handleAddTodo}
            onToggleExpand={() => setIsExpanded(!isExpanded)}
            isExpanded={isExpanded}
          />

          {isExpanded && <TodoList todos={filteredTodos} onToggle={handleToggleTodo} />}

          {todos.length > 0 && (
            <TodoFooter
              activeCount={activeCount}
              currentFilter={filter}
              onFilterChange={setFilter}
              onClearCompleted={handleClearCompleted}
              hasCompleted={hasCompleted}
            />
          )}
        </div>
      </div>
    </div>
  );
};
