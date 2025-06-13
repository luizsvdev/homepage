import { allProjects } from '@/constants/projects';
import For from '@/utils/For';
import React from 'react';
import ProjectCard from './reusable/ProjectCard';

export default function ProjectsBody(): React.JSX.Element {
	return (
		<div className="flex flex-wrap gap-8 w-full justify-center">
			<For each={allProjects}>
				{(item, index) => (<ProjectCard key={item.value+index} project={item} />)}
			</For>
		</div>
	);
}
