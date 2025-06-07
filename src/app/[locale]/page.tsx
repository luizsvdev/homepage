'use server';

import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import Hero from '@/components/main/hero/Hero';
import Main from '@/components/main/Main';
import React from 'react';

export default async function Home(): Promise<React.JSX.Element> {
	return (
		<>
			<Header />
			<Hero />
			<Main />
			<Footer/>
		</>
	);
}
