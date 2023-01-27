import { ChangeEvent, FC } from 'react';

import styles from './Input.module.css';

interface InputProps {
	value: string;
	isValid: boolean;
	onChange(event: ChangeEvent<HTMLInputElement>): void;
}

const Input: FC<InputProps> = ({ value, isValid, onChange }) => (
	<input
		className={`${styles.input} ${!isValid && styles['input--invalid']}`}
		type="text"
		value={value}
		onChange={onChange}
	/>
);

export default Input;
