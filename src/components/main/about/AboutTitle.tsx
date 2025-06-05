import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react';

export default function AboutTitle(): React.JSX.Element {
	const t = useTranslations('appMain.about');

	return (
		<h1 className="text-4xl font-bold select-none mb-8 flex justify-center items-center gap-4">
			<span className="text-primary">{t('title')}</span>
			<Image
				src="/images/rubber_duck_2.png"
				alt="Rubber Duck"
				width={48}
				height={48}
			/>
		</h1>
	);
}
