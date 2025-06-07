import { FlatCompat } from '@eslint/eslintrc';
import stylistic from '@stylistic/eslint-plugin';
import ts from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import importNewLine from 'eslint-plugin-import-newlines';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
	baseDirectory: __dirname,
});

const eslintConfig = [
	...compat.extends("next/core-web-vitals", "next/typescript"),
	{
		files: ['**/*.ts', '**/*.tsx'],
		languageOptions: {
			parser: tsParser,
			parserOptions: {
				project: ['./tsconfig.json'],
				tsconfigRootDir: __dirname,
			},
		},
		plugins: {
			stylistic,
			'@typescript-eslint': ts,
			"import-newlines": importNewLine
		},
		rules: {
			'no-console': 'warn',
			'quotes': ['warn', 'single'],
			'max-len': ['warn', 120],
			'function-paren-newline': ['warn', 'multiline-arguments'],
			'newline-per-chained-call': ['warn', { ignoreChainWithDepth: 3 }],
			'semi': ['warn', 'always'],
			'import-newlines/enforce': ['warn', { items: 8, 'max-len': 80 }],

			// Stylistic
			'stylistic/comma-dangle': ['warn', 'never'],
			'stylistic/no-tabs': 'off',
			'stylistic/indent': ['warn', 'tab'],
			'stylistic/jsx-quotes': ['warn', 'prefer-double'],

			// TypeScript
			'@typescript-eslint/no-unused-vars': ['warn', {
				"args": "all",
				"argsIgnorePattern": "^_",
				"caughtErrors": "all",
				"caughtErrorsIgnorePattern": "^_",
				"destructuredArrayIgnorePattern": "^_",
				"varsIgnorePattern": "^_",
				"ignoreRestSiblings": true
			}],
			'@typescript-eslint/prefer-readonly': 'warn',
			'@typescript-eslint/explicit-function-return-type': 'warn',

		},
	},
];

export default eslintConfig;
