'use client';

import { HeroUIProvider } from '@heroui/react';
import React from 'react';

type UiProviderProps = {
	children: React.ReactNode;
}

export function UiProvider({ children }: UiProviderProps): React.JSX.Element {
	return (
		<HeroUIProvider>
			{children}
		</HeroUIProvider>
	);
}
