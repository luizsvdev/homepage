import React from 'react';
import { FaAws } from 'react-icons/fa';
import { LuCloud, LuCode, LuServer, LuSmartphone } from 'react-icons/lu';
import { RiJavaLine } from 'react-icons/ri';
import {
	SiAndroid,
	SiAngular,
	SiDigitalocean,
	SiExpress,
	SiJavascript,
	SiKotlin,
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
	value: string;
	icon: React.ReactNode;
};

export const groupedSkills: Record<CategoryType, Skill[]> = {
	frontend: [
		{ label: 'Angular', value: 'angular', icon: <SiAngular size={20} /> },
		{ label: 'Next.js', value: 'nextjs', icon: <SiNextdotjs size={20} /> },
		{ label: 'React', value: 'react', icon: <SiReact size={20} /> },
		{ label: 'Nuxt.js', value: 'nuxtjs', icon: <SiNuxtdotjs size={20} /> },
		{ label: 'Vue.js', value: 'vuejs', icon: <SiVuedotjs size={20} /> },
		{ label: 'TypeScript', value: 'typescript', icon: <SiTypescript size={20} /> },
		{ label: 'JavaScript', value: 'javascript', icon: <SiJavascript size={20} /> },
		{ label: 'Tailwind CSS', value: 'tailwindcss', icon: <SiTailwindcss size={20} /> },
		{ label: 'SCSS', value: 'scss', icon: <SiSass size={20} /> }
	],
	backend: [
		{ label: 'Spring', value: 'spring', icon: <SiSpring size={20} /> },
		{ label: 'Java', value: 'java', icon: <RiJavaLine size={20} /> },
		{ label: 'Kotlin', value: 'kotlin', icon: <SiKotlin size={20} /> },
		{ label: 'JavaScript', value: 'javascript', icon: <SiJavascript size={20} /> },
		{ label: 'TypeScript', value: 'typescript', icon: <SiTypescript size={20} /> },
		{ label: 'Next.js', value: 'nextjs', icon: <SiNextdotjs size={20} /> },
		{ label: 'Express.js', value: 'expressjs', icon: <SiExpress size={20} /> },
		{ label: 'Python', value: 'python', icon: <SiPython size={20} /> }
	],
	devops: [
		{ label: 'AWS', value: 'aws', icon: <FaAws size={20} /> },
		{ label: 'OCI', value: 'oci', icon: <SiOracle size={20} /> },
		{ label: 'Vercel', value: 'vercel', icon: <SiVercel size={20} /> },
		{ label: 'DigitalOcean', value: 'digitalocean', icon: <SiDigitalocean size={20} /> }
	],
	mobile: [
		{ label: 'Android', value: 'android', icon: <SiAndroid size={20} /> },
		{ label: 'Kotlin', value: 'kotlin', icon: <SiKotlin size={20} /> },
		{ label: 'Java', value: 'java', icon: <RiJavaLine size={20} /> },
		{ label: 'React Native', value: 'reactnative', icon: <SiReact size={20} /> }
	]
};
