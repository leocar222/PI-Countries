import React from "react";
import './countryCard.css'

export default function CountryCard(props){

    return(
        <div className="countryCard">
            <h3>{props.id}</h3>
            <img src={props.image} alt={props.name} />
            <h3>{props.name}</h3>
            <h3>{props.continent}</h3>
        </div>
    )
    
}