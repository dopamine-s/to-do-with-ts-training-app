import { FC, ReactNode } from 'react';

import styles from './Button.module.css';

interface ButtonProps {
	type?: 'button' | 'submit' | 'reset';
	children: ReactNode;
	onClick?: () => void;
	classes?: string | undefined;
}

const Button: FC<ButtonProps> = ({ type = 'button', children, onClick, classes }) => (
	<button
		type={type}
		className={classes ? styles.button + ' ' + styles[`${classes}`] : styles.button}
		onClick={onClick}
	>
		{children}
	</button>
);

export default Button;
