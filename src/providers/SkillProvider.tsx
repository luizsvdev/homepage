'use client';

import { CategoryType, groupedSkills, Skill } from '@/constants/skills';
import React, {
	createContext,
	ReactNode,
	useCallback,
	useContext,
	useEffect,
	useMemo,
	useState
} from 'react';

type SkillsContextType = {
	filteredSkills: Skill[];
	selectedCategories: CategoryType[];
	toggleCategory: (category: CategoryType) => void;
};

const SkillsContext = createContext<SkillsContextType | undefined>(undefined);

const allEntries = Object.entries(groupedSkills) as [CategoryType, Skill[]][];

export function SkillsProvider({ children }: { children: ReactNode }): React.JSX.Element {
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

	const contextValues = useMemo(() => ({
		filteredSkills,
		selectedCategories,
		toggleCategory
	}), [filteredSkills, selectedCategories, toggleCategory]);

	return (
		<SkillsContext.Provider value={contextValues}>
			{children}
		</SkillsContext.Provider>
	);
};

export function useSkillsContext(): SkillsContextType {
	const context = useContext(SkillsContext);
	if (!context) throw new Error('useSkillsContext must be used within a SkillsProvider');
	return context;
};
