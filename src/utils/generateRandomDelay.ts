export default function generateRandomDelay(): number {
	const min = 50;
	const max = 2500;
	return Math.floor(Math.random() * (max - min + 1)) + min;
};
