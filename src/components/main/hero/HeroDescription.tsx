import { useTranslations } from 'next-intl';
import React from 'react';

export default function HeroDescription(): React.JSX.Element {
	const t = useTranslations('appMain.hero.description');

	return (
		<p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
			{t('line1')}
			<br />
			{t('line2')}
		</p>
	);
}
