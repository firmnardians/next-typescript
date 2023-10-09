import React, { Fragment, useEffect, useState } from 'react';
import { ProfileWrapper } from './styled/profile.styled';
import { useRouter } from 'next/router';
import List from '../list/List';
import { DATA_CONNECTIONS } from '../../assets/source';

const KEY = {
	FOLLOWER: 'FOLLOWER',
	FOLLOWING: 'FOLLOWING',
};

export default function Profile() {
	const [key, setKey] = useState(KEY.FOLLOWER);
	const [animate, setAnimate] = useState(false);
	const [source, setSource] = useState(DATA_CONNECTIONS);

	const router = useRouter();
	const { pathname } = router;

	function handleConnection(select: any) {
		setSource((prevState) =>
			prevState.map((item) => {
				return item?.id === select?.id ? { ...item, is_following: !item?.is_following } : item;
			})
		);
	}

	useEffect(() => {
		if (pathname === '/') setAnimate(true);
		return () => setAnimate(false);
	}, [pathname]);

	return (
		<ProfileWrapper active={animate}>
			<div className='tabs'>
				<div className='row g-0 m-0'>
					<div onClick={() => setKey(KEY.FOLLOWER)} className={`col-6 tab ${key === KEY.FOLLOWER ? 'tab-active' : ''}`}>
						<p>Followers</p>
					</div>

					<div onClick={() => setKey(KEY.FOLLOWING)} className={`col-6 tab ${key === KEY.FOLLOWING ? 'tab-active' : ''}`}>
						<p>Following</p>
					</div>
				</div>
			</div>

			<div className='body-scroll'>
				{key === KEY.FOLLOWER ? (
					<Fragment>
						{source.map((item) => {
							return <List key={item?.id} data={item} onClick={(select) => handleConnection(select)} />;
						})}
					</Fragment>
				) : (
					<Fragment>
						{source
							?.filter((data) => data?.is_following === true)
							.map((item) => {
								return <List key={item?.id} data={item} onClick={(select) => handleConnection(select)} />;
							})}
					</Fragment>
				)}
			</div>
		</ProfileWrapper>
	);
}
