import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { TodoInterface } from '../types/todo';
import loadState from '../utils/store/loadState';

export interface State {
	todos: TodoInterface[];
}

const initialState: State = { todos: [] };
export const STORE_NAME = 'todos';

export const todosSlice = createSlice({
	name: STORE_NAME,

	initialState,

	reducers: {
		addTodo(state: State, action: PayloadAction<TodoInterface>) {
			state.todos = [...state.todos, action.payload];
		},

		updateTodo(state: State, action: PayloadAction<TodoInterface>) {
			const currentTodo = state.todos.find((todos) => todos.id === action.payload.id);

			if (!currentTodo) return;

			const currentTodoIndex = currentTodo && state.todos.indexOf(currentTodo);

			state.todos = [
				...state.todos.slice(0, currentTodoIndex),
				action.payload,
				...state.todos.slice(currentTodoIndex + 1, state.todos.length),
			];
		},

		removeTodo(state: State, action: PayloadAction<{ id: string }>) {
			state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
		},
	},
});

const store = configureStore({
	reducer: todosSlice.reducer,
	preloadedState: loadState(STORE_NAME),
});

export const todosActions = todosSlice.actions;

export default store;
