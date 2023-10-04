import React, { ReactNode } from 'react';
import { LayoutWrapper } from './styled/layout.styled';

export default function Layout({ children, title }: { children: ReactNode; title: string }) {
	return (
		<LayoutWrapper>
			<h2>{title}</h2>
			{children}
		</LayoutWrapper>
	);
}
