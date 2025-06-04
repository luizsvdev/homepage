import React from 'react';
import About from './about/About';

export default function Main(): React.JSX.Element {
	return (
		<main className="dark text-foreground bg-background">
			<About />
		</main>
	);
}
