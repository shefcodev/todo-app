import React from 'react';

import styles from './TodoItem.module.css';

const TodoItem: React.FC<{
  text: string;
  onRemoveTodo: (event: React.MouseEvent) => void;
}> = ({ text, onRemoveTodo }) => {
  return (
    <li className={styles.item} onClick={onRemoveTodo}>
      {text}
    </li>
  );
};

export default TodoItem;
