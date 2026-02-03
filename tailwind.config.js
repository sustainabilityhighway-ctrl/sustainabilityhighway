/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#041612',
                    light: '#08201B',
                    surface: '#122B26',
                },
                accent: {
                    DEFAULT: '#C5A059',
                    hover: '#B08E4B',
                    light: '#F4E2B2',
                },
                navy: {
                    DEFAULT: '#020C0A',
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                display: ['Outfit', 'sans-serif'],
                montserrat: ['Montserrat', 'sans-serif'],
            },
            backdropBlur: {
                xs: '2px',
            },
        },
    },
    plugins: [],
}
