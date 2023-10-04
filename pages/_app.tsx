import Container from '../components/container/Container';
import '../styles/globals.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Container>
			<Component {...pageProps} />
		</Container>
	);
}

export default MyApp;
