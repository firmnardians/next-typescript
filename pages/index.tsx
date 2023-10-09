import type { NextPage } from 'next';
import Layout from '../components/layout/Layout';
import Input from '../components/input/Input';
import SliderRange from '../components/slider/Slider';
import Button from '../components/button/Button';
import { useMemo, useState } from 'react';
import { useRouter } from 'next/router';

const Home: NextPage = () => {
	const [dataSearch, setDataSearch] = useState({ result: 12, value: '' });

	const isDisabled = useMemo(() => dataSearch?.value?.length === 0, [dataSearch?.value]);

	const router = useRouter();

	function handleSearch() {
		if (!isDisabled) router.push(`/?q=${dataSearch?.value}&page=${dataSearch?.result}`);
	}

	return (
		<Layout title='Search'>
			<div className='mt-5 pe-5'>
				<Input
					placeholder='Keyword'
					value={dataSearch?.value}
					onChange={(e) => setDataSearch((prevState) => ({ ...prevState, value: e?.target?.value }))}
				/>

				<div className='mt-5'>
					<h4># Of Results Per Page</h4>

					<div className='d-flex align-items-end mb-2'>
						<h1 className='mb-0'>{dataSearch?.result}</h1> <p className='mb-2 ps-2'>results</p>
					</div>

					<SliderRange onChange={(value) => setDataSearch((prevState) => ({ ...prevState, result: Number(value) }))} />
				</div>

				<div className='position-absolute' style={{ bottom: 20 }}>
					<Button title='Search' disabled={isDisabled} onClick={() => handleSearch()} />
				</div>
			</div>
		</Layout>
	);
};

export default Home;
