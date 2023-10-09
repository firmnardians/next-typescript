import styled from '@emotion/styled';

export const SliderWrapper = styled.div`
	padding: 0px;

	.rc-slider-rail {
		background-color: grey;
	}

	.rc-slider-track,
	.rc-slider-tracks {
		background-color: transparent;
		background-image: linear-gradient(to right, red, yellow);
	}

	.rc-slider-mark-text-active {
		color: #ffffff;
	}
`;
