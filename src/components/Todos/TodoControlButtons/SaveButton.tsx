import { FC } from 'react';

import Button from '../../UI/Button/Button';

interface SaveButtonProps {
	onClick(): void;
	classes?: string | undefined;
}

const SaveButton: FC<SaveButtonProps> = ({ onClick, classes }) => (
	<Button
		onClick={onClick}
		classes={classes}
	>
		Save
	</Button>
);

export default SaveButton;
