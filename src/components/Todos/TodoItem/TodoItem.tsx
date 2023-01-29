import { ChangeEvent, FC, useState } from 'react';

import Input from '../../UI/Input/Input';
import TodoControlButtons from '../TodoControlButtons/TodoControlButtons';
import styles from './TodoItem.module.css';

interface TodoItemProps {
	title: string;
	id: string;
	isFinished: boolean;
	onDoneTodo: (id: string) => void;
	onRemoveTodo: (id: string) => void;
	onSaveEditTodo: (id: string, newTitle: string) => void;
}

const TodoItem: FC<TodoItemProps> = ({
	title,
	id,
	isFinished,
	onDoneTodo,
	onRemoveTodo,
	onSaveEditTodo,
}) => {
	const [isEditMode, setIsEditMode] = useState(false);
	const [isValid, setIsValid] = useState<boolean>(true);
	const [newTitle, setNewTitle] = useState<string>(title);

	const toggleTodoDoneHandler = () => {
		onDoneTodo(id);
	};

	const changeEditModeHandler = () => {
		setNewTitle(title);
		setIsEditMode((prevState) => !prevState);
	};

	const removeTodoHandler = () => {
		onRemoveTodo(id);
	};

	const todoInputChangeHandler = (event: ChangeEvent<HTMLInputElement>): void => {
		if (event.target.value.trim().length > 0) {
			setIsValid(true);
			setNewTitle(event.target.value);
		} else {
			setNewTitle(title);
		}
	};

	const saveEditTodoHandler = (): void => {
		if (!newTitle || newTitle.trim().length === 0) {
			setIsValid(false);
			setNewTitle(title);

			return;
		}
		onSaveEditTodo(id, newTitle);
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
