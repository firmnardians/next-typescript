/* eslint-disable @next/next/no-img-element */
import React, { memo, useEffect, useState } from 'react';
import { ResultPageWrapper } from './styled/result.styled';
import customFetch from '../../helper/fetch';
import toast from 'react-hot-toast';
import { useRouter } from 'next/router';
import Button from '../button/Button';
import Skeleton from '../skeleton/Skeleton';
import { ResultStateType } from '../../type';

const _ResultPage = (): JSX.Element => {
	const [data, setData] = useState<ResultStateType>({ source: [], isLoading: true, perpage: 0, page: 0 });

	const router = useRouter();

	let ONFETCH = false;
	function getListingTag(page: number, perpage: number) {
		ONFETCH = true;
		setData((prevState) => ({ ...prevState, isLoading: true, perpage, page }));

		customFetch({ endpoint: `photos?_start=${page}&_limit=${perpage}` })
			.then((res) => {
				if (Number(page) === 0) setData((prevState) => ({ ...prevState, source: res }));
				else setData((prevState) => ({ ...prevState, source: [...prevState?.source, ...res] }));
			})
			.catch((err) => toast.error(`${err?.message}`))
			.finally(() => {
				setData((prevState) => ({ ...prevState, isLoading: false }));
				ONFETCH = false;
			});
	}

	function handleNextResult() {
		getListingTag(Number(data?.page) + 1, Number(data?.perpage));
	}

	useEffect(() => {
		if (router?.query && typeof window !== 'undefined') {
			const { query } = router;

			if (!ONFETCH) {
				if (query?.q && query?.perpage) getListingTag(0, isNaN(Number(query?.perpage)) ? 10 : Number(query?.perpage));
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [router]);

	return (
		<ResultPageWrapper>
			{data?.isLoading && data?.source?.length === 0 ? (
				<Skeleton />
			) : (
				<div className='row'>
					{data?.source?.map((item) => {
						return (
							<div key={item?.id} className='col-4'>
								<div className='card-result'>
									<div className='image-wrapper'>
										<img src={item?.thumbnailUrl} alt='Image' />
									</div>

									<div className='mt-3'>
										<h5>{item?.title}</h5>
									</div>
								</div>
							</div>
						);
					})}

					{data?.isLoading && data?.source?.length > 0 && (
						<div>
							<Skeleton />
						</div>
					)}

					<div className='mb-5'>
						<Button disabled={data?.isLoading} onClick={() => handleNextResult()} title='More' />
					</div>
				</div>
			)}
		</ResultPageWrapper>
	);
};

const ResultPage = memo(_ResultPage);
export default ResultPage;
