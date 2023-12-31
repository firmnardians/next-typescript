import React, { FC, memo } from 'react';
import { TagWrapper } from './styled/tag.styled';
import { TagSVG } from '../../assets/svg';
import { TagType } from '../../type';

const _Tag: FC<{ item: TagType }> = ({ item }): JSX.Element => {
	return (
		<TagWrapper>
			<div className='card-wrapper'>
				<div className='svg-wrapper'>
					<TagSVG />
				</div>

				<div className='title-wrapper'>
					<p>{item?.name}</p>
				</div>
			</div>

			<div className='info-wrapper'>
				<p>{item?.name}</p>
				<small>{item?.website}</small>
			</div>
		</TagWrapper>
	);
};

const Tag = memo(_Tag);
export default Tag;
