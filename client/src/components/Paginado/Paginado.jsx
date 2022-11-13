import React from "react";
import './paginado.css'

export default function Paginado({pagina,countriesPerPage,allCountries,paginado,handleCountriesPerPage,anterior,siguiente}){
    const pageNumber=[];
    for(let i=1; i<=Math.ceil(allCountries/countriesPerPage);i++){
        pageNumber.push(i);
    }
    return(
        <div >
        <button onClick={anterior}>pag. anterior</button>
       
        <nav>


            <ul >
                {pageNumber&&pageNumber.map(num=>(
                    <li className="paginado" key={num}>
                        <button onClick={()=>{
                            handleCountriesPerPage(num)
                            paginado(num)
                            }} >{num}</button>
                    </li>
                ))}
            </ul>
        </nav>
        <button onClick={siguiente}>pag. siguiente</button>
        </div>
    )

}