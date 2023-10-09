import React, { ReactNode, memo } from 'react';
import { LayoutWrapper } from './styled/layout.styled';

const _Layout = ({ children, title }: { children: ReactNode; title: string }) => {
	return (
		<LayoutWrapper>
			<h2>{title}</h2>

			{children}
		</LayoutWrapper>
	);
};

const Layout = memo(_Layout);
export default Layout;
