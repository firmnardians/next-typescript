import styled from '@emotion/styled';

export const ContainerWrapper = styled.div`
	display: flex;

	.container {
		width: 100%;
		padding: 40px 20px;
		overflow-y: scroll;
		height: 100svh;

		@media only screen and (max-width: 768px) {
			padding-bottom: 100px;
		}
	}
`;
