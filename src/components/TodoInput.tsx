import React, { useState } from 'react';
import { PlusCircle } from 'lucide-react';

interface TodoInputProps {
  addTodo: (text: string) => void;
}

const TodoInput: React.FC<TodoInputProps> = ({ addTodo }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text.trim());
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new task..."
        className="w-full p-4 pr-12 rounded-lg border border-gray-200 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 transition-all"
      />
      <button
        type="submit"
        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-indigo-500 hover:text-indigo-600 transition-colors"
        disabled={!text.trim()}
      >
        <PlusCircle size={24} />
      </button>
    </form>
  );
};

export default TodoInput;
