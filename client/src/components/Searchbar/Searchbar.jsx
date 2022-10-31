import React from "react";
import { mapStateToProps } from "../Countries/Countries";

export default function Searchbar(props){
    // return(
    //     <div>
    //         <input type="text" name={props.name} onChange={props.handleChange} />
    //         <button type="submit" onClick={props.handleClick}></button>
    //     </div>
    // )

    return(
        <div>
            {/* <form > */}
                {/* <select name={props.name} onChange={props.handleChange} id=""> */}
                {/* <select  id=`${props.name}` onChange={props.handleChange}> */}
                    {/* <option value="">--Elija un pais-</option> */}
                    {/* <option >Argentina</option> */}
                   
                {/* </select>     */}
                
            {/* </form> */}
            {/* <form onSubmit={props.handleChange}>
            <input type='text' name={props.name} ></input>
            <button type='submit' >Buscar</button>

            </form> */}
            <input type="text"  name={props.name} onChange={props.handleChange} />
        </div>        
)
}