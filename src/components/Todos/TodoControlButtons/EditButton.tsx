import { FC } from 'react';

import Button from '../../UI/Button/Button';

interface EditButtonProps {
	onClick(): void;
	classes?: string | undefined;
}

const DeleteButton: FC<EditButtonProps> = ({ onClick, classes }) => (
	<Button
		onClick={onClick}
		classes={classes}
	>
		Edit
	</Button>
);

export default DeleteButton;
