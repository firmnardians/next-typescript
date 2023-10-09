import React, { FC, memo } from 'react';
import { InputWrapper } from './styled/input.styled';
import { InputType } from '../../type';

const _Input: FC<InputType> = ({ ...props }) => {
	return (
		<InputWrapper>
			<input {...props} />
		</InputWrapper>
	);
};

const Input = memo(_Input);
export default Input;
