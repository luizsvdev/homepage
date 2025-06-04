import LsContainer from '@/components/ui/LsContainer';
import React from 'react';
import AboutTitle from './AboutTitle';

export default function About(): React.JSX.Element {

	return (
		<LsContainer section="about" textAlign="center">
			<AboutTitle />
		</LsContainer>
	);
}
