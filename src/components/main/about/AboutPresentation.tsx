'use client';

import { githubProfile, linkedinProfile } from '@/constants/social';
import { Button, Link } from '@heroui/react';
import { useTranslations } from 'next-intl';
import React from 'react';
import { SiGithub, SiLinkedin } from 'react-icons/si';

export default function AboutPresentation(): React.JSX.Element {
	const intl = useTranslations('appMain.about.presentation');

	return (
		<div className="flex flex-col gap-8 text-left">
			<p className="text-lg text-gray-300">
				{intl('section1')}
			</p>
			<p className="text-lg text-gray-300">
				{intl('section2')}
			</p>
			<div className="flex gap-4">
				<Button
					color="primary"
					variant="ghost"
					startContent={<SiGithub size={20} />}
					as={Link}
					href={githubProfile}
					target="_blank"
				>
					GitHub
				</Button>
				<Button
					color="primary"
					variant="ghost"
					startContent={<SiLinkedin size={20} />}
					as={Link}
					href={linkedinProfile}
					target="_blank"
				>
					LinkedIn
				</Button>
			</div>
		</div>
	);
}
