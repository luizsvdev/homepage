'use client';

import { Skill } from '@/constants/skills';
import { Chip } from '@heroui/react';
import React from 'react';

type ProjectSkillBadgeProps = {
	skill: Skill;
}

export default function ProjectSkillChip({ skill }: ProjectSkillBadgeProps): React.JSX.Element {
	return (
		<Chip
			startContent={skill.icon(12)}
			size="sm"
			classNames={{ content: 'px-1' }}
			variant="faded"
		>
			{skill.label}
		</Chip>
	);
}
