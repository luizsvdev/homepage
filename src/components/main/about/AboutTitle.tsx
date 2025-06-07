import LsSectionTitle from '@/components/ui/LsSectionTitle';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react';

export default function AboutTitle(): React.JSX.Element {
	const intl = useTranslations('appMain.about');

	return (
		<LsSectionTitle
			label={intl('title')}
			endAdornment={<Image
				src="/images/rubber_duck_2.png"
				alt="Rubber Duck"
				width={48}
				height={48}
			/>}
		/>
	);
}
