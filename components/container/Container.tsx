import React, { ReactNode, memo } from 'react';
import Sidebar from '../sidebar/Sidebar';
import { ContainerWrapper } from './styled/container.styled';
import { useRouter } from 'next/router';
import Profile from '../profile/Profile';

const _Container = ({ children }: { children: ReactNode }): JSX.Element => {
	const router = useRouter();
	const { pathname } = router;

	return (
		<ContainerWrapper>
			<Sidebar />
			<div className='container'>{children}</div>
			{pathname === '/' && <Profile />}
		</ContainerWrapper>
	);
};

const Container = memo(_Container);
export default Container;
