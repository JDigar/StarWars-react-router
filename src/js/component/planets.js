import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";


const CardPlanets = ({name, id, rotation_period, population, diameter }) => {    //Aqui recibo los props
	const { store, actions } = useContext(Context);
    




	
    return (
        <>
        
        <div className="card" >
			<div className="img-card"> <img className="img-fluid" src={store.img_planets[id]} /> </div>
            {/* <img className="img-fluid" src={store.image[id]} /> */}

			<div className="card-body">
			<h5 className="card-title"> <strong> {name} </strong></h5>
			<p className="card-text"> Population: {population} <br></br> Rotation: {rotation_period} <br></br> Diameter: {diameter} </p>
			
			<div className="cardButtons">
				<Link to={"/planetsDetails/"+id} >
               
				<span className="btn btn-danger"><strong>Learn more</strong></span>
				</Link>
				<a href="#" className="btn btn-danger btn-heart">♡</a>
			</div>
			
			</div>
		</div>


        </>
    )

};


export default CardPlanets;