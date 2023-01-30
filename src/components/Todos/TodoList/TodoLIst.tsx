import { FC } from 'react';

import { TodoInterface } from '../../../types/todo';
import TodoItem from '../TodoItem/TodoItem';

interface TodoListProps {
	items: TodoInterface[];
}

const Todos: FC<TodoListProps> = ({ items }) => {
	return (
		<ul>
			{items.map((item) => (
				<TodoItem
					key={item.id}
					id={item.id}
					title={item.title}
					isFinished={item.isFinished}
				/>
			))}
		</ul>
	);
};

export default Todos;
