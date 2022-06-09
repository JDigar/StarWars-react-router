import React from "react";
import Detalle from "./../component/detalle.js"
const Detalles = () => {

return (
<>
<div className="row container-fluid cont justify-content-center pt-5">
        <div className="col-6 container-fluid">

            <div className="img-detalles"></div>

        </div>


        <div className="col-6 text-center container-fluid">

        <Detalle/>

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