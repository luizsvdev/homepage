import LsContainer from '@/components/ui/LsContainer';
import React from 'react';
import SkillsTitle from './SkillsTitle';
import SkillsBody from './SkillsBody';

export default function Skills(): React.JSX.Element {
	return (
		<LsContainer
			section="skills"
			textAlign="center"
			forBetterReadability
			coloredBackground
		>
			<SkillsTitle />
			<SkillsBody />
		</LsContainer>
	);
}
