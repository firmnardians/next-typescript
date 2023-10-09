import Container from '../components/container/Container';
import '../styles/globals.css';
import '../styles/bootstrap.css';
import type { AppProps } from 'next/app';
import { Toaster } from 'react-hot-toast';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Container>
			<Toaster />
			<Component {...pageProps} />
		</Container>
	);
}

export default MyApp;
