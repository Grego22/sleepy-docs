/** @type {import('tailwindcss').Config} */
const { skeleton } = require('@skeletonlabs/tw-plugin');

module.exports = {
  content: [
    './src/**/*.{html,js,svelte,ts}', // Include your app's files
    './node_modules/@skeletonlabs/skeleton/**/*.{html,js,svelte,ts}', // Include Skeleton UI
  ],
  theme: {
    extend: {},
  },
  plugins: [
    skeleton(), // Add Skeleton's Tailwind plugin
  ],
};
