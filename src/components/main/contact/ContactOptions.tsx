import { allAccounts } from '@/constants/social';
import For from '@/utils/For';
import { useTranslations } from 'next-intl';
import React from 'react';
import SocialProfile from './reusable/SocialProfile';

export default function ContactOptions(): React.JSX.Element {
	const intl = useTranslations('appMain.contact');

	return (
		<div className="flex flex-col gap-4 py-8">
			<p>{intl('otherContacts')}</p>
			<div className="flex flex-col gap-2">
				<For each={allAccounts}>
					{(item) => (
						<SocialProfile key={item.username} account={item} />
					)}
				</For>
			</div>
		</div>
	);
}
