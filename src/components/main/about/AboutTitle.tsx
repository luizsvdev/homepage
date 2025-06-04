import { useTranslations } from 'next-intl';
import React from 'react';

export default function AboutTitle(): React.JSX.Element {
	const t = useTranslations('appMain.about');

	return (
		<h1 className="text-5xl font-bold select-none mb-8">
			<span className="text-primary">{t('title')}</span>
		</h1>
	);
}
