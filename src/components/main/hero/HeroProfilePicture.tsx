import Image from 'next/image';
import React from 'react';

export default function HeroProfilePicture(): React.JSX.Element {
	return (
		<div className="mb-8">
			<Image
				height={200}
				width={200}
				src="/images/luiz.png"
				alt="Luiz"
				className="select-none rounded-full mx-auto border-4 border-primary shadow-2xl shadow-purple-500/20"
			/>
		</div>
	);
}
