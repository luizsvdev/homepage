'use client';

import { Skill } from '@/constants/skills';
import { Chip } from '@heroui/react';
import React from 'react';

type SkillBadgeProps = {
	skill: Skill;
}

export default function SkillChip({skill}: SkillBadgeProps): React.JSX.Element {
	return (
		<Chip
			startContent={skill.icon}
			size="lg"
			classNames={{content: 'px-1'}}
		>
			{skill.label}
		</Chip>
	);
}
