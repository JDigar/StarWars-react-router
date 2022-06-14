import React, {useContext, useState} from "react";

import { useParams } from "react-router-dom";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";


const Detalles = () => {
    const { store, actions } = useContext(Context);
    const [dataItem, setDataItem] = useState({})

    const {theid} = useParams();
   
    
    

    // useEffect(()=>{
    //     actions.getOnePeople(theid);
    // }, [])
    // console.log(store.personajes[theid].name);

return (
<>

<div className="row container-fluid cont justify-content-center pt-5 bg-detalles">
        <div className="col-6 container-fluid">

            <div className="img-detalles">  
            <img className="img-fluid pt-5" src={store.image[theid]}/>
            </div>

        </div>


        <div className="col-6 text-center container-fluid">

        <div className="padt"></div>
        <h1>{store.personajes[theid]?.name}</h1> {/*Poner signo de interrogacion (?) justo antes de la propiedad que se está quejando cuando no reconoce una propiedad cuando hemos probado que funciona */}
        <p> 
        </p>
      

        </div>

        <br></br>

        <div className="lineSeparating"></div>

        <div className="row wards-details">
            <div className="col-2"><strong>Name</strong><br></br><span className="details2">{store.personajes[theid]?.name}</span></div>
            <div className="col-2"><strong>Birth Year</strong><br></br><span className="details2">{store.personajes[theid]?.birth_year}</span></div>
            <div className="col-2"><strong>Gender</strong><br></br><span className="details2">{store.personajes[theid]?.gender}</span></div>
            <div className="col-2"><strong>Height</strong><br></br><span className="details2">{store.personajes[theid]?.height}</span></div>
            <div className="col-2"><strong>Skin Color</strong><br></br><span className="details2">{store.personajes[theid]?.skin_color}</span></div>
            <div className="col-2"><strong>Eye Color</strong><br></br><span className="details2">{store.personajes[theid]?.eye_color}</span></div>
            
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



export default Detalles;