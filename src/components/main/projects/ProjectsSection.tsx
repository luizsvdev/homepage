import DuckImage from '@/components/ui/DuckImage';
import LsContainer from '@/components/ui/LsContainer';
import { useTranslations } from 'next-intl';
import React from 'react';
import ProjectsBody from './ProjectsBody';

export default function ProjectsSection(): React.JSX.Element {
	const intl = useTranslations('appMain.projects');

	return (
		<LsContainer
			section="projects"
			textAlign="center"
			title={intl('title')}
			titleStartAdornment={<DuckImage
				duckSize={48}
				className="animate-floating [animate-delay:200ms]"
				duckClasses="-scale-x-100"
			/>}
		>
			<ProjectsBody />
		</LsContainer>
	);
}
