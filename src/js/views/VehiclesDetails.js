import React, {useContext, useState} from "react";

import { useParams } from "react-router-dom";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";


const DetallesVehiculos = () => {
    const { store, actions } = useContext(Context);
    const [dataItem, setDataItem] = useState({})

    const {theid} = useParams();
    
    console.log("funciona detalles vehiculos");
    
    

    // useEffect(()=>{
    //     actions.getOnePeople(theid);
    // }, [])
    // console.log(store.personajes[theid].name);

return (
<>

<div className="row container-fluid cont justify-content-center pt-5 bg-detalles">
        <div className="col-6 container-fluid">

            <div className="img-detalles">  
            <img className="img-fluid pt-5" src={store.img_vehicles[theid]}/>
            </div>

        </div>


        <div className="col-6 text-center container-fluid">

        <div className="padt"></div>
        <h1>{store.vehiculos[theid]?.name}</h1> {/*Poner signo de interrogacion (?) justo antes de la propiedad que se está quejando cuando no reconoce una propiedad cuando hemos probado que funciona */}
        <p> 
        </p>
      

        </div>

        <br></br>

        <div className="lineSeparating"></div>

        <div className="row wards-details">
            <div className="col-2"><strong>Name</strong><br></br><span className="details2">{store.vehiculos[theid]?.name}</span></div>
            <div className="col-2"><strong>Model</strong><br></br><span className="details2">{store.vehiculos[theid]?.model}</span></div>
            <div className="col-2"><strong>Manufacturer</strong><br></br><span className="details2">{store.vehiculos[theid]?.manufacturer}</span></div>
            <div className="col-2"><strong>Cost in credits</strong><br></br><span className="details2">{store.vehiculos[theid]?.cost_in_credits}</span></div>
            <div className="col-2"><strong>Max atmosphering speed</strong><br></br><span className="details2">{store.vehiculos[theid]?.max_atmosphering_speed}</span></div>
            <div className="col-2"><strong>Passengers</strong><br></br><span className="details2">{store.vehiculos[theid]?.passengers}</span></div>
            
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



export default DetallesVehiculos;