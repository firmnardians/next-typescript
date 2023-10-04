import React, { ReactNode } from 'react';
import Sidebar from '../sidebar/Sidebar';
import { ContainerWrapper } from './styled/container.styled';

export default function Container({ children }: { children: ReactNode }) {
	return (
		<ContainerWrapper>
			<Sidebar />
			<div className='container'>{children}</div>
		</ContainerWrapper>
	);
}
