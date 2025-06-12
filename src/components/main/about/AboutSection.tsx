import LsContainer from '@/components/ui/LsContainer';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React, { useMemo } from 'react';
import AboutBody from './AboutBody';

export default function AboutSection(): React.JSX.Element {
	const intl = useTranslations('appMain.about');

	const duck = useMemo(() => (<Image
		src="/images/rubber_duck_2.png"
		alt="Rubber Duck"
		width={48}
		height={48}
		className="animate-floating [animation-delay:100ms]"
	/>), []);

	return (
		<LsContainer
			section="about"
			title={intl('title')}
			titleEndAdornment={duck}
			textAlign="center"
			forBetterReadability
		>
			<AboutBody />
		</LsContainer>
	);
}
