const getState = ({ getStore, getActions, setStore, theid }) => {
	return {
		store: {
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
