'use client';

import {
	Card, CardBody, CardHeader 
} from '@heroui/react';
import { useTranslations } from 'next-intl';
import React from 'react';

function calculateAge(): number {
	const today = new Date();
	const birth = new Date('2002-12-14');
	let age = today.getFullYear() - birth.getFullYear();
	const monthDiff = today.getMonth() - birth.getMonth();
	const dayDiff = today.getDate() - birth.getDate();

	if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
		age--;
	}

	return age;
}

function calculateExperience(): number {
	const currentYear = new Date().getFullYear();
	return currentYear - 2022;
}

export default function AboutFactsCard(): React.JSX.Element {
	const intl = useTranslations('appMain.about.quickFacts');

	return (
		<div>
			<Card
				classNames={{
					base: 'bg-primary-400/20 border border-primary-400',
					header: 'px-6 pt-6',
					body: 'px-6 pb-6'
				}}
			>
				<CardHeader>
					<h3 className="text-xl font-bold text-secondary">{intl('title')}</h3>
				</CardHeader>
				<CardBody>
					<ul className="space-y-2 text-gray-300">
						<li>🎂 {calculateAge()} {intl('age')}</li>
						<li>🎓 {intl('graduation')}</li>
						<li>💼 {calculateExperience()}+ {intl('experience')}</li>
						<li>🌍 {intl('basedIn')}</li>
						<li>🦆 {intl('enthusiast')}</li>
						<li>🍵 {intl('teaTeam')}</li>
					</ul>
				</CardBody>
			</Card>
		</div>
	);
}
