import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { TodoInterface } from '../../types/todo';
import TodoList from '../Todos/TodoList/TodoLIst';
import NewTodo from './NewTodo/NewTodo';
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

	return (
		<TodosWrapper>
			<h1>ToDos</h1>
			<section className={styles['todos-form']}>
				<NewTodo onAddTodo={addTodoHandler} />
			</section>
			<section id="goals">
				{todos && todos.length > 0 ? (
					<div>
						<h2>Todo List</h2>
						<TodoList items={todos} />
					</div>
				) : (
					<p className={styles['todos-empty']}>No Todos found. Maybe add one?</p>
				)}
			</section>
		</TodosWrapper>
	);
};

export default Todos;
