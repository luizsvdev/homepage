import Image from 'next/image';
import React from 'react';

const DUCK_IMG = '/images/rubber_duck_2.png';

type DuckImageProps = {
	className?: string;
	duckClasses?: string;
	duckSize: number;
};

function DuckImage({ className, duckClasses, duckSize }: DuckImageProps): React.JSX.Element {
	return (
		<div className={className}>
			<Image
				src={DUCK_IMG}
				alt="Rubber Duck"
				width={duckSize}
				height={duckSize}
				className={`${duckClasses} select-none`}
			/>
		</div>
	);
}

export default function HeroDucks(): React.JSX.Element {
	return (
		<div className="absolute inset-0 overflow-hidden max-w-[1400px] mx-auto">
			<DuckImage
				className={`animate-floating [animation-delay:750ms]
				  absolute top-24 left-12 md:left-24 w-12 opacity-30`}
				duckClasses="-scale-x-100 rotate-[30deg]"
				duckSize={48}
			/>
			<DuckImage
				className={`animate-floating [animation-delay:1250ms]
				  delay-450 absolute bottom-2/3 right-0 md:right-48 w-16 opacity-50`}
				duckClasses="-scale-x-100 -rotate-[30deg]"
				duckSize={56}
			/>
			<DuckImage
				className={`animate-floating [animation-delay:300ms]
				  absolute top-1/2 left-6 md:left-1/4 opacity-40`}
				duckClasses="-rotate-[15deg]"
				duckSize={56}
			/>
			<DuckImage
				className={`animate-floating [animation-delay:50ms]
				  absolute bottom-20 right-8 md:right-1/3 w-16 opacity-20`}
				duckClasses="-scale-x-100 rotate-[65deg]"
				duckSize={64}
			/>
		</div>
	);
}
