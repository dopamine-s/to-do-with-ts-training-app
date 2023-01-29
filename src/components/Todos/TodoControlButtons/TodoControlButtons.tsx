import { FC } from 'react';

import DeleteButton from './DeleteButton';
import DoneButton from './DoneButton';
import EditButton from './EditButton';
import SaveButton from './SaveButton';
import styles from './TodoControlButtons.module.css';

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
				<DoneButton
					onClick={onDoneTodo}
					classes="done"
					isFinished={isFinished}
				/>
			)}
			<EditButton
				onClick={onChangeEditMode}
				classes="edit"
				isEditMode={isEditMode}
			/>
			{isEditMode && (
				<SaveButton
					classes="done"
					onClick={onSaveEditTodo}
				/>
			)}
			{!isEditMode && (
				<DeleteButton
					onClick={onRemoveTodo}
					classes="delete"
				/>
			)}
		</div>
	);
};

export default TodoControlButtons;
