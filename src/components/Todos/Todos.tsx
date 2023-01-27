import { FC } from 'react';

import { TodoInterface } from '../../types/todo';
import TodoItem from './TodoItem/TodoItem';

interface TodosProps {
	items: TodoInterface[];
}

const ToDos: FC<TodosProps> = (props) => {
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

export default ToDos;
