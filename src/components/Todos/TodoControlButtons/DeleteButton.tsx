import { FC } from 'react';

import Button from '../../UI/Button/Button';

interface DeleteButtonProps {
	onClick(): void;
	classes?: string | undefined;
}

const DeleteButton: FC<DeleteButtonProps> = ({ onClick, classes }) => (
	<Button
		onClick={onClick}
		classes={classes}
	>
		Delete
	</Button>
);

export default DeleteButton;
