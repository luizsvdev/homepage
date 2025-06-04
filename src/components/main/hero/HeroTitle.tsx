import { useTranslations } from 'next-intl';
import React from 'react';

export default function HeroTitle(): React.JSX.Element {
	const t = useTranslations('appMain.hero.title');

	return (
		<h3 className="text-5xl md:text-7xl font-bold select-none mb-8">
			<span className="text-primary">{t('line1')}</span>
			<br />
			<span className="text-secondary">{t('line2')}</span>
		</h3>
	);
}
