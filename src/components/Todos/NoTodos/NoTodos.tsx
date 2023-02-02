import { FC } from 'react';

import styles from './NoTodos.module.scss';

const NoTodos: FC = () => {
	return <p className={styles['no-todos']}>No Todos found. Maybe add one?</p>;
};

export default NoTodos;
