import React, {useContext, useState} from "react";

import { useParams } from "react-router-dom";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";


const DetallesPlanetas = () => {
    const { store, actions } = useContext(Context);
    const [dataItem, setDataItem] = useState({})

    const {theid} = useParams();
    
    console.log("funciona");
    
    

    // useEffect(()=>{
    //     actions.getOnePeople(theid);
    // }, [])
    // console.log(store.personajes[theid].name);

return (
<>

<div className="row container-fluid cont justify-content-center pt-5 bg-detalles">
        <div className="col-6 container-fluid">

            <div className="img-detalles">  
            <img className="img-fluid pt-5" src={store.img_planets[theid]}/>
            </div>

        </div>


        <div className="col-6 text-center container-fluid">

        <div className="padt"></div>
        <h1>{store.planetas[theid]?.name}</h1> {/*Poner signo de interrogacion (?) justo antes de la propiedad que se está quejando cuando no reconoce una propiedad cuando hemos probado que funciona */}
        <p> 
        </p>
      

        </div>

        <br></br>

        <div className="lineSeparating"></div>

        <div className="row wards-details">
            <div className="col-2"><strong>Name</strong><br></br><span className="details2">{store.planetas[theid]?.name}</span></div>
            <div className="col-2"><strong>Rotation period</strong><br></br><span className="details2">{store.planetas[theid]?.rotation_period}</span></div>
            <div className="col-2"><strong>Orbital Period</strong><br></br><span className="details2">{store.planetas[theid]?.orbital_period}</span></div>
            <div className="col-2"><strong>Diameter</strong><br></br><span className="details2">{store.planetas[theid]?.diameter}</span></div>
            <div className="col-2"><strong>Gravity</strong><br></br><span className="details2">{store.planetas[theid]?.gravity}</span></div>
            <div className="col-2"><strong>Population</strong><br></br><span className="details2">{store.planetas[theid]?.epopulation}</span></div>
            
        </div>

        <div className="btn-home">
				<Link to={"/"}>
				<span className="btn btn-danger">Back Home</span>
				</Link>
		
			</div>
        
</div>



</>
)


}; 



export default DetallesPlanetas;