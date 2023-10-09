async function customFetch({ endpoint, ...config }: { endpoint: string } & RequestInit) {
	try {
		const URL: string = `https://jsonplaceholder.typicode.com/${endpoint}`;

		const res = await fetch(URL, {
			method: 'GET',
			headers: { 'Content-Type': 'application/json' },
			...config,
		});

		return await res.json();
	} catch (e: unknown) {
		if (typeof e === 'string') {
			e.toUpperCase();
		} else if (e instanceof Error) {
			throw Error(e?.message);
		}
	}
}

export default customFetch;
