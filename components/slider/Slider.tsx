import React, { FC, memo } from 'react';
import Slider, { SliderProps } from 'rc-slider';
import 'rc-slider/assets/index.css';
import { SliderWrapper } from './styled/slider.styled';

const _SliderRange: FC<SliderProps> = ({ ...props }): JSX.Element => {
	return (
		<SliderWrapper>
			<Slider min={3} max={50} defaultValue={12} marks={{ 3: 3, 6: 6, 9: 9, 12: 12, 15: 15, 50: 50 }} step={null} dots {...props} />
		</SliderWrapper>
	);
};

const SliderRange = memo(_SliderRange);
export default SliderRange;
