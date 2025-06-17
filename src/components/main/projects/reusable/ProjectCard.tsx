'use client';

import { Project } from '@/constants/projects';
import { allSkills } from '@/constants/skills';
import For from '@/utils/For';
import Show from '@/utils/Show';
import {
	Button,
	Card, CardBody, CardFooter, CardHeader,
	Link
} from '@heroui/react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React, { useMemo } from 'react';
import { LuExternalLink } from 'react-icons/lu';
import { SiGithub } from 'react-icons/si';
import ProjectSkillChip from './ProjectSkillChip';

type ProjectCardProps = {
	project: Project;
	showViewProject?: boolean
}

export default function ProjectCard({
	project,
	showViewProject = true
}: ProjectCardProps): React.JSX.Element {
	const intl = useTranslations('appMain.projects');

	const usedSkills = useMemo(() => (
		allSkills.filter((skill) => project.stack.includes(skill.value))
	), [project.stack]);

	return (
		<Card
			classNames={{
				base: 'p-2 md:hover:scale-105 border border-primary-200 bg-primary/10 ' +
				  'hover:bg-primary/15 hover:border-primary-400 ' +
					'md:basis-[calc(50%-2rem)] lg:basis-[calc(33.333%-2rem)]',
				header: 'flex items-center justify-between',
				body: 'gap-4',
				footer: 'gap-4'
			}}
		>
			<CardHeader>
				<h3 className="font-bold text-secondary text-2xl">{intl(`${project.value}.name`)}</h3>
				<div>
					<Image
						src={project.logo ?? ''}
						alt={intl(`${project.value}.name`)}
						width={36}
						height={36}
					/>
				</div>
			</CardHeader>
			<CardBody>
				<p>{intl(`${project.value}.description`)}</p>
				<div className="flex flex-wrap gap-2">
					<For each={usedSkills}>
						{(item) => (<ProjectSkillChip key={item.value} skill={item} />)}
					</For>
				</div>
			</CardBody>
			<CardFooter>
				<Button
					variant="ghost"
					color="primary"
					startContent={<SiGithub size={20} />}
					as={Link}
					href={project.githubUrl}
					isExternal
				>
					{intl('code')}
				</Button>
				<Show when={showViewProject}>
					<Button
						variant="ghost"
						color="secondary"
						startContent={<LuExternalLink size={20} />}
						as={Link}
						href={project.projectUrl}
						isExternal
					>
						{intl('demo')}
					</Button>
				</Show>
			</CardFooter>
		</Card>
	);
}
