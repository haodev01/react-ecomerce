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
      },
    },
  },
  plugins: [],
};
