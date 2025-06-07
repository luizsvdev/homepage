'use client';

import { LOCALES } from '@/constants/locales';
import {
	Button,
	Dropdown,
	DropdownItem,
	DropdownMenu,
	DropdownTrigger
} from '@heroui/react';
import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import React, { useCallback } from 'react';
import { LuGlobe } from 'react-icons/lu';

const items = LOCALES.map((lng) => ({
	key: lng.code,
	label: lng.label
}));

export default function LocaleSwitcher(): React.JSX.Element {
	const router = useRouter();
	const pathname = usePathname();
	const locale = useLocale();

	const onSelect = useCallback((newLocale: string): void => {
		if (newLocale === locale) return;

		const segments = pathname.split('/');
		segments[1] = newLocale;

		const newPath = segments.join('/');
		router.replace(newPath);
	}, [locale, pathname, router]);

	return (
		<Dropdown>
			<DropdownTrigger>
				<Button isIconOnly variant="light" aria-label="Language">
					<LuGlobe size={20} />
				</Button>
			</DropdownTrigger>
			<DropdownMenu
				aria-label="Select language"
				onAction={(key) => onSelect(String(key))}
				disabledKeys={[locale]}
				items={items}
			>
				{(item) => (
					<DropdownItem key={item.key}>
						{item.label}
					</DropdownItem>
				)}
			</DropdownMenu>
		</Dropdown>
	);
}
