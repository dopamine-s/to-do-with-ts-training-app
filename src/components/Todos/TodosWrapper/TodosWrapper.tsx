import { FC, ReactNode } from 'react';

import styles from './TodosWrapper.module.css';

interface TodosWrapperProps {
	children: ReactNode;
}

const TodosWrapper: FC<TodosWrapperProps> = ({ children }) => (
	<main className={styles.todos}>{children}</main>
);

export default TodosWrapper;
