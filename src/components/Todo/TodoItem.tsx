import React from 'react';

import { ITodo } from '@/types';

interface Props {
  todo: ITodo;
  onToggle: (id: number) => void;
}

export const TodoItem: React.FC<Props> = ({ todo, onToggle }) => (
  <div className="todo-item">
    <label className="checkbox-container">
      <input type="checkbox" checked={todo.completed} onChange={() => onToggle(todo.id)} />
      <span className="checkmark" />
    </label>
    <span className={`todo-text ${todo.completed ? 'completed' : ''}`}>{todo.text}</span>
  </div>
);
