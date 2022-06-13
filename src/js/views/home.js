import React, {useContext}  from "react";
import { Context } from "../store/appContext";
import Card from "./../component/card.js"
import "../../styles/home.css";
import Subtitle from "./../component/subtittleHome.js"

export const Home = (props) => {
	const {store} = useContext(Context);
	
	return (
<>
<div className="padt"></div>
<Subtitle title="Personajes"/>

	<div className="row row-characters cont">
	
		{store.personajes.map((item, index) => <Card key={index} name={item.name} id={index+1} height={item.height} gender={item.gender} eye_color={item.eye_color} />)}
		
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
