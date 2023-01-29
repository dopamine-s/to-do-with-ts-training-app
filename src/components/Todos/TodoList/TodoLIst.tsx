import { FC } from 'react';

import { TodoInterface } from '../../../types/todo';
import TodoItem from '../TodoItem/TodoItem';

interface TodoListProps {
	items: TodoInterface[];
	onDoneTodo: (id: string) => void;
	onRemoveTodo: (id: string) => void;
}

const Todos: FC<TodoListProps> = ({ items, onDoneTodo, onRemoveTodo }) => {
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
				/>
			))}
		</ul>
	);
};

export default Todos;
