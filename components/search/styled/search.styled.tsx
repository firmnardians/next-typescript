import styled from '@emotion/styled';

export const SearchWrapper = styled.div`
	transition: all 1s ease-in-out;

	.btn-wrapper {
		bottom: 20px;

		@media only screen and (max-width: 768px) {
			bottom: 60px;
			left: 0;
			right: 0;
			padding: 20px;

			button {
				width: 100%;
			}
		}
	}
`;
