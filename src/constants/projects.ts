import { Stack } from './stack';

export type Project = {
	title: string;
	value: string;
	description: string;
	logo?: string;
	projectUrl: string;
	githubUrl: string;
	stack: Stack[];
}

export const allProjects: Project[] = [
	{
		title: 'Webbicho',
		value: 'webbicho',
		description: '',
		logo: '',
		projectUrl: 'https://webbicho.com',
		githubUrl: 'https://github.com/webbicho',
		stack: [
			'nuxtjs',
			'vuejs',
			'kotlin',
			'spring',
			'kotlin',
			'tailwindcss',
			'digitalocean',
			'vercel'
		]
	}
];
