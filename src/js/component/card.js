import React, {useContext}  from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const Card = () => {
	const {store, actions} = useContext(Context);
	console.log(store.personajes);
    return (
        <>
        
        <div className="card" >
			<div className="img-card">400x200px</div>
			<div className="card-body">
			<h5 className="card-title">{store.personajes.map((item) => item.name[6])}</h5>
			<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
			
			<div className="cardButtons">
				<Link to="/detalles">
				<span className="btn btn-primary">Learn more!</span>
				</Link>
				<a href="#" className="btn btn-danger btn-heart">♡</a>
			</div>
			
			</div>
		</div>


        </>
    )

};


export default Card;