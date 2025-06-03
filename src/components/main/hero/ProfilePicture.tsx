import Image from 'next/image';
import React from 'react';

export default function HeroProfilePicture(): React.JSX.Element {
	return (
		<div className="mb-8">
			<Image
				height={200}
				width={200}
				src="/images/Luiz.png"
				alt="Luiz"
				className="select-none rounded-full mx-auto border-4 border-purple-500 shadow-2xl shadow-purple-500/20"
			/>
		</div>
	);
}
