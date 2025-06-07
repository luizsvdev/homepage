import { allCategories } from '@/constants/skills';
import For from '@/utils/For';
import React from 'react';
import SkillCategoryCard from './reusable/SkillCategoryCard';

export default function SkillsCategories(): React.JSX.Element {
	return (
		<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
			<For each={allCategories}>
				{(item) => (
					<SkillCategoryCard key={item.value} category={item} />
				)}
			</For>
		</div>
	);
}
