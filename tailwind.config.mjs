/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
	  extend: {
		animation: {
		  marquee: 'marquee 50s linear infinite',
		  rotate: 'spin 10s linear infinite',
		},
		keyframes: {
		  marquee: {
			'0%': { transform: 'translateX(0%)' },
			'100%': { transform: 'translateX(-100%)' },
		  },
		  spin: {
			'0%': { transform: 'rotate(0deg)' },
			'100%': { transform: 'rotate(360deg)' },
		  },
		},
	  },
	},
	plugins: [],
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