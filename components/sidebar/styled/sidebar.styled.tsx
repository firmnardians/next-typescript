import styled from '@emotion/styled';

export const SidebarWrapper = styled.aside`
	background-color: var(--greyscale-light-bg);
	height: 100svh;

	@media only screen and (max-width: 768px) {
		display: none;
	}

	.list-menu {
		padding: 10px;

		ul {
			display: block;
			padding: 0px;
			margin-top: 15px;
			margin-bottom: 35px;

			li {
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				list-style: none;
				padding: 20px;
				cursor: pointer;
				margin-bottom: 10px;

				&:hover {
					background-color: #404040;
					border-radius: 10px;
				}

				p {
					margin: 0px;
					padding-top: 10px;
					font-size: 16px;
					font-weight: 600;
				}
			}

			.logo {
				&:hover {
					background-color: transparent;
				}
			}
		}
	}
`;
