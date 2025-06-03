import Image from 'next/image';
import { JSX } from 'react';


export default function Header(): JSX.Element {
	return (
		<header className="w-full flex justify-center items-center border-b-1">
			<div style={{maxWidth: '1400px'}} className="p-4 w-full flex justify-between">
				<div className="flex gap-4 items-center">
					<Image src="/images/logo.svg" alt="Logo" width={40} height={40}/>
					<span className="text-purple-400 text-xl font-bold">Luiz Silva</span>
				</div>
				<div className="flex gap-4 items-center">
					<nav>About</nav>
					<nav>Skill</nav>
					<nav>Projects</nav>
					<nav>Contacts</nav>
				</div>
			</div>
		</header>
	);
}
