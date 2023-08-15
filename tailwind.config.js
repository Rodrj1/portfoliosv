/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',

				textured: 'url(src/lib/noise.svg)'
			},
			colors: {
				navy: {
					100: '#18173e',
					200: '#292752',
					300: '#2927524d',
					400: '#0f172a'
				},
				newpink: '#e251a8',
				newwhite: '#d6d5d5',
				regalBlue: '#243c5a'
			}
		}
	},
	plugins: []
};
