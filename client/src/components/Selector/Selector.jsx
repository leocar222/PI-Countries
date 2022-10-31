import React from "react";

export default function Selector(props){
        return(
                <div>
                    <form >
                        <select name={props.name} onChange={props.handleChange} id="">
                        {/* <select  id=`${props.name}` onChange={props.handleChange}> */}
                            <option value="">--Elija un continente--</option>
                            <option >Asia</option>
                            <option >North America</option>
                            <option >South America</option>
                            <option >Oceania</option> 
                            <option >Antarctica</option>
                            <option >Europe</option>
                            <option >Africa</option>
                        </select>    
                        
                    </form>
                </div>        
    )
}