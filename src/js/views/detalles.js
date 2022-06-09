import React from "react";
import Detalle from "./../component/detalle.js"
const Detalles = () => {

return (
<>
<div className="row m-2 container-fluid">
        <div className="col-6 container-fluid">

            <div className="img-detalles"></div>

        </div>


        <div className="col-6 text-center container-fluid">

        <Detalle/>

        </div>

        <br></br>

        <div className="lineSeparating"></div>
        
</div>


</>
)


}; 



export default Detalles;