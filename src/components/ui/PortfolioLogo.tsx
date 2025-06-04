import Image from 'next/image';
import React from 'react';

type Props = {
	size?: 40
}

export default function PortfolioLogo({
	size = 40
}: Props): React.JSX.Element {
	return (
		<Image
			src="/logos/logo.svg"
			alt="Logo"
			width={size}
			height={size}
		/>
	);
}
