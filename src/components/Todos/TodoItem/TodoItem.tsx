import { FC } from 'react';

import styles from './TodoItem.module.css';

interface TodoItemProps {
	title: string;
}

const TodoItem: FC<TodoItemProps> = (props) => {
	return <li className={styles['todo-item']}>{props.title}</li>;
};

export default TodoItem;
