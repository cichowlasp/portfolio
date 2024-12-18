/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			keyframes: {
				wiggle: {
					'0%, 100%': {
						transform: 'translateY(-150px) rotate(-12deg)',
					},
					'50%': {
						transform: 'translateY(-130px) rotate(-12deg)',
					},
				},
			},
			animation: {
				wiggle: 'wiggle 3s ease-in-out infinite',
			},
		},
	},
	plugins: [],
};
