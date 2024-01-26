import { useRef } from 'react';

const NewTodo: React.FC<{ onAddTodo: (todoText: string) => void }> = ({
  onAddTodo,
}) => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = todoTextInputRef.current!.value;

    if (enteredText?.trim().length === 0) {
      // throe an error;
      return;
    }

    onAddTodo(enteredText);

    todoTextInputRef.current!.value = '';
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor='text'>Todo Text</label>
      <input type='text' id='text' ref={todoTextInputRef} />
      <button>Add Button</button>
    </form>
  );
};

export default NewTodo;
