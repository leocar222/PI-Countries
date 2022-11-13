import React from "react";
// import { useState } from "react";

export default function BotonOrdenar(props){
// const [ordenamiento,setOrdenamiento]=useState('')
if(props.order==='asc'){
    // setOrdenamiento('Ascendente')
    return(
        <div>

            <button onClick={props.onClick}>Ordenar Ascendente</button>
        </div>
    )
}
else if(props.order==='dsc'){
    return(
        <div>

            <button onClick={props.onClick}>Ordenar Descendente</button>
        </div>
    )
}
else if(props.order==='ascPop'){
    return(
        <div>

            <button onClick={props.onClick}>Ordenar Poblacion Asc</button>
        </div>
    )
}
else if(props.order==='dscPop'){
    return(
        <div>

            <button onClick={props.onClick}>Ordenar Poblacion Desc.</button>
        </div>
    )
}
}