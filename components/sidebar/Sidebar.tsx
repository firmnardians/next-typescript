import React, { memo } from 'react';
import { SidebarWrapper } from './styled/sidebar.styled';
import { IconHome, IconLayout } from '../../assets/svg/icon';
import Link from 'next/link';
import { LogoSVG } from '../../assets/svg';

const _Sidebar = (): JSX.Element => {
	return (
		<SidebarWrapper>
			<div className='list-menu'>
				<ul>
					<li className='logo'>
						<LogoSVG />
					</li>

					<Link href='/'>
						<li>
							<IconHome />
							<p>Home</p>
						</li>
					</Link>

					<Link href='/tags'>
						<li>
							<IconLayout />
							<p>Tags</p>
						</li>
					</Link>
				</ul>
			</div>
		</SidebarWrapper>
	);
};

const Sidebar = memo(_Sidebar);
export default Sidebar;
