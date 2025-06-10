export default function generateRandomDelay(): string {
	const min = 0;
	const max = 1500;
	const randomMs = Math.floor(Math.random() * (max - min + 1)) + min;
	return `[animation-delay:${randomMs}ms]`;
};
