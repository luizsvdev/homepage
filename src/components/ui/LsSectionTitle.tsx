import React from 'react';

type LsSectionTitleProps = {
	label: string;
	startAdornment?: React.ReactNode;
	endAdornment?: React.ReactNode;
};

export default function LsSectionTitle({
	label,
	startAdornment,
	endAdornment 
}: Readonly<LsSectionTitleProps>): React.JSX.Element {
	return (
		<h1 className="text-4xl font-bold select-none mb-8 flex justify-center items-center gap-2">
			{startAdornment}
			<span className="text-primary">{label}</span>
			{endAdornment}
		</h1>
	);
}
