import React from 'react';
import SkillsCategories from './SkillsCategories';
import SkillsList from './SkillsList';

export default function SkillsBody(): React.JSX.Element {
	return (
		<div className="flex flex-col gap-4 w-full">
			<SkillsCategories />
			<SkillsList />
		</div>
	);
}
