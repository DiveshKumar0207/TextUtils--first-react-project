import withMT from '@material-tailwind/react/utils/withMT';

export default withMT({
  darkMode: 'media',
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    'node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}',
    'node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
});