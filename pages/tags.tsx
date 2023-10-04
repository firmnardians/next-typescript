import React, { useEffect, useState } from 'react';
import Layout from '../components/layout/Layout';
import customFetch from '../helper/fetch';
import Tag from '../components/tag/Tag';

let ONFETCH = false;

export default function Tags() {
	const [data, setData] = useState({ source: [], isLoading: true });

	function getListingTag() {
		setData((prevState) => ({ ...prevState, isLoading: true }));

		customFetch({ endpoint: 'users' })
			.then((res) => {
				setData((prevState) => ({ ...prevState, source: res }));
			})
			.catch((err) => {
				console.log(err);
			})
			.finally(() => {
				setData((prevState) => ({ ...prevState, isLoading: false }));
				ONFETCH = false;
			});
	}

	useEffect(() => {
		if (!ONFETCH) {
			ONFETCH = true;
			getListingTag();
		}
	}, []);

	return (
		<Layout>
			<p>Tags</p>

			{data?.source?.map((item, index) => {
				return <Tag key={index} />;
			})}
		</Layout>
	);
}
