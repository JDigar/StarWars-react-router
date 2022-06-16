import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";


const CardPlanets = ({name, id, rotation_period, population, diameter }) => {    //Aqui recibo los props
	const { store, actions } = useContext(Context);
    




	
    return (
        <>
        
        <div className="card" >
			<div className="img-card"> <img className="img-fluid" src={store.img_planets[id]} /> </div>

			<div className="card-body">
			<h5 className="card-title"> <strong> {name} </strong></h5>
			<p className="card-text"> Population: {population} <br></br> Rotation: {rotation_period} <br></br> Diameter: {diameter} </p>
			
			<div className="cardButtons">
				<Link to={"/planetsDetails/"+id} >
               
				<span className="btn btn-danger"><strong>Learn more</strong></span>
				</Link>
				<button onClick={()=>actions.addFavorit(name)} className="btn btn-danger btn-heart">♡</button>
			</div>
			
			</div>
		</div>


        </>
    )

};


export default CardPlanets;