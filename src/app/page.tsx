import Footer from '@/components/Footer';
import Main from '@/components/Main';
import { UiProvider } from '@/providers/UiProvider';
import React from 'react';

export default function Home(): React.JSX.Element {
	return (
		<UiProvider>
			<Main/>
			<Footer/>
		</UiProvider>
	);
}
