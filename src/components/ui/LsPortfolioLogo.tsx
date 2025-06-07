import Image from 'next/image';
import React from 'react';

type Props = {
	size?: number
}

export default function LsPortfolioLogo({size = 40}: Props): React.JSX.Element {
	return (
		<Image
			src="/logos/logo.svg"
			alt="Logo"
			width={size}
			height={size}
		/>
	);
}
