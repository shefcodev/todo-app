import React from 'react';

import Todo from '../models/todo';
import TodoItem from './TodoItem';

const Todos: React.FC<{ todos: Todo[] }> = ({ todos }) => {
  return (
    <ul>
      {todos.map(({ id, text }) => (
        <TodoItem key={id} text={text} />
      ))}
    </ul>
  );
};

export default Todos;
