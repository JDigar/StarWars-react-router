import React, {useContext}  from "react";
import { Context } from "../store/appContext";
import Card from "./../component/card.js"
import "../../styles/home.css";
import Subtitle from "./../component/subtittleHome.js"

export const Home = () => {
	const {store} = useContext(Context);
	
	return (
<>
<div className="padt"></div>
<Subtitle title="Personajes"/>

	<div className="row row-characters cont">
	
		{store.personajes.map((item) => <Card name={item.name} height={item.height} />)}
		
	</div>


	<Subtitle title="Planetas"/>



	<div className="row row-characters cont">
	
		<Card />
		<Card />
		<Card />
		<Card />
		<Card />
		<Card />
		<Card />
	
		
	</div>
	

	<Subtitle title="Vehículos"/>


	<div className="row row-characters cont">
	
		<Card />
		<Card />
		<Card />
		<Card />
		<Card />
		<Card />
		<Card />
	
		
	</div>
	<br></br>
	</>
);
} 
