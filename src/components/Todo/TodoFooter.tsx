import React from 'react';

import { FilterType } from '@types';

interface Props {
  activeCount: number;
  currentFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
  onClearCompleted: () => void;
  hasCompleted: boolean;
}

export const TodoFooter: React.FC<Props> = ({
  activeCount,
  currentFilter,
  onFilterChange,
  onClearCompleted,
  hasCompleted,
}) => {
  const filters: FilterType[] = ['all', 'active', 'completed'];

  return (
    <div className="todo-footer">
      <span className="items-left">{activeCount === 1 ? '1 item left' : `${activeCount} items left`}</span>

      <div className="filters">
        {filters.map((filter) => (
          <button
            key={filter}
            className={`filter-btn ${currentFilter === filter ? 'active' : ''}`}
            onClick={() => onFilterChange(filter)}
          >
            {filter.charAt(0).toUpperCase() + filter.slice(1)}
          </button>
        ))}
      </div>

      {hasCompleted && (
        <button className="clear-completed" onClick={onClearCompleted}>
          Clear completed
        </button>
      )}
    </div>
  );
};
