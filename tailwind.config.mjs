/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			'white': '#FFFFFF',
			'dark-green': '#1F3832',
			'glamping-light-green': '#C8E8C3',
			'primary-light': '##F3EDDF',
			'hover-color': '#8C8C8C',
		  },
	  extend: {
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