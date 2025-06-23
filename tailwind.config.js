// tailwind.config.js
import typography from '@tailwindcss/typography';
import forms from '@tailwindcss/forms';

export default {
  content: [
    './src/**/*.{html,js,svelte,ts}',
    './src/styles/**/*.{css}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': 'var(--primary)',
        'accent': 'var(--accent)',
        'warning': 'var(--warning)',
        'error': 'var(--error)',
        'background': 'var(--background)',
        'surface': 'var(--surface)',
        'text-main': 'var(--text-main)',
        'text-soft': 'var(--text-soft)',
      },
      fontFamily: {
        heading: ['Manrope', 'sans-serif'],
        body: ['Inter', 'Open Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [
    typography,
    forms,
  ],
};