import React  from "react";
import CountryCard from "../CountryCard/CountryCard";
import {connect} from 'react-redux';
import './countries.css'



 function Countries(props){
    return(        
        <div className="countriesContainer">
        
        {
            props.paises?.map(el=>
                <CountryCard key={el.ID} id={el.ID} image={el.flagImage} name={el.name} continent={el.continent}></CountryCard>
                )
            }
        </div>
    )
}
export const mapStateToProps = (state) => {
    return{
        countries:state.countries,
        countriesFilter: state.countriesFilter,
    }
}


  export default connect(mapStateToProps, null)(Countries);