import { ChangeEvent, FC } from 'react';

interface InputProps {
	placeholder?: string;
	value: string;
	onChange(event: ChangeEvent<HTMLInputElement>): void;
}

const Input: FC<InputProps> = ({ placeholder, onChange, value }) => (
	<input
		type="text"
		placeholder={placeholder}
		value={value}
		onChange={onChange}
	/>
);

export default Input;
