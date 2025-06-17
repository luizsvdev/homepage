import { useTranslations } from 'next-intl';
import React from 'react';

export default function ContactTitle(): React.JSX.Element {
	const intl = useTranslations('appMain.contact');

	return (
		<p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
			{intl('description.line1')}
			<br />
			{intl('description.line2')}
		</p>
	);
}
