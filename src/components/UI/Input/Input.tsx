import classnames from 'classnames';
import { ChangeEvent, FC, KeyboardEvent } from 'react';

import styles from './Input.module.scss';

interface InputProps {
	value: string;
	isValid: boolean;
	onChange(event: ChangeEvent<HTMLInputElement>): void;
	onKeyDown?(event: KeyboardEvent<HTMLInputElement>): void;
}

const Input: FC<InputProps> = ({ value, isValid, onChange, onKeyDown }) => {
	const inputClassnames = classnames(styles.input, { [styles.invalid]: !isValid });

	return (
		<input
			className={inputClassnames}
			type="text"
			value={value}
			onChange={onChange}
			onKeyDown={onKeyDown}
		/>
	);
};
export default Input;
