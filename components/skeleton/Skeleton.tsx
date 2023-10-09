import React, { memo } from 'react';
import { SkeletonWrapper } from './styled/skeleton.styled';
import { SKELETON_WIDTH } from '../../constant';

const _Skeleton = () => {
	return (
		<SkeletonWrapper>
			{SKELETON_WIDTH?.map((item, index) => {
				return <div key={index} className={`${item} skeleton paragraph`} />;
			})}
		</SkeletonWrapper>
	);
};

const Skeleton = memo(_Skeleton);
export default Skeleton;
