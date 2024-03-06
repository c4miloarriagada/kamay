import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    backgroundImage: {
      'hero-image':
        "url('https://res.cloudinary.com/dwtkwakbc/image/upload/v1709694114/download_leeiu2.png')",
    },
    extend: {
      colors: {
        'primary-base': 'var(--primary-base)',
        'primary-base-10': 'var(--primary-base-10)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0', display: 'none' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 1s ',
        fadeOut: 'fadeOut 0.8s forwards',
      },
    },
  },
  plugins: [],
};
export default config;
