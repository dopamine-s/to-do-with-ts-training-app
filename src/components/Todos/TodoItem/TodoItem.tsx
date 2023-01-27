import { FC } from 'react';

interface TodoItemProps {
	title: string;
}

const TodoItem: FC<TodoItemProps> = (props) => {
	return <li>{props.title}</li>;
};

export default TodoItem;
