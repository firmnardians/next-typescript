import React, { FC, memo } from 'react';
import { ButtonWrapper } from './styled/button.styled';
import { ButtonType } from '../../type';

const _Button: FC<ButtonType & { title: string }> = ({ title, ...props }): JSX.Element => {
	return (
		<ButtonWrapper>
			<button {...props}>{title}</button>
		</ButtonWrapper>
	);
};

const Button = memo(_Button);
export default Button;
