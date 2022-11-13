import React from "react";

export default function CountrySelected(props){
    console.log('anda');
    const pais=props.pais
    return(
        <div>
            <h3>{props.pais}</h3>
            <button onClick={()=>props.delete(pais)}>X</button>
        </div>
    )
}