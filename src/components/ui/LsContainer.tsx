'use client';

import { SectionId } from '@/constants/section';
import React, { useMemo } from 'react';


type TextAlign = 'left' | 'center' | 'right' | 'justify';
type Props = {
	children: React.ReactNode;
	section: SectionId;
	textAlign?: TextAlign;
	forBetterReadability?: boolean;
	coloredBackground?: boolean;
};

export default function LsContainer({
	children,
	section,
	textAlign = 'left',
	forBetterReadability = false,
	coloredBackground = false
}: Props): React.JSX.Element {
	const isHero = useMemo(() => section === 'home', [section]);

	const containerHeight = isHero ? 'h-dvh short:dvh-[calc(100dvh-65px)] short:pt-[65px]' : 'py-24';
	const containerWidth = forBetterReadability ? 'max-w-4xl' : 'max-w-[1400px]';
	const bgColor = coloredBackground ? 'bg-primary-400/10' : '';
	const containerOrientation = isHero ? 'short:flex-row justify-center' : '';

	return (
		<section
			id={section}
			className={`
				w-full flex
			 	justify-center
				items-center
				text-${textAlign}
				${containerHeight}
				${bgColor}
			`}
		>
			<div className={`px-6 w-full ${containerWidth} flex flex-col items-center justify-center ${containerOrientation}`}>
				{children}
			</div>
		</section>
	);
}
