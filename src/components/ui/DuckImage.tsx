import Image from 'next/image';

const DUCK_IMG = '/images/rubber_duck_2.png';

type DuckImageProps = {
	className?: string;
	duckClasses?: string;
	duckSize: number;
};

function DuckImage({
	className,
	duckClasses,
	duckSize
}: DuckImageProps): React.JSX.Element {
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

export default DuckImage;
