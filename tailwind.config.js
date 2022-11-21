/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,jsx,tsx}'],
    theme: {
        extend: {
            flex: {
                numbers: '1 1 33.333%',
            },
            gridAutoRows: {
                numbers: 'minmax(60px, auto)',
            },
        },
    },
    plugins: [],
};
