import React from 'react';
import AboutSection from './about/AboutSection';
import ContactSection from './contact/ContactSection';
import ProjectsSection from './projects/ProjectsSection';
import SkillsSection from './skills/SkillsSection';

export default function Main(): React.JSX.Element {
	return (
		<main>
			<AboutSection />
			<SkillsSection />
			<ProjectsSection />
			<ContactSection />
		</main>
	);
}
