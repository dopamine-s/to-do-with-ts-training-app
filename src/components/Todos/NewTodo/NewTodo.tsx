import { ChangeEvent, FC, FormEvent, useState } from 'react';

import Button from '../../UI/Button/Button';
import Input from '../../UI/Input/Input';
import styles from './NewTodo.module.css';

interface NewTodoProps {
	onAddTodo: (todoTitle: string) => void;
}

const NewTodo: FC<NewTodoProps> = ({ onAddTodo }) => {
	const [title, setTitle] = useState<string>('');
	const [isValid, setIsValid] = useState<boolean>(true);

	const todoInputChangeHandler = (event: ChangeEvent<HTMLInputElement>): void => {
		if (event.target.value.trim().length > 0) {
			setIsValid(true);
		}
		setTitle(event.target.value);
	};

	const submitHandler = (event: FormEvent<HTMLFormElement>): void => {
		event.preventDefault();

		const todoTitle = title;

		if (!todoTitle || todoTitle.trim().length === 0) {
			setIsValid(false);

			return;
		}

		onAddTodo(todoTitle);
		setTitle('');
	};

	return (
		<form onSubmit={submitHandler}>
			<div className={`${styles['inner-wrapper']} ${!isValid && styles.invalid}`}>
				<label htmlFor="text">Todo text</label>
				<Input
					onChange={todoInputChangeHandler}
					value={title}
					isValid={isValid}
				/>
			</div>
			<Button
				type={'submit'}
				classes="input"
			>
				Add Todo
			</Button>
		</form>
	);
};
export default NewTodo;
