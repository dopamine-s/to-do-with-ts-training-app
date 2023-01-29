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

	const addTodoHandler = (todoText: string) => {
		const newTodo = {
			title: todoText,
			id: uuidv4(),
		};

		setTodos((prevTodos) => {
			return [...prevTodos, newTodo];
		});
	};

	const removeTodoHandler = (todoId: string) => {
		setTodos((prevTodos) => {
			return prevTodos.filter((todo) => todo.id !== todoId);
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
							onRemoveTodo={removeTodoHandler}
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
