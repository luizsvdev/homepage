export const SECTION_IDS = [
	'home',
	'about',
	'skills',
	'projects',
	'contact'
] as const;
export type SectionId = (typeof SECTION_IDS)[number];
export type HeaderSection = {
	hidden?: boolean
	id: SectionId
};
