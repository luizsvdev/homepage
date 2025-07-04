'use client';

import React from 'react';
import ContactAction from './ContactAction';
import ContactOptions from './ContactOptions';
import ContactTitle from './ContactTitle';

export default function ContactBody(): React.JSX.Element {

	return (
		<>
			<ContactTitle />
			<ContactAction />
			<ContactOptions />
		</>
	);
}
