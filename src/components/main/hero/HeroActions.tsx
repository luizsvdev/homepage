'use client';

import { Button } from '@heroui/react';
import { useTranslations } from 'next-intl';
import React from 'react';

export default function HeroActions(): React.JSX.Element {

	const t = useTranslations('appMain.hero.actions');
	return (
		<div className="flex gap-4 justify-center items-center">
			<Button color="primary">{t('getInTouch')}</Button>
			<Button color="secondary">{t('viewWork')}</Button>
		</div>
	);
}
