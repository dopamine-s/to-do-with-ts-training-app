import { ChangeEvent, FC, KeyboardEvent } from 'react';

import styles from './Input.module.css';

interface InputProps {
	value: string;
	isValid: boolean;
	onChange(event: ChangeEvent<HTMLInputElement>): void;
	onKeyDown?(event: KeyboardEvent<HTMLInputElement>): void;
}

const Input: FC<InputProps> = ({ value, isValid, onChange, onKeyDown }) => (
	<input
		className={`${styles.input} ${!isValid && styles['input--invalid']}`}
		type="text"
		value={value}
		onChange={onChange}
		onKeyDown={onKeyDown}
	/>
);

export default Input;
