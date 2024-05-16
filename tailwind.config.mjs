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
		  marquee: 'marquee 80s linear infinite',
		  marquee2: 'marquee2 80s linear infinite',
		  rotate: 'spin 10s linear infinite',
		},
		keyframes: {
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