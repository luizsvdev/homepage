'use client';

import {
	createContext,
	useContext,
	useEffect,
	useState,
	useCallback,
	ReactNode
} from 'react';
import { CategoryType, groupedSkills, Skill } from '@/constants/skills';

type SkillsContextType = {
	filteredSkills: Skill[];
	selectedCategories: CategoryType[];
	toggleCategory: (category: CategoryType) => void;
};

const SkillsContext = createContext<SkillsContextType | undefined>(undefined);

const allEntries = Object.entries(groupedSkills) as [CategoryType, Skill[]][];

export const SkillsProvider = ({ children }: { children: ReactNode }) => {
	const [selectedCategories, setSelectedCategories] = useState<CategoryType[]>([]);
	const [filteredSkills, setFilteredSkills] = useState<Skill[]>([]);

	useEffect(() => {
		const flatSkills = selectedCategories.length === 0
			? allEntries.flatMap(([_, skills]) => skills)
			: allEntries
				.filter(([category]) => selectedCategories.includes(category))
				.flatMap(([_, skills]) => skills);

		const uniqueSkillsMap = new Map<string, Skill>();
		flatSkills.forEach(skill => {
			uniqueSkillsMap.set(skill.value, skill);
		});

		setFilteredSkills([...uniqueSkillsMap.values()]);
	}, [selectedCategories]);

	const toggleCategory = useCallback((category: CategoryType): void => {
		setSelectedCategories(prev =>
			prev.includes(category)
				? prev.filter(c => c !== category)
				: [...prev, category]);
	}, []);

	return (
		<SkillsContext.Provider value={{ filteredSkills, selectedCategories, toggleCategory }}>
			{children}
		</SkillsContext.Provider>
	);
};

export const useSkillsContext = (): SkillsContextType => {
	const context = useContext(SkillsContext);
	if (!context) throw new Error('useSkills must be used within a SkillsProvider');
	return context;
};
