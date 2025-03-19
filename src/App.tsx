import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import TodoFilter from './components/TodoFilter';
import { useTodos } from './hooks/useTodos';

function App() {
  const { todos, addTodo, toggleTodo, deleteTodo, editTodo, clearCompleted } = useTodos();
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');
  
  const completedCount = todos.filter(todo => todo.completed).length;
  const activeCount = todos.length - completedCount;

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 py-12 px-4 sm:px-6">
      <div className="max-w-2xl mx-auto">
        <header className="text-center mb-8">
          <div className="flex justify-center mb-2">
            <CheckCircle size={40} className="text-indigo-500" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800">Task Master</h1>
          <p className="text-gray-600 mt-2">Organize your tasks efficiently</p>
        </header>

        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <TodoInput addTodo={addTodo} />
          
          <div className="flex justify-between items-center mt-6 mb-4">
            <h2 className="text-lg font-semibold text-gray-700">
              Your Tasks
            </h2>
            <div className="text-sm text-gray-500">
              {activeCount} active, {completedCount} completed
            </div>
          </div>
          
          <TodoList 
            todos={todos} 
            toggleTodo={toggleTodo} 
            deleteTodo={deleteTodo} 
            editTodo={editTodo}
            filter={filter}
          />
          
          <TodoFilter 
            filter={filter} 
            setFilter={setFilter} 
            clearCompleted={clearCompleted}
            completedCount={completedCount}
          />
        </div>
        
        <footer className="text-center text-gray-500 text-sm">
          <p>Double-click on a task to edit • Press Enter to save • Esc to cancel</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
