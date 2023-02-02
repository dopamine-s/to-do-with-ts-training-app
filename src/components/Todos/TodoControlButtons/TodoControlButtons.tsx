import { FC } from 'react';

import Button from '../../UI/Button/Button';
import styles from './TodoControlButtons.module.scss';

interface TodoControlButtonsProps {
	onDoneTodo(): void;
	onChangeEditMode(): void;
	onRemoveTodo(): void;
	onSaveEditTodo(): void;
	isFinished: boolean;
	isEditMode: boolean;
}

const TodoControlButtons: FC<TodoControlButtonsProps> = ({
	isFinished,
	onDoneTodo,
	onChangeEditMode,
	onRemoveTodo,
	onSaveEditTodo,
	isEditMode,
}) => {
	return (
		<div className={styles.buttons}>
			{!isEditMode && (
				<Button
					onClick={onDoneTodo}
					variant="done"
				>
					{isFinished ? 'Resume' : 'Done'}
				</Button>
			)}
			<Button
				onClick={onChangeEditMode}
				variant="edit"
			>
				{isEditMode ? 'Cancel' : 'Edit'}
			</Button>
			{isEditMode && (
				<Button
					onClick={onSaveEditTodo}
					variant="done"
				>
					Save
				</Button>
			)}
			{!isEditMode && (
				<Button
					onClick={onRemoveTodo}
					variant="delete"
				>
					Delete
				</Button>
			)}
		</div>
	);
};

export default TodoControlButtons;
