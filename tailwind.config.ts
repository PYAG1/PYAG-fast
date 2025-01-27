import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	colors: {
  		primary: {
  			'50': '#f1f2ff',
  			'100': '#e5e5ff',
  			'200': '#ced0ff',
  			'300': '#a7a7ff',
  			'400': '#7c76ff',
  			'500': '#523fff',
  			'600': '#3c18ff',
  			'700': '#2c07fa',
  			'800': '#2405d2',
  			'900': '#1f06ac',
  			'950': '#0a0057'
  		},
  		gray: {
  			'50': '#f7f7f7',
  			'100': '#f0f0f0',
  			'200': '#e3e3e3',
  			'300': '#d1d1d1',
  			'400': '#c2c2c2',
  			'500': '#aaaaaa',
  			'600': '#969696',
  			'700': '#818181',
  			'800': '#6a6a6a',
  			'900': '#585858',
  			'950': '#333333'
  		},
  		blue: {
  			'50': '#e8f3ff',
  			'100': '#d5e9ff',
  			'200': '#b3d5ff',
  			'300': '#85b7ff',
  			'400': '#568aff',
  			'500': '#2f5dff',
  			'600': '#0c2bff',
  			'700': '#001eff',
  			'800': '#0620cd',
  			'900': '#10279f',
  			'950': '#0a155c'
  		},
  		primary2: '#05B1B9',
  		orange: '#EC8433'
  	},
  	extend: {
  		backgroundImage: {
  			'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
  			'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
