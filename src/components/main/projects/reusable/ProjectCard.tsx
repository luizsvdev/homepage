'use client';

import { Project } from '@/constants/projects';
import { Card, CardHeader } from '@heroui/react';
import Image from 'next/image';
import React from 'react';

type ProjectCardProps = {
	project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps): React.JSX.Element {
	return (
		<Card
			classNames={{
				base: 'text-center md:hover:scale-105',
				header: 'flex items-center gap-3'
			}}
		>
			<CardHeader>
				<Image
					src={project.logo ?? ''}
					alt={project.title}
					width={36}
					height={36}
				/>
				<h3 className="font-bold text-lg">{project.title}</h3>
			</CardHeader>
		</Card>
	);
}
