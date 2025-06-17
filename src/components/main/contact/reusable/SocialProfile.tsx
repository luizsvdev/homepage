'use client';

import { SocialAccount } from '@/constants/social';
import { Link } from '@heroui/react';
import React from 'react';

type SocialAccountProps = {
	account: SocialAccount;
};

export default function SocialProfile({ account }: SocialAccountProps): React.JSX.Element {
	return (
		<div className="flex items-center gap-2">
			{account.icon}
			<Link
				href={account.link}
				isExternal
				color="foreground"
				className="active:text-primary md:hover:text-primary transition duration-200"
			>
				{account.username}
			</Link>
		</div>
	);
}
