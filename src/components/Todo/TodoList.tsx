import React from 'react';

import { TodoItem } from '@/components';
import { ITodo } from '@/types';

interface Props {
  todos: ITodo[];
  onToggle: (id: number) => void;
}

export const TodoList: React.FC<Props> = ({ todos, onToggle }) => (
  <div className="todos-list">
    {todos.map((todo) => (
      <TodoItem key={todo.id} todo={todo} onToggle={onToggle} />
    ))}
  </div>
);
