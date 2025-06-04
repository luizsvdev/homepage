export const LOCALES = [
	{
		code: 'en-US',
		label: 'English'
	},
	{
		code: 'pt-BR',
		label: 'Português (Brasil)'
	}
] as const;
export type LocaleCode = (typeof LOCALES)[number]['code'];
