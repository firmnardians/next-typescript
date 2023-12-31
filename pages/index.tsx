import type { NextPage } from 'next';
import Layout from '../components/layout/Layout';
import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import ResultPage from '../components/result/Result';
import Search from '../components/search/Search';

const Home: NextPage = () => {
	const [dataSearch, setDataSearch] = useState<{ result: number; value: string }>({ result: 12, value: '' });
	const [renderResult, setRenderResult] = useState<boolean>(false);
	const [isBackButton, setBackButton] = useState<boolean>(false);

	const router = useRouter();
	const isDisabled = useMemo(() => dataSearch?.value?.length === 0, [dataSearch?.value]);

	function handleSearch() {
		if (!isDisabled) router.push(`/?q=${dataSearch?.value}&perpage=${dataSearch?.result}`);
	}

	useEffect(() => {
		if (router?.query && typeof window !== 'undefined') {
			const { query } = router;
			const hasParams = query?.q && query?.perpage;
			setBackButton(Boolean(hasParams) ?? false);
			setRenderResult(Boolean(hasParams) ?? false);
		}
	}, [router]);

	return (
		<Layout isBack={isBackButton} title={isBackButton ? 'Results' : 'Search'}>
			<div className='mt-5 pe-lg-0 pe-xl-5'>
				{renderResult ? (
					<ResultPage />
				) : (
					<Search
						value={dataSearch?.value}
						isDisabled={isDisabled}
						result={dataSearch?.result}
						onChangeSlider={(value) => setDataSearch((prevState) => ({ ...prevState, result: Number(value) }))}
						onClickButton={() => handleSearch()}
						onChangeInput={(e) => setDataSearch((prevState) => ({ ...prevState, value: e?.target?.value }))}
					/>
				)}
			</div>
		</Layout>
	);
};

export default Home;
