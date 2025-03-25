import React from 'react';

interface Props {
  value: string;
  onChange: (v: string) => void;
  onAdd: () => void;
  onToggleExpand: () => void;
  isExpanded: boolean;
}

export const TodoInput: React.FC<Props> = ({ value, onChange, onAdd, onToggleExpand, isExpanded }) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') onAdd();
  };

  return (
    <div className="input-container">
      <button className={`toggle-all ${isExpanded ? 'expanded' : ''}`} onClick={onToggleExpand}>
        ❯
      </button>
      <input
        className="todo-input"
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="What needs to be done?"
      />
      {value && (
        <button className="save-todo-btn" onClick={onAdd}>
          +
        </button>
      )}
    </div>
  );
};

export default TodoInput;
