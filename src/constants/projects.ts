import { Stack } from './stack';

export type Project = {
	value: string;
	workInProgress: boolean;
	logo?: string;
	projectUrl: string;
	githubUrl: string;
	stack: Stack[];
}

export const allProjects: Project[] = [
	{
		value: 'webbicho',
		workInProgress: true,
		logo: 'https://webbicho.com/images/w.svg',
		projectUrl: 'https://webbicho.com',
		githubUrl: 'https://github.com/webbicho',
		stack: [
			'nuxtjs',
			'vuejs',
			'typescript',
			'kotlin',
			'spring',
			'kotlin',
			'tailwindcss',
			'digitalocean',
			'cloudflare',
			'vercel'
		]
	},
	{
		value: 'portfolio',
		workInProgress: false,
		logo: 'https://luizsv.dev/logos/logo.svg',
		projectUrl: 'https://luizsv.dev',
		githubUrl: 'https://github.com/luizsvdev/homepage',
		stack: [
			'nextjs',
			'typescript',
			'tailwindcss',
			'vercel'
		]
	}
];
