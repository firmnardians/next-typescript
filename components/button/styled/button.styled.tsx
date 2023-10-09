import styled from '@emotion/styled';

export const ButtonWrapper = styled.div`
	padding-top: 20px;
	padding-bottom: 20px;

	button {
		background-color: #ffffff;
		padding: 13px 16px;
		gap: 10px;
		align-items: center;
		display: flex;
		justify-content: center;
		color: #000000;
		width: 343px;
		border-radius: 4px;
		border: 2px solid #ffffff;
		transition: all 0.4s ease-in-out;
		text-transform: uppercase;
		font-weight: bold;

		&:hover {
			border: 2px solid #ffffff;
			background-color: transparent;
			color: #ffffff;
		}
	}
`;
