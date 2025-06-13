'use client';

import { Button } from '@heroui/react';
import { useTranslations } from 'next-intl';
import React from 'react';
import { SiWhatsapp } from 'react-icons/si';

export default function ContactBody(): React.JSX.Element {
	const intl = useTranslations('appMain.contact');

	return (
		<>
			<p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
				{intl('description.line1')}
				<br />
				{intl('description.line2')}
			</p>
			<Button
				startContent={<SiWhatsapp size={20} />}
				color="primary"
				size="lg"
			>
				{intl('startConversation')}
			</Button>
		</>
	);
}
