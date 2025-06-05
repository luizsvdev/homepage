import { SectionId } from '@/constants/section';
import React from 'react';


type TextAlign = 'left' | 'center' | 'right' | 'justify';
type Props = {
	children: React.ReactNode;
	textAlign?: TextAlign ;
	section: SectionId;
	forBetterReadability?: boolean
};

export default function LsContainer({
	children,
	section,
	textAlign = 'left',
	forBetterReadability = false
}: Props): React.JSX.Element {
	const containerHeight = section === 'home' ? 'h-dvh' : 'my-24';
	const containerWidth = forBetterReadability ? 'max-w-4xl' : 'max-w-[1400px]';

	return (
		<section
			id={section}
			className={`w-full flex justify-center items-center text-${textAlign} ${containerHeight}`}
		>
			<div className={`px-6 w-full ${containerWidth}`}>
				{children}
			</div>
		</section>
	);
}
