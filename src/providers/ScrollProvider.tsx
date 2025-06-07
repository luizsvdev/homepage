'use client';

import { SECTION_IDS, SectionId } from '@/constants/section';
import {
	createContext, useContext, useEffect, useState 
} from 'react';

interface ScrollContextType {
	activeSection: SectionId;
}

const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

interface ScrollProviderProps {
	children: React.ReactNode;
}

export function ScrollProvider({ children }: ScrollProviderProps): React.JSX.Element  {
	const [activeSection, setActiveSection] = useState<SectionId>('home');

	const handleScroll = (): void => {
		const sections = SECTION_IDS.map(sectionId => {
			const element = document.getElementById(sectionId);
			if (!element) return { id: sectionId, percentage: 0 };

			const rect = element.getBoundingClientRect();
			const viewportHeight = window.innerHeight;

			let percentage = 0;
			if (!!rect.height) {
				if (rect.top <= 0 && rect.bottom >= viewportHeight) {
					percentage = 100;
				} else if (rect.top >= 0 && rect.bottom <= viewportHeight) {
					percentage = 100;
				} else if (rect.top < viewportHeight && rect.bottom > 0) {
					const visiblePart = Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0);
					percentage = (visiblePart / rect.height) * 100;
				}
			}

			return { id: sectionId, percentage };
		});

		const fullyVisible = sections.filter(section => section.percentage === 100);

		if (!!fullyVisible.length) {
			setActiveSection(fullyVisible[0].id as SectionId);
		} else {
			const maxPercentage = Math.max(...sections.map(s => s.percentage));
			const mostVisible = sections.find(s => s.percentage === maxPercentage);

			if (mostVisible && mostVisible.percentage > 0) {
				setActiveSection(mostVisible.id as SectionId);
			}
		}
	};

	useEffect(() => {
		handleScroll();

		window.addEventListener('scroll', handleScroll, { passive: true });
		window.addEventListener('resize', handleScroll, { passive: true });

		return (): void => {
			window.removeEventListener('scroll', handleScroll);
			window.removeEventListener('resize', handleScroll);
		};
	}, []);

	return (
		<ScrollContext.Provider value={{ activeSection }}>
			{children}
		</ScrollContext.Provider>
	);
}

export function useScrollContext(): ScrollContextType {
	const context = useContext(ScrollContext);
	if (context === undefined) {
		throw new Error('useScrollContext must be used within a ScrollProvider');
	}
	return context;
}
