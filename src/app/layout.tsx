import Header from '@/components/Header';
import { UiProvider } from '@/providers/UiProvider';
import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import React from 'react';
import './globals.css';

const geist = Geist({
	subsets: ['latin'],
	variable: '--font-geist'
});

export const metadata: Metadata = {
	title: 'Luiz Silva - Portfolio',
	description: 'Created with love by Luiz Silva'
};

type RootLayout = { children: React.ReactNode };

export default function RootLayout({children}: Readonly<RootLayout>): React.JSX.Element {
	return (
		<html lang="pt">
			<body className={`${geist.className} h-dvh dark text-foreground bg-background`}>
				<UiProvider>
					<Header />
					{children}
				</UiProvider>
			</body>
		</html>
	);
}
