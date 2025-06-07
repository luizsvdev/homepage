'use client';

import { SECTION_IDS, SectionId } from '@/constants/section';
import { githubProfile } from '@/constants/social';
import { useScrollContext } from '@/providers/ScrollProvider';
import For from '@/utils/For';
import {
	Button, Link, Navbar, NavbarBrand, NavbarContent, NavbarItem
} from '@heroui/react';
import { useTranslations } from 'next-intl';
import { JSX, useMemo } from 'react';
import { SiGithub } from 'react-icons/si';
import LsPortfolioLogo from '../ui/LsPortfolioLogo';
import LocaleSwitcher from './LocaleSwitcher';

const sectionIds: SectionId[] = [...SECTION_IDS]
	.filter((id) => !['home'].includes(id));

export default function Header(): JSX.Element {
	const intl = useTranslations('appHeader');
	const { activeSection } = useScrollContext();

	const inHomeSection = useMemo(() => (
		activeSection === 'home'
	), [activeSection]);

	return (
		<Navbar
			isBordered
			classNames={{
				base: 'w-full flex items-center justify-center fixed border-b border-primary/30',
				wrapper: 'max-w-[1400px]'
			}}
		>
			<NavbarBrand as={Link} href="#home" className="flex gap-4 items-center select-none">
				<LsPortfolioLogo />
				<span className={`
					text-xl font-bold
					${inHomeSection ? 'text-primary' : 'text-white'}
					transition-colors duration-200`}
				>
					Luiz Silva
				</span>
			</NavbarBrand>
			<NavbarContent className="hidden md:flex gap-4 items-center select-none" justify="center">
				<For each={sectionIds}>
					{(section) => (
						<NavbarItem key={section} isActive={activeSection === section}>
							<Link
								color={activeSection === section ? 'primary' : 'foreground'}
								href={`#${section}`}
								className="transition-colors duration-200"
							>
								{intl(section)}
							</Link>
						</NavbarItem>
					)}
				</For>
			</NavbarContent>
			<NavbarContent className="flex gap-4 items-center" justify="end">
				<NavbarItem>
					<LocaleSwitcher />
				</NavbarItem>
				<NavbarItem>
					<Button
						isIconOnly
						variant="light"
						aria-label="GitHub"
						as={Link}
						href={githubProfile}
						target="_blank"
					>
						<SiGithub size={24} />
					</Button>
				</NavbarItem>
			</NavbarContent>
		</Navbar>
	);
}
