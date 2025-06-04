import { SECTION_IDS, SectionId } from '@/constants/section';
import { useEffect, useState } from 'react';

type UseActiveSection = {
	activeSection: SectionId
}

const sectionIds: readonly SectionId[] = SECTION_IDS;

export function useActiveSection(): UseActiveSection {
	const [activeSection, setActiveSection] = useState<SectionId>('home');

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setActiveSection(entry.target.id as SectionId);
					}
				});
			},
			{
				root: null,
				rootMargin: '0px 0px -70% 0px',
				threshold: 0
			}
		);

		sectionIds.forEach((id) => {
			const el = document.getElementById(id);
			if (el) observer.observe(el);
		});

		return (): void => {
			sectionIds.forEach((id) => {
				const el = document.getElementById(id);
				if (el) observer.unobserve(el);
			});
		};
	}, []);

	return { activeSection };
}
