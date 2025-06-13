import { routing } from '@/i18n/routing';
import ContextProvider from '@/providers/ContextProvider';
import type { Metadata } from 'next';
import { hasLocale } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Geist } from 'next/font/google';
import { notFound } from 'next/navigation';
import React from 'react';
import '../globals.css';

const geist = Geist({
	subsets: ['latin'],
	variable: '--font-geist'
});

type MetadataParams = {
	params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: MetadataParams): Promise<Metadata> {
	const { locale } = await params;
	const messages = await getMessages({ locale });

	return {
		title: messages.metadata.title,
		description: messages.metadata.description
	};
};


type RootLayout = {
	children: React.ReactNode;
	params: Promise<{ locale: string }>;
};

export default async function RootLayout({ children, params }: Readonly<RootLayout>): Promise<React.JSX.Element> {
	const { locale } = await params;

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
