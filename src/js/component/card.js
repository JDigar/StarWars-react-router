import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";


const Card = ({name, height, id, gender, eye_color}) => {    //Aqui recibo los props
	const { store, actions } = useContext(Context);




	
    return (
        <>
        
        <div className="card" >
			<div className="img-card"> <img className="img-fluid" src={store.image[id]} /> </div>

			<div className="card-body">
			<h5 className="card-title"> <strong>{name}</strong></h5>
			<p className="card-text">Height: {height} <br></br> Gender: {gender} <br></br> Eye color: {eye_color} </p>
			
			<div className="cardButtons">
				<Link to={"/detalles/"+ id}>
				<span className="btn btn-danger"><strong>Learn more</strong></span>
				</Link>
				<a href="#" className="btn btn-danger btn-heart">♡</a>
			</div>
			
			</div>
		</div>


        </>
    )

};


export default Card;