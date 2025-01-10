/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1677ff',
        222: '#222222',
        f0f: '#F0F1F2',
        '007': '#007AFF',
        8080: '#808080',
        '222-10': 'rgba(34, 34, 34, 0.1)',
        '222-40': 'rgba(34, 34, 34, 0.4)',
        '222-80': 'rgba(34, 34, 34, 0.9)',
        f97: '#f97316',
      },
    },
  },
  plugins: [],
};
