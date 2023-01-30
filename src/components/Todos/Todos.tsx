import { useSelector } from 'react-redux';

import { State } from '../../store';
import { TodoInterface } from '../../types/todo';
import TodoList from '../Todos/TodoList/TodoLIst';
import NewTodo from './NewTodo/NewTodo';
import NoTodos from './NoTodos/NoTodos';
import styles from './Todos.module.css';
import TodosWrapper from './TodosWrapper/TodosWrapper';

const Todos = () => {
	const todos: TodoInterface[] = useSelector((state: State) => state.todos);

	return (
		<TodosWrapper>
			<h1>ToDos</h1>
			<section className={styles['todos-form']}>
				<h2>Todo input</h2>
				<NewTodo />
			</section>
			<section>
				{todos && todos.length > 0 ? (
					<div>
						<h2>Todo List</h2>
						<p className={styles['todos-text']}>use buttons to manage todos</p>
						<TodoList items={todos} />
					</div>
				) : (
					<NoTodos />
				)}
			</section>
		</TodosWrapper>
	);
};

export default Todos;
