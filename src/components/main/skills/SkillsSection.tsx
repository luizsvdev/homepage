import LsContainer from '@/components/ui/LsContainer';
import { SkillsProvider } from '@/providers/SkillProvider';
import { useTranslations } from 'next-intl';
import React from 'react';
import SkillsBody from './SkillsBody';

export default function Skills(): React.JSX.Element {
	const intl = useTranslations('appMain.skills');

	return (
		<SkillsProvider>
			<LsContainer
				section="skills"
				title={intl('title')}
				textAlign="center"
				forBetterReadability
				coloredBackground
			>
				<SkillsBody />
			</LsContainer>
		</SkillsProvider>
	);
}
