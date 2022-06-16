import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	console.log(store.likes);
	
	
	return (

		<nav className="navbar bg-light">
  <div className="container-fluid myCont">
   
    
			<Link to="/">
			<div className="logoSW"></div>
			</Link>
			
			<div className="dropdown">
			<button className="btn btn-danger dropdown-toggle btn-nav" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
			Favorites
			</button>
			<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
				{store.likes.map((item, index)=><li key={index}>{item} <span onClick={()=>actions.borrar(index)}> <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <line x1="18" y1="6" x2="6" y2="18" />
  <line x1="6" y1="6" x2="18" y2="18" />
</svg></span> </li>)}
				
			</ul>
			</div>
   
  </div>
</nav>
	);
};
