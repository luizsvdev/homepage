import DuckImage from '@/components/ui/DuckImage';
import LsContainer from '@/components/ui/LsContainer';
import { useTranslations } from 'next-intl';
import React from 'react';
import AboutBody from './AboutBody';

export default function AboutSection(): React.JSX.Element {
	const intl = useTranslations('appMain.about');

	return (
		<LsContainer
			section="about"
			title={intl('title')}
			titleEndAdornment={<DuckImage
				duckSize={48}
				className="animate-floating [animation-delay:100ms]"
			/>}
			textAlign="center"
			forBetterReadability
		>
			<AboutBody />
		</LsContainer>
	);
}
