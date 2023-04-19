import { createSlice } from '@reduxjs/toolkit';

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

const initialTodoState: Todo[] = [
  { title: '', description: '', completed: false },
];

const todoSlice = createSlice({
  name: 'todos',
  initialState: initialTodoState,
  reducers: {
    addTodo(state, action) {
      const { title, description, completed } = action.payload;
      state.push({ title, description, completed });
    },
    removeTodo(state) {
      state.pop();
    },
  },
});

export const todoActions = todoSlice.actions;

export default todoSlice.reducer;
