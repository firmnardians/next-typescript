import React, { ReactNode, memo } from 'react';
import { LayoutWrapper } from './styled/layout.styled';
import { IconArrow } from '../../assets/svg/icon';
import { useRouter } from 'next/router';

const _Layout = ({ children, title, isBack = false }: { children: ReactNode; title: string; isBack?: boolean }): JSX.Element => {
	const router = useRouter();

	return (
		<LayoutWrapper>
			<div className='d-flex align-items-center'>
				{isBack && (
					<span onClick={() => router.push('/')} style={{ cursor: 'pointer', paddingRight: 20 }}>
						<IconArrow />
					</span>
				)}
				<h2>{title}</h2>
			</div>

			{children}
		</LayoutWrapper>
	);
};

const Layout = memo(_Layout);
export default Layout;
