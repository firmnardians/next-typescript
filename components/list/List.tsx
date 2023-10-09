/* eslint-disable @next/next/no-img-element */
import React, { FC, memo } from 'react';
import { ListWrapper } from './styled/list.styled';
import { ProfileType } from '../../type';

const _List: FC<{ data: ProfileType; onClick: (item: ProfileType) => void }> = ({ data, onClick }): JSX.Element => {
	function handleClick(item: ProfileType) {
		if (onClick) onClick(item);
	}

	return (
		<ListWrapper>
			<div className='row g-0 align-items-center justify-content-between'>
				<div className='col-8 d-flex profile-wrapper'>
					<img src={data?.image} alt='Image' />

					<div className='info-wrapper'>
						<p>{data?.fullname}</p>
						<p>{data?.username}</p>
					</div>
				</div>

				<div className='col-4'>
					<div onClick={() => handleClick(data)} className={`${data?.is_following ? 'button-connection-active' : ''} button-connection`}>
						{data?.is_following ? <p>Following</p> : <p>Follow</p>}
					</div>
				</div>
			</div>
		</ListWrapper>
	);
};

const List = memo(_List);
export default List;
