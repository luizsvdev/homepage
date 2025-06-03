import LsContainer from '@/components/ui/LsContainer';
import React from 'react';
import HeroDescription from './HeroDescription';
import HeroTitle from './HeroTitle';
import HeroProfilePicture from './ProfilePicture';
import HeroActions from './HeroActions';

export default function Hero(): React.JSX.Element {
	return (
		<LsContainer textAlign="center">
			<HeroProfilePicture />
			<HeroTitle />
			<HeroDescription />
			<HeroActions />
		</LsContainer>
	);
}
