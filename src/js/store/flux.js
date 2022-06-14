const getState = ({ getStore, getActions, setStore, theid }) => {
	return {
		store: {

			image: [
				"https://wallpapers.com/images/high/skywalker-against-sith-lords-vzdy35bsatai9s61.jpg",
				"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ojos-rojos-c3po-star-wars-1566913065.jpg",
				"https://s1.eestatic.com/2017/06/29/cultura/cine/star_wars-george_lucas-peliculas_227488145_37888495_1706x960.jpg",
				"https://esports.as.com/2022/04/08/fortnite/Darth-Vader_1563153683_955414_1024x576.jpg",
				"https://img.europapress.es/fotoweb/fotonoticia_20210718132543_420.jpg",
				"https://i0.wp.com/www.kakuchopurei.com/wp-content/uploads/2022/05/starwarsOWK_01.jpg?fit=1541%2C798&ssl=1",
				"https://lumiere-a.akamaihd.net/v1/images/databank_berulars_01_169_68101518.jpeg?region=0%2C49%2C1560%2C780",
				"https://static.turbosquid.com/Preview/2020/11/06__17_03_12/Product1.jpgAC5FE421-A3B4-4DD0-B811-AEAA5642D041Large.jpg",
				"https://lumiere-a.akamaihd.net/v1/images/image_606ff7f7.jpeg?region=0%2C0%2C1560%2C780",
				"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/obi-wan-kenobi-serie-disney-poster-1651689693.jpg?crop=1.00xw:0.339xh;0,0&resize=1200:*",

			],
			img_planets: [
				"https://img.unocero.com/2019/08/google-maps-star-wars.jpg",
				"https://mmobits.com/wp-content/uploads/2020/02/alderaan-sh-achieve-header-1024x507.png",
				"https://i.pinimg.com/originals/62/2a/60/622a607e406f0b409ab396307962f6ed.jpg",
				"https://pm1.narvii.com/6592/17fa9c214dad4ac1671fb301286aa9095e3a5dab_hq.jpg",
				"https://lumiere-a.akamaihd.net/v1/images/Dagobah_890df592.jpeg?region=391%2C39%2C830%2C467",
				"https://cdn.atomix.vg/wp-content/uploads/2016/06/BESPIN.jpg",


			],

			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			personajes: [],
			planetas: [],
			vehículos: [],
			dataItem: {},
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			getOnePeople: (theid) => {
				fetch('https://swapi.dev/api/people' + theid)
				.then((response)=>response.json())
				.then(data => setStore({dataItem: data.results.properties}))
			},
			obtenerPlanetas: () => {
				fetch('https://swapi.dev/api/planets')
				.then((response)=>response.json())
				.then(data => setStore({planetas: data.results}))
				// .then(data => console.log(data.results));
				
			},
			obtenerPersonajes: () => {
				fetch('https://swapi.dev/api/people')
				.then((response)=>response.json())
				.then(data => setStore({personajes: data.results}))
				// .then(data => console.log(data.results))
				
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

			

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
