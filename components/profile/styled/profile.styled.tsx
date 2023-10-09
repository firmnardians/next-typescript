import styled from '@emotion/styled';

export const ProfileWrapper = styled.div<{ active: boolean }>`
	width: 600px;
	overflow-y: hidden;
	height: 100svh;
	padding-top: 20px;
	padding-left: 20px;
	transition: all 0.5s ease-in-out;
	transform: ${({ active }) => (active ? `translateX(0px)` : ` translateX(500px)`)};

	.tabs {
		padding: 0px;

		.row {
			width: 100%;

			.tab {
				align-items: center;
				justify-content: center;
				display: flex;
				padding: 20px;
				border-bottom: 2px solid #7c7c7c;
				cursor: pointer;
				transition: all 0.5s ease-in-out;

				p {
					margin-bottom: 0px;
					color: #7c7c7c;
					font-size: 16px;
					transition: all 0.5s ease-in-out;
				}
			}

			.tab-active {
				border-bottom: 2px solid #ffffff;

				p {
					color: #ffffff;
					font-size: 16px;
				}
			}
		}
	}

	.body-scroll {
		overflow-y: scroll;
		height: 100svh;
		padding-top: 20px;
		padding-bottom: 100px;
	}
`;
