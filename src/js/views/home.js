import React from "react";
import { Link } from "react-router-dom";
import Card from "./../component/card.js"
import "../../styles/home.css";
import Subtitle from "./../component/subtittleHome.js"

export const Home = () => (
<>
<div className="padt"></div>
<Subtitle title="Personajes"/>

	<div className="row row-characters cont">
	
		<Card />
		<Card />
		<Card />
		<Card />
		<Card />
		<Card />
		<Card />
	
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
