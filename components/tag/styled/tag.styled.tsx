import styled from '@emotion/styled';

export const TagWrapper = styled.div`
	padding-bottom: 40px;

	.card-wrapper {
		position: relative;

		.svg-wrapper {
			border-radius: 8px;
		}

		.title-wrapper {
			position: absolute;
			bottom: 10px;
			left: 10px;
			right: 10px;
			border-radius: 8px;
			border: 4px solid #fff;
			display: inline-flex;
			padding: 7px 14px;
			overflow: hidden;
			text-overflow: ellipsis;
			display: -webkit-box;
			-webkit-line-clamp: 1;
			-webkit-box-orient: vertical;

			p {
				margin-bottom: 0;
			}
		}
	}

	.info-wrapper {
		padding-top: 15px;

		p {
			margin-bottom: 2px;
			color: #ffffff;
		}

		small {
			color: #b2b2b2;
		}
	}
`;
