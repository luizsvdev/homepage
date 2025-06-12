import React from 'react';
import { FaAws } from 'react-icons/fa';
import {
	LuCloud, LuCode, LuServer, LuSmartphone
} from 'react-icons/lu';
import { RiJavaLine } from 'react-icons/ri';
import {
	SiAndroid,
	SiAngular,
	SiDigitalocean,
	SiDocker,
	SiExpress,
	SiJavascript,
	SiKotlin,
	SiKubernetes,
	SiNextdotjs,
	SiNuxtdotjs,
	SiOracle,
	SiPython,
	SiReact,
	SiSass,
	SiSpring,
	SiTailwindcss,
	SiTypescript,
	SiVercel,
	SiVuedotjs
} from 'react-icons/si';
import { Stack } from './stack';

export const allCategoryTypes = ['frontend', 'backend', 'devops', 'mobile'] as const;
export type CategoryType = typeof allCategoryTypes[number];

export type Category = {
	label: string;
	value: CategoryType;
	icon: React.ReactNode;
};

export const allCategories: Category[] = [
	{ label: 'Frontend', value: 'frontend', icon: <LuCode size={36} className="text-secondary" /> },
	{ label: 'Backend', value: 'backend', icon: <LuServer size={36} className="text-secondary"  /> },
	{ label: 'DevOps', value: 'devops', icon: <LuCloud size={36} className="text-secondary" /> },
	{ label: 'Mobile', value: 'mobile', icon: <LuSmartphone size={36} className="text-secondary"  /> }
];

export type Skill = {
	label: string;
	value: Stack;
	icon: React.ReactNode;
};

export const groupedSkills: Record<CategoryType, Skill[]> = {
	frontend: [
		{ label: 'Angular', value: 'angular', icon: <SiAngular size={16} /> },
		{ label: 'Next.js', value: 'nextjs', icon: <SiNextdotjs size={16} /> },
		{ label: 'React', value: 'react', icon: <SiReact size={16} /> },
		{ label: 'Nuxt.js', value: 'nuxtjs', icon: <SiNuxtdotjs size={16} /> },
		{ label: 'Vue.js', value: 'vuejs', icon: <SiVuedotjs size={16} /> },
		{ label: 'TypeScript', value: 'typescript', icon: <SiTypescript size={16} /> },
		{ label: 'JavaScript', value: 'javascript', icon: <SiJavascript size={16} /> },
		{ label: 'Tailwind CSS', value: 'tailwindcss', icon: <SiTailwindcss size={16} /> },
		{ label: 'SCSS', value: 'scss', icon: <SiSass size={16} /> }
	],
	backend: [
		{ label: 'Spring', value: 'spring', icon: <SiSpring size={16} /> },
		{ label: 'Java', value: 'java', icon: <RiJavaLine size={16} /> },
		{ label: 'Kotlin', value: 'kotlin', icon: <SiKotlin size={16} /> },
		{ label: 'JavaScript', value: 'javascript', icon: <SiJavascript size={16} /> },
		{ label: 'TypeScript', value: 'typescript', icon: <SiTypescript size={16} /> },
		{ label: 'Next.js', value: 'nextjs', icon: <SiNextdotjs size={16} /> },
		{ label: 'Express.js', value: 'expressjs', icon: <SiExpress size={16} /> },
		{ label: 'Python', value: 'python', icon: <SiPython size={16} /> }
	],
	devops: [
		{ label: 'AWS', value: 'aws', icon: <FaAws size={16} /> },
		{ label: 'OCI', value: 'oci', icon: <SiOracle size={16} /> },
		{ label: 'Vercel', value: 'vercel', icon: <SiVercel size={16} /> },
		{ label: 'DigitalOcean', value: 'digitalocean', icon: <SiDigitalocean size={16} /> },
		{ label: 'Docker', value: 'docker', icon: <SiDocker size={16} /> },
		{ label: 'Kubernetes', value: 'kubernetes', icon: <SiKubernetes size={16} /> }
	],
	mobile: [
		{ label: 'Android', value: 'android', icon: <SiAndroid size={16} /> },
		{ label: 'Kotlin', value: 'kotlin', icon: <SiKotlin size={16} /> },
		{ label: 'Java', value: 'java', icon: <RiJavaLine size={16} /> },
		{ label: 'React Native', value: 'reactnative', icon: <SiReact size={16} /> }
	]
};

export const allSkills = Object.entries(groupedSkills)
	.flatMap(([_, skills]) => skills);
