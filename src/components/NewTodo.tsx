import { useRef, useContext } from 'react';

import { TodosContext } from '../store/todos-context';
import styles from './NewTodo.module.css';

const NewTodo: React.FC = () => {
  const { addTodo } = useContext(TodosContext);
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = todoTextInputRef.current!.value;

    if (enteredText?.trim().length === 0) {
      // throe an error;
      return;
    }

    addTodo(enteredText);

    todoTextInputRef.current!.value = '';
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <label htmlFor='text'>Todo Text</label>
      <input type='text' id='text' ref={todoTextInputRef} />
      <button>Add Button</button>
    </form>
  );
};

export default NewTodo;
