import React from 'react';


type TextAlign = 'left' | 'center' | 'right' | 'justify';
type Props = {
	children: React.ReactNode,
	textAlign?: TextAlign
};

export default function LsContainer({
	children,
	textAlign = 'left'
}: Props): React.JSX.Element {
	return (
		<div className={`w-full flex justify-center text-${textAlign}`}>
			<div style={{maxWidth: '1400px'}} className="px-4 w-full">
				{children}
			</div>
		</div>
	);
}
