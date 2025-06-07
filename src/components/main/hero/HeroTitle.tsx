import { useTranslations } from 'next-intl';
import React from 'react';

export default function HeroTitle(): React.JSX.Element {
	const intl = useTranslations('appMain.hero.title');

	return (
		<h3 className="text-5xl md:text-7xl font-bold select-none mb-8 relative z-10">
			<span className="text-primary">{intl('line1')}</span>
			<br />
			<span className="text-secondary">{intl('line2')}</span>
		</h3>
	);
}
