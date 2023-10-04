import React from 'react';
import { SidebarWrapper } from './styled/sidebar.styled';
import { IconHome, IconLayout } from '../../assets/svg/icon';
import Link from 'next/link';

export default function Sidebar() {
	return (
		<SidebarWrapper>
			<div className='list-menu'>
				<ul>
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
}
