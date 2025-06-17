import React from 'react';
import { SiGithub, SiLinkedin, SiWhatsapp } from 'react-icons/si';

export const socialLinks = {
	github: 'https://github.com/luizsvdev',
	linkedin: 'https://www.linkedin.com/in/luizsilvajr',
	whatsapp: 'https://wa.me/5546991177172'
} as const;

export const { github, linkedin, whatsapp } = socialLinks;

export type SocialAccount = {
	link: string;
	username: string;
	icon: React.ReactNode;
};

export const socialAccounts: Record<keyof typeof socialLinks, SocialAccount> = {
	github: {
		link: socialLinks.github,
		username: 'luizsvdev',
		icon: <SiGithub size={20} />
	},
	linkedin: {
		link: socialLinks.linkedin,
		username: 'luizsilvajr',
		icon: <SiLinkedin size={20} />
	},
	whatsapp: {
		link: socialLinks.whatsapp,
		username: '+55 (46) 99117-7172',
		icon: <SiWhatsapp size={20} />
	}
};

export const allAccounts: SocialAccount[] = Object.entries(socialAccounts)
	.map(([_, account]) => account);
