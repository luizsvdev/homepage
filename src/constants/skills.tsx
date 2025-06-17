import React from 'react';
import { FaAws } from 'react-icons/fa';
import {
	LuCloud, LuCode, LuServer, LuSmartphone
} from 'react-icons/lu';
import { RiJavaLine } from 'react-icons/ri';
import {
	SiAndroid,
	SiAngular,
	SiCloudflare,
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
	{ label: 'Backend', value: 'backend', icon: <LuServer size={36} className="text-secondary" /> },
	{ label: 'DevOps', value: 'devops', icon: <LuCloud size={36} className="text-secondary" /> },
	{ label: 'Mobile', value: 'mobile', icon: <LuSmartphone size={36} className="text-secondary" /> }
];

export type Skill = {
	label: string;
	value: Stack;
	icon: (size?: number) => React.ReactNode;
};

export const groupedSkills: Record<CategoryType, Skill[]> = {
	frontend: [
		{ label: 'Angular', value: 'angular', icon: (size: number = 16) => <SiAngular size={size} /> },
		{ label: 'Next.js', value: 'nextjs', icon: (size: number = 16) => <SiNextdotjs size={size} /> },
		{ label: 'React', value: 'react', icon: (size: number = 16) => <SiReact size={size} /> },
		{ label: 'Nuxt.js', value: 'nuxtjs', icon: (size: number = 16) => <SiNuxtdotjs size={size} /> },
		{ label: 'Vue.js', value: 'vuejs', icon: (size: number = 16) => <SiVuedotjs size={size} /> },
		{ label: 'TypeScript', value: 'typescript', icon: (size: number = 16) => <SiTypescript size={size} /> },
		{ label: 'JavaScript', value: 'javascript', icon: (size: number = 16) => <SiJavascript size={size} /> },
		{ label: 'Tailwind CSS', value: 'tailwindcss', icon: (size: number = 16) => <SiTailwindcss size={size} /> },
		{ label: 'SCSS', value: 'scss', icon: (size: number = 16) => <SiSass size={size} /> }
	],
	backend: [
		{ label: 'Spring', value: 'spring', icon: (size: number = 16) => <SiSpring size={size} /> },
		{ label: 'Java', value: 'java', icon: (size: number = 16) => <RiJavaLine size={size} /> },
		{ label: 'Kotlin', value: 'kotlin', icon: (size: number = 16) => <SiKotlin size={size} /> },
		{ label: 'JavaScript', value: 'javascript', icon: (size: number = 16) => <SiJavascript size={size} /> },
		{ label: 'TypeScript', value: 'typescript', icon: (size: number = 16) => <SiTypescript size={size} /> },
		{ label: 'Next.js', value: 'nextjs', icon: (size: number = 16) => <SiNextdotjs size={size} /> },
		{ label: 'Express.js', value: 'expressjs', icon: (size: number = 16) => <SiExpress size={size} /> },
		{ label: 'Python', value: 'python', icon: (size: number = 16) => <SiPython size={size} /> }
	],
	devops: [
		{ label: 'AWS', value: 'aws', icon: (size: number = 16) => <FaAws size={size} /> },
		{ label: 'OCI', value: 'oci', icon: (size: number = 16) => <SiOracle size={size} /> },
		{ label: 'DigitalOcean', value: 'digitalocean', icon: (size: number = 16) => <SiDigitalocean size={size} /> },
		{ label: 'Cloudflare', value: 'cloudflare', icon: (size: number = 16) => <SiCloudflare size={size} /> },
		{ label: 'Vercel', value: 'vercel', icon: (size: number = 16) => <SiVercel size={size} /> },
		{ label: 'Docker', value: 'docker', icon: (size: number = 16) => <SiDocker size={size} /> },
		{ label: 'Kubernetes', value: 'kubernetes', icon: (size: number = 16) => <SiKubernetes size={size} /> }
	],
	mobile: [
		{ label: 'Android', value: 'android', icon: (size: number = 16) => <SiAndroid size={size} /> },
		{ label: 'Kotlin', value: 'kotlin', icon: (size: number = 16) => <SiKotlin size={size} /> },
		{ label: 'Java', value: 'java', icon: (size: number = 16) => <RiJavaLine size={size} /> },
		{ label: 'React Native', value: 'reactnative', icon: (size: number = 16) => <SiReact size={size} /> }
	]
};

export const allSkills = Array.from(
	Object.values(groupedSkills)
		.flat()
		.reduce((map, skill) => map.set(skill.value, skill), new Map<string, Skill>())
		.values()
);
