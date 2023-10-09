import styled from '@emotion/styled';

export const ListWrapper = styled.div`
	padding: 10px 10px;

	.profile-wrapper {
		img {
			width: 60px;
			height: 60px;
			object-fit: cover;
			border-radius: 6px;
			border: 1px solid #ffffff;
		}

		.info-wrapper {
			padding-left: 10px;
			display: flex;
			align-items: flex-start;
			justify-content: center;
			flex-direction: column;

			p {
				margin-bottom: 0px;
			}
		}
	}

	.button-connection {
		background-color: transparent;
		border: 1px solid #ffffff;
		align-items: center;
		justify-content: center;
		display: flex;
		padding: 8px 12px;
		border-radius: 100px;
		cursor: pointer;

		p {
			margin: 0px;
			font-size: 14px;
			color: #ffffff;
			font-weight: bold;
		}
	}

	.button-connection-active {
		background-color: #ffffff;
		border: 1px solid #ffffff;

		p {
			color: #000000;
			font-weight: bold;
		}
	}
`;
