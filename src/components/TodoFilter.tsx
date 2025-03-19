import React from 'react';

interface TodoFilterProps {
  filter: 'all' | 'active' | 'completed';
  setFilter: (filter: 'all' | 'active' | 'completed') => void;
  clearCompleted: () => void;
  completedCount: number;
}

const TodoFilter: React.FC<TodoFilterProps> = ({ filter, setFilter, clearCompleted, completedCount }) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center mt-6 pt-4 border-t border-gray-200">
      <div className="flex space-x-2 mb-4 sm:mb-0">
        <button
          onClick={() => setFilter('all')}
          className={`px-3 py-1 rounded-md transition-colors ${
            filter === 'all'
              ? 'bg-indigo-500 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          All
        </button>
        <button
          onClick={() => setFilter('active')}
          className={`px-3 py-1 rounded-md transition-colors ${
            filter === 'active'
              ? 'bg-indigo-500 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          Active
        </button>
        <button
          onClick={() => setFilter('completed')}
          className={`px-3 py-1 rounded-md transition-colors ${
            filter === 'completed'
              ? 'bg-indigo-500 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          Completed
        </button>
      </div>
      
      {completedCount > 0 && (
        <button
          onClick={clearCompleted}
          className="text-gray-500 hover:text-red-500 transition-colors"
        >
          Clear completed
        </button>
      )}
    </div>
  );
};

export default TodoFilter;
