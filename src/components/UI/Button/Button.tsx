import classnames from 'classnames';
import { FC, PropsWithChildren } from 'react';

import styles from './Button.module.scss';

interface ButtonProps {
	type?: 'button' | 'submit' | 'reset';
	variant?: 'delete' | 'done' | 'edit' | 'input';
	onClick?: () => void;
}

const Button: FC<PropsWithChildren<ButtonProps>> = ({
	type = 'button',
	children,
	onClick,
	variant,
}) => {
	const buttonClassnames = classnames(styles.button, {
		[styles.done]: variant === 'done',
		[styles.delete]: variant === 'delete',
		[styles.edit]: variant === 'edit',
		[styles.input]: variant === 'input',
	});

	return (
		<button
			type={type}
			className={buttonClassnames}
			onClick={onClick}
		>
			{children}
		</button>
	);
};

export default Button;
