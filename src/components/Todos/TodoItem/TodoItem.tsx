import { FC } from 'react';

import TodoControlButtons from '../TodoControlButtons/TodoControlButtons';
import styles from './TodoItem.module.css';

interface TodoItemProps {
	title: string;
	id: string;
	onRemoveTodo: (id: string) => void;
}

const TodoItem: FC<TodoItemProps> = ({ title, id, onRemoveTodo }) => {
	const onDoneHandler = () => {
		//
	};

	const onEditHandler = () => {
		//
	};

	const onRemoveHandler = () => {
		onRemoveTodo(id);
	};

	return (
		<li className={styles['todo-item']}>
			<p>{title}</p>
			<TodoControlButtons
				onEditTodo={onEditHandler}
				onDoneTodo={onDoneHandler}
				onRemoveTodo={onRemoveHandler}
			/>
		</li>
	);
};

export default TodoItem;
