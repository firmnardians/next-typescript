import styled from '@emotion/styled';

export const InputWrapper = styled.div`
	padding: 0px;

	input {
		height: 60px;
		border-radius: 6px;
		border: 3px solid var(--greyscale-white-50);
		background: var(--greyscale-bg-dark);
		padding: 20px;
		width: 100%;
		outline: none;

		&:focus {
			border: 3px solid var(--tutor-main);
		}
	}
`;
