import { FC } from 'react';

import { TodoInterface } from '../../../types/todo';
import TodoItem from '../TodoItem/TodoItem';

interface TodoListProps {
	items: TodoInterface[];
	onRemoveTodo: (id: string) => void;
}

const Todos: FC<TodoListProps> = ({ items, onRemoveTodo }) => {
	return (
		<ul>
			{items.map((item) => (
				<TodoItem
					key={item.id}
					id={item.id}
					title={item.title}
					onRemoveTodo={onRemoveTodo}
				/>
			))}
		</ul>
	);
};

export default Todos;
