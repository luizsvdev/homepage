'use client';

import { Category } from '@/constants/skills';
import { useSkillsContext } from '@/providers/SkillProvider';
import {
	Button, Card, CardHeader, Tooltip
} from '@heroui/react';
import { useTranslations } from 'next-intl';
import React, { useCallback, useMemo } from 'react';

type SkillCategoryCardProps = {
	category: Category;
};

export default function SkillCategoryCard({ category }: Readonly<SkillCategoryCardProps>): React.JSX.Element {
	const intl = useTranslations('appMain.skills.body');

	const { toggleCategory, selectedCategories } = useSkillsContext();

	const tooltipMessage = useMemo(() => (
		intl('cardTooltip').replace('$CATEGORY', category.label)
	), [category.label, intl]);

	const isCategoryActive = useMemo(() => (
		!!selectedCategories.find(ctg => ctg === category.value)
	), [category.value, selectedCategories]);

	const styleByStatus = useMemo(() => (
		isCategoryActive
			? 'border border-primary bg-primary/20'
			: 'border bg-transparent md:hover:bg-primary/10'
	), [isCategoryActive]);


	const handleCardClick = useCallback(() => {
		toggleCategory(category.value);
	}, [category.value, toggleCategory]);

	return (
		<Tooltip
			closeDelay={100}
			content={tooltipMessage}
		>
			<Card
				classNames={{
					base: `${styleByStatus} text-center active:scale-105 md:hover:scale-105 hover:cursor-pointer`,
					header: 'flex flex-col'
				}}
				onPressEnd={handleCardClick}
				as={Button}
			>
				<CardHeader>
					{category.icon}
					<h3 className="font-bold text-primary-400 text-lg">{category.label}</h3>
				</CardHeader>
			</Card>
		</Tooltip>
	);
}
