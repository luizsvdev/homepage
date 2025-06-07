'use client';

import { useTranslations } from 'next-intl';
import React from 'react';
import LsPortfolioLogo from '../ui/LsPortfolioLogo';

export default function Footer(): React.JSX.Element {
	const intl = useTranslations('appFooter');

	return (
		<footer className="w-full text-center py-8 border-t border-primary/30">
			<div className="flex flex-col justify-center items-center max-w-[1400px] gap-4 mx-auto">
				<div className="flex gap-2 items-center select-none">
					<LsPortfolioLogo size={30} />
					<span className="text-xl font-bold transition-colors duration-200 text-[#5f50e6]">
						Luiz Silva
					</span>
				</div>
				<div className="flex flex-col">
					&copy; {new Date().getFullYear()} Luiz Silva.
					<br />
					{intl('builtWith')}
				</div>
			</div>
		</footer>
	);
}
