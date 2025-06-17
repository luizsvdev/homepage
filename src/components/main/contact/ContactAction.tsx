import DuckImage from '@/components/ui/DuckImage';
import { Button, Link } from '@heroui/react';
import { useTranslations } from 'next-intl';
import React from 'react';
import { LuMail } from 'react-icons/lu';

export default function ContactAction(): React.JSX.Element {
	const intl = useTranslations('appMain.contact');

	return (
		<div className="flex gap-4">
			<DuckImage
				duckSize={48}
				className="animate-bounce"
			/>
			<Button
				color="primary"
				startContent={<LuMail size={20} />}
				as={Link}
				href="mailto:luizsv.dev@gmail.com"
			>
				{intl('startConversation')}
			</Button>
			<DuckImage
				duckSize={48}
				className="animate-bounce [animation-delay:500ms]"
				duckClasses="-scale-x-100"
			/>
		</div>
	);
}
