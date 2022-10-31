import React from "react";
import { Link } from "react-router-dom";

export default function Nav(){
    return(
        <div>
            <Link to={'/home'}>Home</Link>
            <Link to={'/countries'}>Countries</Link>
        </div>
    )
}