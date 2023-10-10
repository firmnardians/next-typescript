import React, { useEffect, useState } from 'react';
import Layout from '../components/layout/Layout';
import customFetch from '../helper/fetch';
import Tag from '../components/tag/Tag';
import Skeleton from '../components/skeleton/Skeleton';
import { NextPage } from 'next';
import toast from 'react-hot-toast';
import { TagStateType } from '../type';

const Tags: NextPage = () => {
	const [data, setData] = useState<TagStateType>({ source: [], isLoading: true });

	let ONFETCH = false;
	function getListingTag() {
		ONFETCH = true;
		setData((prevState) => ({ ...prevState, isLoading: true }));

		customFetch({ endpoint: 'users' })
			.then((res) => setData((prevState) => ({ ...prevState, source: res })))
			.catch((err) => toast.error(`${err?.message}`))
			.finally(() => {
				setData((prevState) => ({ ...prevState, isLoading: false }));
				ONFETCH = false;
			});
	}

	useEffect(() => {
		if (!ONFETCH) getListingTag();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Layout title='Tags'>
			<div className='mt-5'>
				{data?.isLoading ? (
					<Skeleton />
				) : (
					<div className='row row-cols-5 '>
						{data?.source?.map((item, index) => {
							return (
								<div key={index} className='col'>
									<Tag item={item} />
								</div>
							);
						})}
					</div>
				)}
			</div>
		</Layout>
	);
};

export default Tags;
