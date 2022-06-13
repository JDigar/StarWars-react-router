import React from "react";
import propTypes from "prop-types";
import { useEffect, useContext } from "react/cjs/react.production.min";
import { useParams } from "react-router";
import { Context } from "../store/appContext.js";


const Detalles = () => {
    const { store, actions } = useContext(Context);
    const [dataItem, setDataItem] = useState({})

    const {theid} = useParams();
    

    useEffect(()=>{
        actions.getOnePeople(theid);
    }, [])

return (
<>
<div className="row container-fluid cont justify-content-center pt-5">
        <div className="col-6 container-fluid">

            <div className="img-detalles"></div>

        </div>


        <div className="col-6 text-center container-fluid">

        <div className="padt"></div>
        <h1>Esto es el título {store.dataItem.name} </h1>
        <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
      

        </div>

        <br></br>

        <div className="lineSeparating"></div>

        <div className="row">
            <div className="col-2">Name</div>
            <div className="col-2">Birth Year</div>
            <div className="col-2">Gender</div>
            <div className="col-2">Height</div>
            <div className="col-2">Skin Color</div>
            <div className="col-2">Eye Color</div>
            
        </div>
        
</div>


</>
)


}; 



export default Detalles;