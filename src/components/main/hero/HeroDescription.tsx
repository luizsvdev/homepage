import { useTranslations } from 'next-intl';
import React from 'react';

export default function HeroDescription(): React.JSX.Element {
	const intl = useTranslations('appMain.hero.description');

	return (
		<p className="text-xl md:text-2xl text-gray-300 mb-8 short:mb-4 max-w-2xl mx-auto relative z-10 select-none">
			{intl('line1')}
			<br />
			{intl('line2')}
		</p>
	);
}
