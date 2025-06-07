import React from 'react';
import About from './about/About';
import Skills from './skills/Skills';

export default function Main(): React.JSX.Element {
	return (
		<main className="dark text-foreground bg-background">
			<About />
			<Skills />
		</main>
	);
}
