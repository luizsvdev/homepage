'use client';

import { useSkillsContext } from '@/providers/SkillProvider';
import For from '@/utils/For';
import React from 'react';
import SkillChip from './reusable/SkillChip';

export default function SkillsList(): React.JSX.Element {
	const { filteredSkills } = useSkillsContext();

	return (
		<div className="flex flex-wrap justify-center gap-2">
			<For each={filteredSkills}>
				{(item) => (
					<SkillChip key={item.value} skill={item} />
				)}
			</For>
		</div>
	);
}
