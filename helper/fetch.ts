async function customFetch({ endpoint, config }: { endpoint: string; config?: any }) {
	try {
		const URL: string = `https://jsonplaceholder.typicode.com/${endpoint}`;

		const res = await fetch(URL, {
			method: 'GET',
			headers: { 'Content-Type': 'application/json' },
			...config,
		});

		return await res.json();
	} catch (error) {
		console.log('error', error);
	}
}

export default customFetch;
