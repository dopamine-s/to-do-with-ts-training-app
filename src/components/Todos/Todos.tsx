import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { TodoInterface } from '../../types/todo';
import TodoList from '../Todos/TodoList/TodoLIst';
import NewTodo from './NewTodo/NewTodo';
import NoTodos from './NoTodos/NoTodos';
import styles from './Todos.module.css';
import TodosWrapper from './TodosWrapper/TodosWrapper';

const Todos = () => {
	const [todos, setTodos] = useState<TodoInterface[]>([]);

	const addTodoHandler = (todoText: string): void => {
		const newTodo = {
			id: uuidv4(),
			title: todoText,
			isFinished: false,
		};

		setTodos((prevTodos) => {
			return [...prevTodos, newTodo];
		});
	};

	const doneTodoHandler = (todoId: string): void => {
		const currentTodo = todos.find((todo) => todo.id === todoId);

		if (!currentTodo) return;

		const currentTodoIndex = todos.indexOf(currentTodo);

		const updatedTodo = {
			...currentTodo,
		};

		updatedTodo.isFinished = !updatedTodo.isFinished;

		setTodos((prevTodos) => {
			return [
				...prevTodos.slice(0, currentTodoIndex),
				updatedTodo,
				...prevTodos.slice(currentTodoIndex + 1, prevTodos.length),
			];
		});
	};

	const removeTodoHandler = (todoId: string): void => {
		setTodos((prevTodos) => {
			return prevTodos.filter((todo) => todo.id !== todoId);
		});
	};

	const saveEditTodoHandler = (todoId: string, newTodoTitle: string): void => {
		const currentTodo = todos.find((todo) => todo.id === todoId);

		if (!currentTodo) {
			return;
		}
		const currentTodoIndex = todos.indexOf(currentTodo);

		const updatedTodo = {
			...currentTodo,
			title: newTodoTitle,
		};
		setTodos((prevTodos) => {
			return [
				...prevTodos.slice(0, currentTodoIndex),
				updatedTodo,
				...prevTodos.slice(currentTodoIndex + 1, prevTodos.length),
			];
		});
	};

	return (
		<TodosWrapper>
			<h1>ToDos</h1>
			<section className={styles['todos-form']}>
				<h2>Todo input</h2>
				<NewTodo onAddTodo={addTodoHandler} />
			</section>
			<section>
				{todos && todos.length > 0 ? (
					<div>
						<h2>Todo List</h2>
						<p className={styles['todos-text']}>use buttons to manage todos</p>
						<TodoList
							items={todos}
							onDoneTodo={doneTodoHandler}
							onRemoveTodo={removeTodoHandler}
							onSaveEditTodo={saveEditTodoHandler}
						/>
					</div>
				) : (
					<NoTodos />
				)}
			</section>
		</TodosWrapper>
	);
};

export default Todos;
