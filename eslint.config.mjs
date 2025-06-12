import { FlatCompat } from '@eslint/eslintrc';
import stylistic from '@stylistic/eslint-plugin';
import ts from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import { globalIgnores } from 'eslint/config';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
	baseDirectory: __dirname,
});

const eslintConfig = [
	...compat.extends('next/core-web-vitals', 'next/typescript'),
	globalIgnores([
		'**/*.config.ts',
		'**/*.config.js',
	]),
	{
		files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
		languageOptions: {
			parser: tsParser,
			parserOptions: {
				project: ['./tsconfig.json'],
				tsconfigRootDir: __dirname,
			},
		},
		plugins: {
			stylistic,
			'@typescript-eslint': ts
		},
		rules: {
			'no-console': 'warn',
			'quotes': ['warn', 'single'],
			'max-len': ['warn', 120],
			'function-paren-newline': ['warn', 'multiline-arguments'],
			'newline-per-chained-call': ['warn', { ignoreChainWithDepth: 3 }],
			'semi': ['warn', 'always'],
			'object-curly-newline': ['warn', {
				'ObjectExpression': { 'multiline': true, 'minProperties': 4 },
        'ObjectPattern': { 'multiline': true, 'minProperties': 4 },
				'ImportDeclaration': { 'multiline': true, 'minProperties': 4 },
				'ObjectExpression': { 'multiline': true, 'minProperties': 4 }
			}],

			// Stylistic
			'stylistic/comma-dangle': ['warn', 'never'],
			'stylistic/no-tabs': 'off',
			'stylistic/indent': ['warn', 'tab'],
			'stylistic/jsx-quotes': ['warn', 'prefer-double'],
			'stylistic/object-curly-spacing': ['warn', 'always'],

			// TypeScript
			'@typescript-eslint/no-unused-vars': ['warn', {
				'args': 'all',
				'argsIgnorePattern': '^_',
				'caughtErrors': 'all',
				'caughtErrorsIgnorePattern': '^_',
				'destructuredArrayIgnorePattern': '^_',
				'varsIgnorePattern': '^_',
				'ignoreRestSiblings': true
			}],
			'@typescript-eslint/prefer-readonly': 'warn',
			'@typescript-eslint/explicit-function-return-type': 'warn',

		},
	},
];

export default eslintConfig;
