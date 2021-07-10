const defaultTheme = require('tailwindcss/defaultTheme');

const config = {
	mode: 'jit',
	purge: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		colors: {
			// TODO: I assume these are in the Purple style guide and we can grab all of them somewhere...
			red: {
				100: '#ED0037'
			},
			grey: {
				100: '#F6F6F6'
			},
			white: {
				100: '#FFFFFF'
			}
		},
		fontFamily: {
			sans: ['TelstraAkkurat', ...defaultTheme.fontFamily.sans],
			serif: [...defaultTheme.fontFamily.serif],
			mono: [...defaultTheme.fontFamily.mono]
		},
		extend: {}
	},
	plugins: [require('@tailwindcss/typography')]
};

module.exports = config;
