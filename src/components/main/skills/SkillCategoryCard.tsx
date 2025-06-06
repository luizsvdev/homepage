'use client';

import { Category } from '@/constants/skills';
import { useSkillsContext } from '@/providers/SkillProvider';
import { Button, Card, CardHeader } from '@heroui/react';
import React, { useCallback, useMemo } from 'react';

type SkillCategoryCardProps = {
	category: Category;
};

export default function SkillCategoryCard({
	category
}: Readonly<SkillCategoryCardProps>): React.JSX.Element {
	const { toggleCategory, selectedCategories } = useSkillsContext();

	const isCategoryActive = useMemo(() => (
		!!selectedCategories.find(ctg => ctg === category.value)
	), [selectedCategories]);

	const styleByStatus = useMemo(() => (
		isCategoryActive
			? 'border-2 border-primary bg-primary/20'
			: 'border bg-transparent hover:bg-primary/10'
	), [isCategoryActive]);


	const handleCardClick = useCallback(() => {
		toggleCategory(category.value);
	}, [category]);

	return (
		<Card
			classNames={{
				base: `${styleByStatus} text-center hover:scale-105 hover:cursor-pointer`,
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
	);
}
