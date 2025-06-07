import { NextIntlClientProvider } from 'next-intl';
import React from 'react';
import { ScrollProvider } from './ScrollProvider';
import { UiProvider } from './UiProvider';

type ContextProviderProps = {
	children: React.ReactNode;
}

export default function ContextProvider({children}: ContextProviderProps): React.JSX.Element {
	return (
		<NextIntlClientProvider>
			<UiProvider>
				<ScrollProvider>
					{children}
				</ScrollProvider>
			</UiProvider>
		</NextIntlClientProvider>
	);
}
