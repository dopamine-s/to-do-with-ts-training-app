import { ChangeEvent, FC, FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import { todosActions } from '../../../store';
import Button from '../../UI/Button/Button';
import Input from '../../UI/Input/Input';
import styles from './NewTodo.module.css';

const NewTodo: FC = () => {
	const [title, setTitle] = useState<string>('');
	const [isValid, setIsValid] = useState<boolean>(true);
	const dispatch = useDispatch();

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

		dispatch(
			todosActions.addTodo({
				id: uuidv4(),
				title: todoTitle,
				isFinished: false,
			}),
		);
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
				type="submit"
				classes="input"
			>
				Add Todo
			</Button>
		</form>
	);
};
export default NewTodo;
