import { ChangeEvent, FC, FormEvent, useState } from 'react';

import Input from '../../UI/Input/Input';

interface NewTodoProps {
	onAddTodo: (todoTitle: string) => void;
}

const NewTodo: FC<NewTodoProps> = ({ onAddTodo }) => {
	const [title, setTitle] = useState<string>('');
	// const [isValid, setIsValid] = useState<boolean>(true);

	const todoInputChangeHandler = (event: ChangeEvent<HTMLInputElement>): void => {
		if (event.target.value.trim().length > 0) {
			// setIsValid(true);
		}
		setTitle(event.target.value);
	};

	const submitHandler = (event: FormEvent<HTMLFormElement>): void => {
		event.preventDefault();

		const todoTitle = title;

		if (!todoTitle || todoTitle.trim().length === 0) {
			// setIsValid(false);

			return;
		}

		onAddTodo(todoTitle);
		setTitle('');
	};

	return (
		<form onSubmit={submitHandler}>
			<label htmlFor="text">Todo text</label>
			<Input
				placeholder="Add a new todo"
				onChange={todoInputChangeHandler}
				value={title}
			/>
			<button>Add Todo</button>
		</form>
	);
};
export default NewTodo;
