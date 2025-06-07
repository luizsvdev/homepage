import LsSectionTitle from '@/components/ui/LsSectionTitle';
import { useTranslations } from 'next-intl';
import React from 'react';

export default function SkillsTitle(): React.JSX.Element {
	const intl = useTranslations('appMain.skills');

	return (
		<LsSectionTitle label={intl('title')} />
	);
}
