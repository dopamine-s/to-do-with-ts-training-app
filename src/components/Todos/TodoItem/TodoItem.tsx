import { FC } from 'react';

import TodoControlButtons from '../TodoControlButtons/TodoControlButtons';
import styles from './TodoItem.module.css';

interface TodoItemProps {
	title: string;
	id: string;
	isFinished: boolean;
	onDoneTodo: (id: string) => void;
	onRemoveTodo: (id: string) => void;
}

const TodoItem: FC<TodoItemProps> = ({ title, id, isFinished, onDoneTodo, onRemoveTodo }) => {
	const onDoneHandler = () => {
		onDoneTodo(id);
	};

	const onEditHandler = () => {
		//
	};

	const onRemoveHandler = () => {
		onRemoveTodo(id);
	};

	return (
		<li className={isFinished ? styles['todo-item'] + ' ' + styles.finished : styles['todo-item']}>
			<p>{title}</p>
			<TodoControlButtons
				onEditTodo={onEditHandler}
				onDoneTodo={onDoneHandler}
				onRemoveTodo={onRemoveHandler}
				isFinished={isFinished}
			/>
		</li>
	);
};

export default TodoItem;
