import React, { FC, memo } from 'react';
import { SearchWrapper } from './styled/search.styled';
import Input from '../input/Input';
import SliderRange from '../slider/Slider';
import Button from '../button/Button';
import { SearchPageType } from '../../type';

const _Search: FC<SearchPageType> = ({ value, isDisabled, onChangeInput, onClickButton, result, onChangeSlider }) => {
	return (
		<SearchWrapper>
			<Input placeholder='Keyword' value={value} onChange={onChangeInput} />

			<div className='mt-5'>
				<h4># Of Results Per Page</h4>

				<div className='d-flex align-items-end mb-2'>
					<h1 className='mb-0'>{result}</h1> <p className='mb-2 ps-2'>results</p>
				</div>

				<SliderRange onChange={onChangeSlider} />
			</div>

			<div className='position-absolute' style={{ bottom: 20 }}>
				<Button title='Search' disabled={isDisabled} onClick={onClickButton} />
			</div>
		</SearchWrapper>
	);
};

const Search = memo(_Search);
export default Search;
