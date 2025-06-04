import { SectionId } from '@/constants/section';
import React from 'react';


type TextAlign = 'left' | 'center' | 'right' | 'justify';
type Props = {
	children: React.ReactNode,
	textAlign?: TextAlign,
	section: SectionId
};

export default function LsContainer({
	children,
	section,
	textAlign = 'left'
}: Props): React.JSX.Element {
	const fullHeight = section === 'home' ? 'h-dvh' : '';
	return (
		<section id={section} className={`w-full flex justify-center items-center text-${textAlign} ${fullHeight}`}>
			<div className="px-6 w-full max-w-[1400px]">
				{children}
			</div>
		</section>
	);
}
