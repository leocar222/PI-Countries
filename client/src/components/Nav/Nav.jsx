import React from "react";
import { Link } from "react-router-dom";
import * as actions from "./../../redux/actions"
import { useDispatch } from "react-redux";
import './Nav.css'

export default function Nav(){
    const dispatch=useDispatch();
    return(
        <div className="navBar">
            <button className="botonHome" 
            onClick={(e)=>
            dispatch(actions.getCountries())}>
            <Link to={'/home'}>Home</Link>
            </button>
        </div>
    )
}