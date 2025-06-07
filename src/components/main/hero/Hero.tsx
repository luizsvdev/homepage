import LsContainer from '@/components/ui/LsContainer';
import React from 'react';
import HeroActions from './HeroActions';
import HeroDescription from './HeroDescription';
import HeroDucks from './HeroDucks';
import HeroProfilePicture from './HeroProfilePicture';
import HeroScrollIndicator from './HeroScrollIndicator';
import HeroTitle from './HeroTitle';

export default function Hero(): React.JSX.Element {
	return (
		<LsContainer textAlign="center" section="home">
			<HeroProfilePicture />
			<div>
				<HeroTitle />
				<HeroDescription />
				<HeroActions />
				<HeroScrollIndicator />
				<HeroDucks />
			</div>
		</LsContainer>
	);
}
