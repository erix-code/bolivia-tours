const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
    relative: true,
    content: [
        './index.html',
    ],
    purge: [
        './src/**/*.html',
    ],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        extend: {
            textShadow: {
                sm: '0 1px 2px var(--tw-shadow-color)',
                DEFAULT: '0 2px 4px var(--tw-shadow-color)',
                lg: '0 8px 16px var(--tw-shadow-color)',
            },
            backgroundImage: {
                'sanFrancisco': "url('../img/sanFrancisco.jpg')",
                'sanFranciscoDesktop': "url('../img/sanFranciscoDesktop.jpg')",
                'yosemite': "url('../img/yosemite.jpg')",
                'LA': "url('../img/LA.jpg')",
                'seattle': "url('../img/seattle.jpg')",
                'new_york': "url('../img/new_york.jpg')",
                'norway': "url('../img/norway.jpg')",
                'sydney': "url('../img/sydney.jpg')",
                'miami': "url('../img/miami.jpg')",
                'switzerland': "url('../img/switzerland.jpg')",
                'bali': "url('../img/bali.jpg')",
                'chicago': "url('../img/chicago.jpg')",
                'europe': "url('../img/europe.jpg')",
                'iceland': "url('../img/iceland.jpg')",
                'la_paz': "url('../img/bolivia/Cards/vista-a-la-paz.jpg')",
                'isla_del_sol': "url('../img/bolivia/Cards/isla-del-sol.jpg')",
                'caption': "url('../img/bolivia/Cards/caption.jpg')",
                'station-center': "url('../img/bolivia/Cards/estacion-central-linea.jpg')",
                'titicaca': "url('../img/bolivia/Cards/lago-titicaca.jpg')",
                'lake': "url('../img/bolivia/Cards/linda-y-especial-para.jpg')",
            },
            backgroundColor: theme => ({
                ...theme('colors'),
                'primary': '#cc2d2d',
                'secondary': '#BA265F',
                'tertiary': '#913B7D',
            }),
            textColor: {
                'primary': '#cc2d2d',
                'primary-200': '#e89797',
                'primary-500': '#bc2929',
                'primary-600': '#bc2929',
                'primary-800': '#3f0e0e',
                'primary-900': '#150505',
                'secondary': '#BA265F',
                'tertiary': '#913B7D',
            },
            fontFamily: {
                Montserrat: ["Montserrat", "sans-serif"],
                Koulen: ["Koulen"],

            },
            borderColor: {
                'primary': '#cc2d2d',
                'secondary': '#BA265F',
                'tertiary': '#913B7D',
            },
            size: {
                "120": "28rem",
                "128": "32rem"
            }
        },
    },
    variants: {
        width: ["responsive", "hover", "focus"],
        extend: {},
    },
    plugins: [
        plugin(function ({ matchUtilities, theme }) {
            matchUtilities(
                {
                    'text-shadow': (value) => ({
                        textShadow: value,
                    }),
                },
                { values: theme('textShadow') }
            )
        }),
    ],
}
