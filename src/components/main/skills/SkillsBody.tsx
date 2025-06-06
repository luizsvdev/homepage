import { allCategories } from '@/constants/skills';
import For from '@/utils/For';
import React from 'react';
import SkillCategoryCard from './SkillCategoryCard';

export default function SkillsBody(): React.JSX.Element {
	return (
		<div>
			<div className="grid md:grid-cols-2 gap-6">
				<For each={allCategories}>
					{(item) => (
						<SkillCategoryCard key={item.value} category={item} />
					)}
				</For>
			</div>
		</div>
	);
}
