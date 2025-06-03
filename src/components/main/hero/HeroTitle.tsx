import { useTranslations } from 'next-intl';
import React from 'react';

export default function HeroTitle(): React.JSX.Element {
	const t = useTranslations('appMain.hero.title');

	return (
		<h1 className="text-7xl font-bold select-none mb-8">
			<span className="text-purple-400">{t('line1')}</span>
			<br />
			<span className="text-yellow-400">{t('line2')}</span>
		</h1>
	);
}
