import React, { useContext } from 'react';

import TodoItem from './TodoItem';
import { TodosContext } from '../store/todos-context';
import styles from './Todos.module.css';

const Todos: React.FC = () => {
  const { todos, removeTodo } = useContext(TodosContext);

  return (
    <ul className={styles.todos}>
      {todos.map(({ id, text }) => (
        <TodoItem
          key={id}
          text={text}
          onRemoveTodo={removeTodo.bind(null, id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
