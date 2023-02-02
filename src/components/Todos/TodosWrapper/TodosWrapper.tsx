import { FC, PropsWithChildren } from 'react';

import styles from './TodosWrapper.module.scss';

const TodosWrapper: FC<PropsWithChildren> = ({ children }) => (
	<main className={styles.todos}>{children}</main>
);

export default TodosWrapper;
