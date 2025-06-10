import LsContainer from '@/components/ui/LsContainer';
import generateRandomDelay from '@/utils/generateRandomDelay';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React, { useMemo } from 'react';

export default function ProjectsSection(): React.JSX.Element {
	const intl = useTranslations('appMain.projects');

	const duck = useMemo(() => (<div className="-scale-x-100">
		<Image
			src="/images/rubber_duck_2.png"
			alt="Rubber Duck"
			width={48}
			height={48}
			className={`animate-floating ${generateRandomDelay()}`}
		/>
	</div>), []);

	return (
		<LsContainer
			section="projects"
			textAlign="center"
			title={intl('title')}
			titleStartAdornment={duck}
		>
		  &nbsp;
		</LsContainer>
	);
}
