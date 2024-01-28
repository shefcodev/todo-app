import { createContext, useState } from 'react';

import Todo from '../models/todo';

type TodosContextType = {
  todos: Todo[];
  addTodo: (todoText: string) => void;
  removeTodo: (todoId: string) => void;
};

export const TodosContext = createContext<TodosContextType>({
  todos: [],
  addTodo: (todoText: string) => {},
  removeTodo: (todoId: string) => {},
});

const TodosContextProvider: React.FC = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todoText: string) => {
    setTodos((prevTodos) => prevTodos.concat(new Todo(todoText)));
  };

  const removeTodoHandler = (todoId: string) => {
    setTodos((prevTodos) => prevTodos.filter(({ id }) => id !== todoId));
  };

  const contextValue: TodosContextType = {
    todos: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;