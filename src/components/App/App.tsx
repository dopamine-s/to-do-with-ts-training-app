import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { TodoInterface } from '../../types/todo';
import NewTodo from '../Todos/NewTodo/NewTodo';
import ToDos from '../Todos/Todos';

const App = () => {
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
		<div>
			<NewTodo onAddTodo={addTodoHandler} />
			<ToDos items={todos} />
		</div>
	);
};

export default App;
