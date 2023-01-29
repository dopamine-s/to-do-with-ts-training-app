import { FC } from 'react';

import Button from '../../UI/Button/Button';

interface DoneButtonProps {
	onClick(): void;
	classes?: string | undefined;
}

const DeleteButton: FC<DoneButtonProps> = ({ onClick, classes }) => (
	<Button
		onClick={onClick}
		classes={classes}
	>
		Done
	</Button>
);

export default DeleteButton;
