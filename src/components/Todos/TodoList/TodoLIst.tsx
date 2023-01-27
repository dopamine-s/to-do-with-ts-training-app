import { FC } from 'react';

import { TodoInterface } from '../../../types/todo';
import TodoItem from '../TodoItem/TodoItem';

interface TodoListProps {
	items: TodoInterface[];
}

const Todos: FC<TodoListProps> = (props) => {
	return (
		<ul>
			{props.items.map((item) => (
				<TodoItem
					key={item.id}
					title={item.title}
				/>
			))}
		</ul>
	);
};

export default Todos;
