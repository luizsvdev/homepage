'use client';

import { githubProfile } from '@/constants/social';
import { Button, Link } from '@heroui/react';
import { useTranslations } from 'next-intl';
import React from 'react';
import { LuMail } from 'react-icons/lu';
import { SiGithub } from 'react-icons/si';

export default function HeroActions(): React.JSX.Element {
	const t = useTranslations('appMain.hero.actions');

	return (
		<div className="flex mb-8 gap-4 justify-center items-center">
			<Button
				color="primary"
				startContent={<LuMail size={20} />}
				as={Link}
				href="mailto:luizsv.dev@gmail.com"
			>
				{t('getInTouch')}
			</Button>
			<Button
				color="secondary"
				variant="ghost"
				startContent={<SiGithub size={20} />}
				as={Link}
				href={githubProfile}
				target="_blank"
			>
				{t('viewWork')}
			</Button>
		</div>
	);
}
