import React from "react";
import { Component } from "react";

export default class Landing extends Component{

    componentDidMount(){
        fetch('http://localhost:3001/countries',
        { method: 'POST',
            //    headers: myHeaders,
               mode: 'cors',
               cache: 'default' });
        
            }

    render(){
        return(
            <div>
                <h1>Landing Page</h1>
            </div>
        )

    }
}


