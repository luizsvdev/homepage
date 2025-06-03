import Image from 'next/image';
import { JSX } from 'react';


export default function Header(): JSX.Element {
	return (
		<header className="w-full flex justify-center items-center border-b-1 fixed top-0">
			<div style={{ maxWidth: '1400px' }} className="p-4 w-full flex justify-between">
				<div className="flex gap-4 items-center">
					<Image src="/logos/logo.svg" alt="Logo" width={40} height={40} />
					<span className="text-purple-400 text-xl font-bold">Luiz Silva</span>
				</div>
				<nav className="flex gap-4 items-center">
					<a href="#about">About</a>
					<a href="#skills">Skills</a>
					<a href="projects">Projects</a>
					<a href="#contact">Contact</a>
				</nav>
			</div>
		</header>
	);
}
