import Header from '@/components/Header';
import Hero from '@/components/main/hero/Hero';
import { routing } from '@/i18n/routing';
import { UiProvider } from '@/providers/UiProvider';
import type { Metadata } from 'next';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
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
			<body className={`${geist.className} h-dvh dark text-foreground bg-background`}>
				<NextIntlClientProvider>
					<UiProvider>
						<Header />
						<Hero />
						{children}
					</UiProvider>
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
