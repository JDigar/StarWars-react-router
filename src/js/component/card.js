import React from "react";
import { Link } from "react-router-dom";

const Card = () => {
    return (
        <>
        
        <div className="card" >
			<div className="img-card">400x200px</div>
			<div className="card-body">
			<h5 className="card-title">Card title</h5>
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