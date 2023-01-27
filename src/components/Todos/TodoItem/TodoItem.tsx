import { FC } from 'react';

import styles from './TodoItem.module.css';

interface TodoItemProps {
	title: string;
	id: string;
	onRemoveTodo: (id: string) => void;
}

const TodoItem: FC<TodoItemProps> = ({ title, id, onRemoveTodo }) => {
	const onRemoveHandler = () => {
		onRemoveTodo(id);
	};

	return (
		<li
			className={styles['todo-item']}
			onClick={onRemoveHandler}
		>
			{title}
		</li>
	);
};

export default TodoItem;
