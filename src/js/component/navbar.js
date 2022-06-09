import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (

		<nav className="navbar bg-light">
  <div className="container-fluid myCont">
   
    
			<Link to="/">
			<div className="logoSW"></div>
			</Link>
			
			<div className="dropdown">
			<button className="btn btn-primary dropdown-toggle btn-nav" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
			Favorites
			</button>
			<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
			<li><a className="dropdown-item" href="#">Action</a></li>
			<li><a className="dropdown-item" href="#">Another action</a></li>
			<li><a className="dropdown-item" href="#">Something else here</a></li>
			</ul>
			</div>
   
  </div>
</nav>
	);
};
