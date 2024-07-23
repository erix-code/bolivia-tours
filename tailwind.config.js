module.exports = {
  purge: [
	'./src/**/*.html',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
	  extend: {
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
			backgroundColor: theme =>({
				...theme('colors'),
				'primary': '#cc2d2d',
				'secondary': '#BA265F',
				'tertiary': '#913B7D',
			}),
			textColor:{
				'primary': '#cc2d2d',
				'secondary': '#BA265F',
				'tertiary': '#913B7D',
			},
			fontFamily: {
				Montserrat: ["Montserrat", "sans-serif"],
			 },
			
		},
	},
	variants: {
		width: ["responsive", "hover", "focus"],
		extend: {
	 },
  },
  plugins: [],
}
