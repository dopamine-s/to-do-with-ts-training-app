import { FC } from 'react';

import { TodoInterface } from '../../../types/todo';
import TodoItem from '../TodoItem/TodoItem';

interface TodoListProps {
	items: TodoInterface[];
	onDoneTodo: (id: string) => void;
	onRemoveTodo: (id: string) => void;
	onSaveEditTodo: (id: string, newTodoTitle: string) => void;
}

const Todos: FC<TodoListProps> = ({ items, onDoneTodo, onRemoveTodo, onSaveEditTodo }) => {
	return (
		<ul>
			{items.map((item) => (
				<TodoItem
					key={item.id}
					id={item.id}
					title={item.title}
					isFinished={item.isFinished}
					onRemoveTodo={onRemoveTodo}
					onDoneTodo={onDoneTodo}
					onSaveEditTodo={onSaveEditTodo}
				/>
			))}
		</ul>
	);
};

export default Todos;
