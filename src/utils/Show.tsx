import React from 'react';

type ShowProps = {
	when: boolean;
	fallback?: React.ReactNode;
	children: React.ReactNode;
}

export default function Show({
	when,
	fallback,
	children
}: ShowProps): React.JSX.Element {
	return (
		<>
			{when ? children : fallback ?? null}
		</>
	);
}
