import LsContainer from '@/components/ui/LsContainer';
import { useTranslations } from 'next-intl';
import React from 'react';
import ContactBody from './ContactBody';

export default function ContactSection(): React.JSX.Element {
	const intl = useTranslations('appMain.contact');

	return (
		<LsContainer
			section="contact"
			title={intl('title')}
			coloredBackground
			forBetterReadability
			textAlign="center"
		>
			<ContactBody />
		</LsContainer>
	);
}
