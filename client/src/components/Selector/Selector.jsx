import React, {useState} from "react";


export default function Selector(props){
    let i=1;
    const [option, setOption] = useState("");
        return(
                <div>
                     <form    onSubmit={  e => {
                             e.preventDefault()
                             props.onSelect(option);
                        }}>
                        <select name={props.name}
                        onChange={e => setOption(e.target.value)}
                        value={option} 
                        id="">
                            <option value="all">all</option>
                            
                          {props.opciones.map(e=><option key={i++}>{e}</option>)}
                        </select>
                        <button type="submit">{props.filtrado}</button>
                     </form> 
                </div>        
    )
}

