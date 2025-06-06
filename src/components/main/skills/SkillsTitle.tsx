import LsSectionTitle from '@/components/ui/LsSectionTitle';
import { useTranslations } from 'next-intl';
import React from 'react';

export default function SkillsTitle(): React.JSX.Element {
	const t = useTranslations('appMain.skills');

	return (
		<LsSectionTitle label={t('title')}/>
	);
}
