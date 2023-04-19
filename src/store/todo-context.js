import { useState } from 'react';

export const TodoContext = React.createContext({
  items: [],
  addTodo: () => {},
  removeTodo: () => {},
});

const [todos, setTodos] = useState(['Arrumar a casa', 'Dar banho no Sniff']);

const addTodoHandler = (enteredText) => {
  setTodos((prevTodos) => {
    prevTodos.push(enteredText);
  });
};

const removeTodoHandler = (idTodo) => {
  setTodos((prevTodos) => {
    prevTodos.filter((todo) => todo === idTodo);
  });
};

const contextValue = {
  items: todos,
  addTodo: addTodoHandler,
  removeTodo: removeTodoHandler,
};

export const TodoContextProvider = (props) => {
  <TodoContextProvider value={contextValue}>
    {props.children}
  </TodoContextProvider>;
};
