import { FC, ReactNode } from 'react';

import styles from './Button.module.css';

interface ButtonProps {
	type?: 'button' | 'submit' | 'reset';
	children: ReactNode;
	onClick?: () => void;
}

const Button: FC<ButtonProps> = ({ type = 'submit', children, onClick }) => (
	<button
		type={type}
		className={styles.button}
		onClick={onClick}
	>
		{children}
	</button>
);

export default Button;
