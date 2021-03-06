import React, {useContext}  from "react";
import { Context } from "../store/appContext";
import Card from "./../component/card.js"
import CardPlanets from "../component/planets.js";
import CardVehicles from "../component/vehicles.js"
import "../../styles/home.css";
import Subtitle from "./../component/subtittleHome.js"

export const Home = (props) => {
	const {store} = useContext(Context);
	// console.log(store.planetas);
	
	return (
<>
<div className="padt"></div>
<Subtitle title="Characters"/>

	<div className="row row-characters cont">
	
		{store.personajes.map((item, index) => <Card key={index} name={item.name} id={index} height={item.height} gender={item.gender} eye_color={item.eye_color} />)}
		
	</div>



	<Subtitle title="Planets"/>

	<div className="row row-characters cont">
	
		{store.planetas.map((item, index) => <CardPlanets key={index} name={item.name} id={index} population={item.population} diameter={item.diameter} rotation_period={item.rotation_period} />)}
		
	</div>

	

	<Subtitle title="Vehicles"/>


	<div className="row row-characters cont">
	
		{store.vehiculos.map((item, index) => <CardVehicles key={index} name={item.name} model={item.model} manufacturer={item.manufacturer} cost_in_credits={item.cost_in_credits} id={index} />)}
		 
	</div>
	<br></br>
	</>
);
} 
