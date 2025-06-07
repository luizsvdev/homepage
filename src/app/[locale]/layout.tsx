import { routing } from '@/i18n/routing';
import ContextProvider from '@/providers/ContextProvider';
import type { Metadata } from 'next';
import { hasLocale } from 'next-intl';
import { Geist } from 'next/font/google';
import { notFound } from 'next/navigation';
import React from 'react';
import '../globals.css';

const geist = Geist({
	subsets: ['latin'],
	variable: '--font-geist'
});

export const metadata: Metadata = {
	title: 'Portfolio | Luiz Silva',
	description: 'Created by Luiz Silva'
};

type RootLayout = {
	children: React.ReactNode;
	params: Promise<{ locale: string }>;
};

export default async function RootLayout({
	children, params
}: Readonly<RootLayout>): Promise<React.JSX.Element> {
	const {locale} = await params;
	if (!hasLocale(routing.locales, locale)) {
		notFound();
	}

	return (
		<html lang={locale}>
			<body className={`${geist.className} dark text-foreground bg-background`}>
				<ContextProvider>
					{children}
				</ContextProvider>
			</body>
		</html>
	);
}
