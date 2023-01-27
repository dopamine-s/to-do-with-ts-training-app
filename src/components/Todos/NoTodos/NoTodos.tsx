import { FC } from 'react';

import styles from './NoTodos.module.css';

const NoTodos: FC = () => <p className={styles['no-todos']}>No Todos found. Maybe add one?</p>;

export default NoTodos;
