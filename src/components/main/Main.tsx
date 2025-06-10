import React from 'react';
import AboutSection from './about/AboutSection';
import ProjectsSection from './projects/ProjectsSection';
import SkillsSection from './skills/SkillsSection';

export default function Main(): React.JSX.Element {
	return (
		<main className="dark text-foreground bg-background">
			<AboutSection />
			<SkillsSection />
			<ProjectsSection />
		</main>
	);
}
