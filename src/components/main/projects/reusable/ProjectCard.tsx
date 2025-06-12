'use client';

import { Project } from '@/constants/projects';
import { allSkills } from '@/constants/skills';
import For from '@/utils/For';
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
}

export default function ProjectCard({ project }: ProjectCardProps): React.JSX.Element {
	const intl = useTranslations('appMain.projects');

	const usedSkills = useMemo(() => (
		allSkills.filter((skill) => project.stack.includes(skill.value))
	), [project.stack]);

	return (
		<Card
			classNames={{
				base: 'p-2 md:hover:scale-105 bg-transparent border border-primary-400',
				header: 'flex items-center justify-between',
				body: 'gap-4',
				footer: 'gap-4'
			}}
		>
			<CardHeader>
				<h3 className="font-bold text-secondary text-2xl">{project.title}</h3>
				<div>
					<Image
						src={project.logo ?? ''}
						alt={project.title}
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
					target="_blank"
				>
					{intl('code')}
				</Button>
				<Button
					variant="ghost"
					color="secondary"
					startContent={<LuExternalLink size={20} />}
					as={Link}
					href={project.projectUrl}
					target="_blank"
				>
					{intl('demo')}
				</Button>
			</CardFooter>
		</Card>
	);
}
