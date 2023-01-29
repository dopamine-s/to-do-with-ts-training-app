import { FC } from 'react';

import Button from '../../UI/Button/Button';

interface DoneButtonProps {
	onClick(): void;
	classes?: string | undefined;
	isFinished: boolean;
}

const DeleteButton: FC<DoneButtonProps> = ({ isFinished, onClick, classes }) => (
	<Button
		onClick={onClick}
		classes={classes}
	>
		{isFinished ? 'Resume' : 'Done'}
	</Button>
);

export default DeleteButton;
