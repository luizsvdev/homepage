import DuckImage from '@/components/ui/DuckImage';
import { whatsappContact } from '@/constants/social';
import { Button } from '@heroui/react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import React from 'react';
import { SiWhatsapp } from 'react-icons/si';

export default function ContactAction(): React.JSX.Element {
	const intl = useTranslations('appMain.contact');

	return (
		<div className="flex gap-4">
			<DuckImage
				duckSize={48}
				className="animate-bounce"
			/>
			<Button
				startContent={<SiWhatsapp size={20} />}
				color="primary"
				size="lg"
				as={Link}
				href={whatsappContact}
				target="_blank"
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
