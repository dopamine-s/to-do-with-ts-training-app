import { FC } from 'react';

import Button from '../../UI/Button/Button';

interface EditButtonProps {
	onClick(): void;
	classes?: string | undefined;
	isEditMode: boolean;
}

const DeleteButton: FC<EditButtonProps> = ({ onClick, classes, isEditMode }) => (
	<Button
		onClick={onClick}
		classes={classes}
	>
		{isEditMode ? 'Cancel' : 'Edit'}
	</Button>
);

export default DeleteButton;
