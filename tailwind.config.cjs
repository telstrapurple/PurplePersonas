const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

const config = {
	mode: 'jit',
	purge: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		// Official TP Theme
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			black: '#282828',
			white: colors.white,
			gray: {
				lightest: '#F9F9F9',
				lighter: '#F3F3F3',
				light: '#E6E6E6',
				DEFAULT: '#D0D0D0',
				dark: '#414141'
			},
			red: {
				lightest: '#FEF5F7',
				lighter: '#FDD9E1',
				light: '#FBB3C3',
				DEFAULT: '#ED0037',
				dark: '#9A0024'
			},
			blue: {
				lightest: '#ECF7FE',
				lighter: '#D8EFFE',
				light: '#B2E0FD',
				DEFAULT: '#0099F8',
				dark: '#001E82'
			}
		},
		fontFamily: {
			sans: ['TelstraAkkurat', ...defaultTheme.fontFamily.sans],
			serif: [...defaultTheme.fontFamily.serif],
			mono: [...defaultTheme.fontFamily.mono]
		},
		minHeight: {
			300: '300px',
			...defaultTheme.minHeight
		},
		maxHeight: {
			300: '300px',
			...defaultTheme.maxHeight
		},
		extend: {}
	},
	plugins: [require('@tailwindcss/typography')]
};

module.exports = config;
