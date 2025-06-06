import React, { useEffect, useRef, useState } from 'react';
import { FaAws } from 'react-icons/fa';
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

export type CategoryType =
	| 'frontend'
	| 'backend'
	| 'devops'
	| 'mobile';

export type Category = {
	label: string;
	value: CategoryType;
};

export type Skill = {
	label: string;
	value: string;
	icon: React.ReactNode;
};

// export type SkillWithCategory = Skill & { category: Category }

const groupedSkills: Record<CategoryType, Skill[]> = {
	frontend: [
		{ label: 'Angular', value: 'angualr', icon: <SiAngular size={20} /> },
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

type UseSkills = {
	filteredSkills: Skill[];
};

export default function useSkills(): UseSkills {
	const [selectedCategories, setSelectedCategories] = useState<CategoryType[]>([]);
	const [filteredSkills, setFilteredSkills] = useState<Skill[]>([]);

	useEffect(() => {
		const allEntries = Object.entries(groupedSkills) as [CategoryType, Skill[]][];

		if (selectedCategories.length === 0) {
			// Nenhuma categoria selecionada → retorna tudo
			const allSkills = allEntries.flatMap(([_, skills]) => skills);
			setFilteredSkills(allSkills);
			return;
		}

		// Filtra por categoria selecionada
		const filtered = allEntries
			.filter(([category]) => selectedCategories.includes(category))
			.flatMap(([_, skills]) => skills);

		setFilteredSkills(filtered);
	}, [selectedCategories]);


	return { filteredSkills };
}
