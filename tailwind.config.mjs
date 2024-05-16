/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
	  extend: {
		colors: {
		  'dark-green': {
			100: "#1F3832",
		  },
		  'glamping-light-green': {
			100: "#C8E8C3",
		  },
		  'primary-light': {
			100: "#F3EDDF",
		  },
		  'hover-color': {
			100: "#8C8C8C",
		  },
		},
		animation: {
		  marquee: 'marquee 320s linear infinite',
		  marquee2: 'marquee2 320s linear infinite',
		  rotate: 'spin 10s linear infinite',
		  pulseSlow: 'pulseSlow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',

		},
		keyframes: {
			pulseSlow: {
				'0%': { opacity: '1' },
				'50%': { opacity: '0.5' },
			  },
		  marquee: {
			'0%': { transform: 'translateX(0%)' },
			'100%': { transform: 'translateX(-100%)' },
		  },
		  marquee2: {
			'0%': { transform: 'translateX(100%)' },
			'100%': { transform: 'translateX(0%)' },
		  },
		  spin: {
			'0%': { transform: 'rotate(0deg)' },
			'100%': { transform: 'rotate(360deg)' },
		  },
		},
	  },
	},
	plugins: ["prettier-plugin-tailwindcss"],
  }

// DEFAULT CONFIG FILE

  // /** @type {import('tailwindcss').Config} */
// export default {
// 	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
// 	theme: {
// 		extend: {},
// 	},
// 	plugins: [],
// }