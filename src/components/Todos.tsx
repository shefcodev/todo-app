import React from 'react';

import Todo from '../models/todo';
import TodoItem from './TodoItem';
import styles from './Todos.module.css';

const Todos: React.FC<{ todos: Todo[] }> = ({ todos }) => {
  return (
    <ul className={styles.todos}>
      {todos.map(({ id, text }) => (
        <TodoItem key={id} text={text} />
      ))}
    </ul>
  );
};

export default Todos;
