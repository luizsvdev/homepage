'use client';

import { Button } from '@heroui/react';
import React from 'react';

export default function HeroActions(): React.JSX.Element {
	return (
		<div className="flex gap-4 justify-center items-center">
			<Button color="primary">Primary</Button>
			<Button color="secondary">Secondary</Button>
		</div>
	);
}
