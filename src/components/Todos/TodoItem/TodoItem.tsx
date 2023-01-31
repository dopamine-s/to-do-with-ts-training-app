import { ChangeEvent, FC, KeyboardEvent, useState } from 'react';
import { useDispatch } from 'react-redux';

import { todosActions } from '../../../store';
import Input from '../../UI/Input/Input';
import TodoControlButtons from '../TodoControlButtons/TodoControlButtons';
import styles from './TodoItem.module.css';

interface TodoItemProps {
	title: string;
	id: string;
	isFinished: boolean;
}

const TodoItem: FC<TodoItemProps> = ({ title, id, isFinished }) => {
	const [isEditMode, setIsEditMode] = useState<boolean>(false);
	const [isValid, setIsValid] = useState<boolean>(true);
	const [newTitle, setNewTitle] = useState<string>(title);
	const dispatch = useDispatch();

	const onKeyDown = (event: KeyboardEvent<HTMLInputElement>): void => {
		if (isEditMode) {
			if (event.key === 'Enter') {
				saveEditTodoHandler();
			}
		}
	};

	const toggleTodoDoneHandler = (): void => {
		dispatch(todosActions.updateTodo({ id, title, isFinished: !isFinished }));
	};

	const changeEditModeHandler = (): void => {
		setNewTitle(title);
		setIsEditMode((prevState) => !prevState);
	};

	const removeTodoHandler = (): void => {
		dispatch(
			todosActions.removeTodo({
				id,
			}),
		);
	};

	const todoInputChangeHandler = (event: ChangeEvent<HTMLInputElement>): void => {
		if (event.target.value.trim().length > 0) {
			setIsValid(true);
		} else {
			setIsValid(false);
		}
		setNewTitle(event.target.value);
	};

	const saveEditTodoHandler = (): void => {
		if (!newTitle || (newTitle && !isValid)) {
			setNewTitle(title);

			return;
		}

		dispatch(
			todosActions.updateTodo({
				id,
				title: newTitle,
				isFinished,
			}),
		);

		changeEditModeHandler();
	};

	return (
		<li
			className={
				!isEditMode && isFinished
					? styles['todo-item'] + ' ' + styles.finished
					: styles['todo-item']
			}
		>
			{!isEditMode && <p>{title}</p>}
			{isEditMode && (
				<Input
					onChange={todoInputChangeHandler}
					value={newTitle}
					isValid={isValid}
					onKeyDown={onKeyDown}
				/>
			)}
			<TodoControlButtons
				onChangeEditMode={changeEditModeHandler}
				onDoneTodo={toggleTodoDoneHandler}
				onRemoveTodo={removeTodoHandler}
				onSaveEditTodo={saveEditTodoHandler}
				isFinished={isFinished}
				isEditMode={isEditMode}
			/>
		</li>
	);
};

export default TodoItem;
