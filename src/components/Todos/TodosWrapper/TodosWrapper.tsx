import { FC, ReactNode } from 'react';

import styles from './TodosWrapper.module.css';

interface TodosWrapperProps {
	children: ReactNode;
}

const TodosWrapper: FC<TodosWrapperProps> = ({ children }) => (
	<div className={styles.todos}>{children}</div>
);

export default TodosWrapper;
