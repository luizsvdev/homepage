import Image from 'next/image';
import React from 'react';

type Props = {
	size?: number
	className?: string
}

export default function LsPortfolioLogo({ size = 40, className }: Props): React.JSX.Element {
	return (
		<Image
			src="/logos/logo.svg"
			alt="Logo"
			width={size}
			height={size}
			className={className}
		/>
	);
}
