import React, { ReactNode } from 'react';

type ForProps<T> = {
	each?: T[] | null | undefined | false;
	children: (item: T, index: number) => ReactNode;
};

export default function For<T>({ each, children }: ForProps<T>): React.JSX.Element {
	const list = Array.isArray(each) ? each : [];

	return <>{list.map(children)}</>;
}
