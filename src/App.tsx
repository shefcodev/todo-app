import { useState, useCallback } from 'react';

import Todos from './components/Todos';
import Todo from './models/todo';
import NewTodo from './components/NewTodo';
import './App.css';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = useCallback((todoText: string) => {
    setTodos((prevTodos) => prevTodos.concat(new Todo(todoText)));
  }, []);

  const removeTodoHandler = useCallback((todoId: string) => {
    setTodos((prevTodos) => prevTodos.filter(({ id }) => id !== todoId));
  }, []);

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos todos={todos} onRemoveTodo={removeTodoHandler} />
    </div>
  );
}

export default App;
