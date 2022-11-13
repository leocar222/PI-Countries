import React from "react";
import './countryCard.css'
import { Link } from "react-router-dom";

export default function CountryCard(props){

    return(
        <div className="countryCard">
            {/* <h3>{props.id}</h3> */}
            <img className="banderas" src={props.image} alt={props.name} />
            <Link   to={`/countries/${props.id}`}>
                <h2 className="link">
                {props.name}
                </h2>
            </Link>
            <h3>{props.continent}</h3>
        </div>
    )
    
}