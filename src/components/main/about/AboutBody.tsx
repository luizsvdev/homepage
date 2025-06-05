import React from 'react';
import AboutFactsCard from './AboutFactsCard';
import AboutPresentation from './AboutPresentation';

export default function AboutBody(): React.JSX.Element {
	return (
		<div className="grid md:grid-cols-2 gap-12 items-center">
			<AboutPresentation />
			<AboutFactsCard />
		</div>
	);
}
