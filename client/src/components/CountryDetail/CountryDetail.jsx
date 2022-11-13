import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import * as actions from "./../../redux/actions"
import './countryDetail.css'

export default function CountryDetail(){
    let dispatch=useDispatch();
    let detail=useSelector(state=>state.countryDetail)
    let params=useParams()
    React.useEffect(()=>{
        dispatch(actions.getCountryDetail(params.id))
      },[dispatch])

    return(
        <div className="contenedorPrincipal">
            <div className="bandera">
                <img src={detail.flagImage} alt={detail.name}  />
                <h1>{detail.name}</h1>
            </div>
            <div className="detalles">
                <div className="detallePais">
                    <h2>Información de {detail.name}</h2>
                    <p>ID: {detail.ID}</p>
                    <p>Continente: {detail.continent}</p>
                    <p>Capital: {detail.capital}</p>
                    <p>Subregión: {detail.subregion}</p>
                    <p>Área:{detail.area} km2</p>
                    <p>Población {detail.population} habitantes</p>
                </div>
                <div className="contenedorActividades">  
                <h2 className="tituloActividad">Actividades que pueden realizarse</h2>  
                    {detail.activities?.map(e=>
                        <div className="detallesActividad" >
                            <p>Actividad: {e.name}</p>
                            <p>Dificultad: {e.difficulty}</p>
                            <p>Duración: {e.duration}</p>
                            <p>Temporada: {e.season}</p>
                        </div>
                    )}
                </div>           
            </div>
            
        </div>
    )
}