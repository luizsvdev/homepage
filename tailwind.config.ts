import { heroui } from '@heroui/react';
import type { Config } from 'tailwindcss';

export default {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
		'./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}'
	],
	theme: {
		extend: {
			screens: {
				'short': {
					raw: '(max-height: 647px)'
				},
				'medium': {
					raw: '(max-height: 779px)'
				}
		 	},
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)'
			},
			animation: {floating: 'floating 6s ease-in-out infinite'},
			keyframes: {
				floating: {
					'0%, 100%': {transform: 'translateY(0)'},
					'50%': {transform: 'translateY(-10px)'}
				}
			}
		}
	},
	darkMode: 'class',
	plugins: [heroui({
		'themes': {
			'light': {
				'colors': {
					'default': {
						'50': '#fafafa',
						'100': '#f2f2f3',
						'200': '#ebebec',
						'300': '#e3e3e6',
						'400': '#dcdcdf',
						'500': '#d4d4d8',
						'600': '#afafb2',
						'700': '#8a8a8c',
						'800': '#656567',
						'900': '#404041',
						'foreground': '#000',
						'DEFAULT': '#d4d4d8'
					},
					'primary': {
						'50': '#ebe9fc',
						'100': '#cfcbf8',
						'200': '#b3acf3',
						'300': '#978def',
						'400': '#7b6fea',
						'500': '#5f50e6',
						'600': '#4e42be',
						'700': '#3e3496',
						'800': '#2d266d',
						'900': '#1d1845',
						'foreground': '#fff',
						'DEFAULT': '#5f50e6'
					},
					'secondary': {
						'50': '#fff8e0',
						'100': '#feeeb4',
						'200': '#fee488',
						'300': '#fedb5d',
						'400': '#fdd131',
						'500': '#fdc705',
						'600': '#d1a404',
						'700': '#a48103',
						'800': '#785f02',
						'900': '#4c3c02',
						'foreground': '#000',
						'DEFAULT': '#fdc705'
					},
					'success': {
						'50': '#e2f8ec',
						'100': '#b9efd1',
						'200': '#91e5b5',
						'300': '#68dc9a',
						'400': '#40d27f',
						'500': '#17c964',
						'600': '#13a653',
						'700': '#0f8341',
						'800': '#0b5f30',
						'900': '#073c1e',
						'foreground': '#000',
						'DEFAULT': '#17c964'
					},
					'warning': {
						'50': '#fef2e4',
						'100': '#fcdfbe',
						'200': '#facc97',
						'300': '#f9b971',
						'400': '#f7a64b',
						'500': '#f59325',
						'600': '#ca791f',
						'700': '#9f6018',
						'800': '#744612',
						'900': '#4a2c0b',
						'foreground': '#000',
						'DEFAULT': '#f59325'
					},
					'danger': {
						'50': '#fee1eb',
						'100': '#fbb8cf',
						'200': '#f98eb3',
						'300': '#f76598',
						'400': '#f53b7c',
						'500': '#f31260',
						'600': '#c80f4f',
						'700': '#9e0c3e',
						'800': '#73092e',
						'900': '#49051d',
						'foreground': '#000',
						'DEFAULT': '#f31260'
					},
					'background': '#ffffff',
					'foreground': '#000000',
					'content1': {
						'DEFAULT': '#ffffff',
						'foreground': '#000'
					},
					'content2': {
						'DEFAULT': '#f4f4f5',
						'foreground': '#000'
					},
					'content3': {
						'DEFAULT': '#e4e4e7',
						'foreground': '#000'
					},
					'content4': {
						'DEFAULT': '#d4d4d8',
						'foreground': '#000'
					},
					'focus': '#006FEE',
					'overlay': '#000000'
				}
			},
			'dark': {
				'colors': {
					'default': {
						'50': '#0d0d0e',
						'100': '#19191c',
						'200': '#26262a',
						'300': '#323238',
						'400': '#3f3f46',
						'500': '#65656b',
						'600': '#8c8c90',
						'700': '#b2b2b5',
						'800': '#d9d9da',
						'900': '#ffffff',
						'foreground': '#fff',
						'DEFAULT': '#3f3f46'
					},
					'primary': {
						'50': '#1d1845',
						'100': '#2d266d',
						'200': '#3e3496',
						'300': '#4e42be',
						'400': '#5f50e6',
						'500': '#7b6fea',
						'600': '#978def',
						'700': '#b3acf3',
						'800': '#cfcbf8',
						'900': '#ebe9fc',
						'foreground': '#fff',
						'DEFAULT': '#5f50e6'
					},
					'secondary': {
						'50': '#4c3c02',
						'100': '#785f02',
						'200': '#a48103',
						'300': '#d1a404',
						'400': '#fdc705',
						'500': '#fdd131',
						'600': '#fedb5d',
						'700': '#fee488',
						'800': '#feeeb4',
						'900': '#fff8e0',
						'foreground': '#000',
						'DEFAULT': '#fdc705'
					},
					'success': {
						'50': '#073c1e',
						'100': '#0b5f30',
						'200': '#0f8341',
						'300': '#13a653',
						'400': '#17c964',
						'500': '#40d27f',
						'600': '#68dc9a',
						'700': '#91e5b5',
						'800': '#b9efd1',
						'900': '#e2f8ec',
						'foreground': '#000',
						'DEFAULT': '#17c964'
					},
					'warning': {
						'50': '#4a2c0b',
						'100': '#744612',
						'200': '#9f6018',
						'300': '#ca791f',
						'400': '#f59325',
						'500': '#f7a64b',
						'600': '#f9b971',
						'700': '#facc97',
						'800': '#fcdfbe',
						'900': '#fef2e4',
						'foreground': '#000',
						'DEFAULT': '#f59325'
					},
					'danger': {
						'50': '#49051d',
						'100': '#73092e',
						'200': '#9e0c3e',
						'300': '#c80f4f',
						'400': '#f31260',
						'500': '#f53b7c',
						'600': '#f76598',
						'700': '#f98eb3',
						'800': '#fbb8cf',
						'900': '#fee1eb',
						'foreground': '#000',
						'DEFAULT': '#f31260'
					},
					'background': '#000000',
					'foreground': '#ffffff',
					'content1': {
						'DEFAULT': '#18181b',
						'foreground': '#fff'
					},
					'content2': {
						'DEFAULT': '#27272a',
						'foreground': '#fff'
					},
					'content3': {
						'DEFAULT': '#3f3f46',
						'foreground': '#fff'
					},
					'content4': {
						'DEFAULT': '#52525b',
						'foreground': '#fff'
					},
					'focus': '#006FEE',
					'overlay': '#ffffff'
				}
			}
		},
		'layout': {'disabledOpacity': '0.5'}
	})]
} satisfies Config;
