'use client';

import { Button, Link } from '@heroui/react';
import React from 'react';
import { LuChevronDown } from 'react-icons/lu';

export default function HeroScrollIndicator(): React.JSX.Element {
	return (
		<div className="justify-self-center animate-bounce">
			<Button
				isIconOnly
				variant="light"
				as={Link}
				href="#about"
			>
				<LuChevronDown size={20} className="text-secondary" />
			</Button>
		</div>
	);
}
