'use client';

import { SECTION_IDS, SectionId } from '@/constants/section';
import { githubProfile } from '@/constants/social';
import { useActiveSection } from '@/hooks/useActiveSection';
import For from '@/utils/For';
import { Button, Link, Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@heroui/react';
import { useTranslations } from 'next-intl';
import { JSX } from 'react';
import { SiGithub } from 'react-icons/si';
import PortfolioLogo from '../ui/PortfolioLogo';
import LocaleSwitcher from './LocaleSwitcher';

const sectionIds: SectionId[] = [...SECTION_IDS]
	.filter((id) => !['home'].includes(id));

export default function Header(): JSX.Element {
	const t = useTranslations('appHeader');
	const { activeSection } = useActiveSection();

	return (
		<Navbar
			isBordered
			classNames={{
				base: 'w-full flex items-center justify-center fixed',
				wrapper: 'max-w-[1400px]'
			}}
		>
			<NavbarBrand as={Link} href="#home" className="flex gap-4 items-center">
				<PortfolioLogo />
				<span className="text-xl font-bold">Luiz Silva</span>
			</NavbarBrand>
			<NavbarContent className="hidden md:flex gap-4 items-center" justify="center">
				<For each={sectionIds}>
					{(section) => (
						<NavbarItem key={section} isActive={activeSection === section}>
							<Link color={activeSection === section ? 'primary' : 'foreground'} href={`#${section}`}>
								{t(section)}
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
