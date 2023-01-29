import { FC } from 'react';

import DeleteButton from './DeleteButton';
import DoneButton from './DoneButton';
import EditButton from './EditButton';
import styles from './TodoControlButtons.module.css';

interface DeleteButtonProps {
	onDoneTodo(): void;
	onEditTodo(): void;
	onRemoveTodo(): void;
}

const TodoControlButtons: FC<DeleteButtonProps> = ({ onDoneTodo, onEditTodo, onRemoveTodo }) => {
	return (
		<div className={styles.buttons}>
			<DoneButton
				onClick={onDoneTodo}
				classes="done"
			/>
			<EditButton
				onClick={onEditTodo}
				classes="edit"
			/>
			<DeleteButton
				onClick={onRemoveTodo}
				classes="delete"
			/>
		</div>
	);
};

export default TodoControlButtons;
