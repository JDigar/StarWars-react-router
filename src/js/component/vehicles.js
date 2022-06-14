import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";


const CardVehicles = ({name, id, model, manufacturer, cost_in_credits  }) => {    //Aqui recibo los props
	const { store, actions } = useContext(Context);
    




	
    return (
        <>
        
        <div className="card" >
			<div className="img-card"> <img className="img-fluid" src={store.img_vehicles[id]} /> </div>
            {/* <img className="img-fluid" src={store.image[id]} /> */}

			<div className="card-body">
			<h5 className="card-title"> <strong> {name} </strong></h5>
			<p className="card-text"> Model: {model} <br></br> Manufacturer: {manufacturer} <br></br> Cost in credits: {cost_in_credits}</p>
			
			<div className="cardButtons">
				<Link to={"/VehiclesDetails/"+id} >
               
				<span className="btn btn-danger"><strong>Learn more</strong></span>
				</Link>
				<a href="#" className="btn btn-danger btn-heart">♡</a>
			</div>
			
			</div>
		</div>


        </>
    )

};


export default CardVehicles;