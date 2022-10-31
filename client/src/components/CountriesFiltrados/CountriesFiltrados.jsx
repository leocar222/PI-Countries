// import React , {useEffect} from "react";
// import { useDispatch } from "react-redux";
import CountryCard from "../CountryCard/CountryCard";
import {connect} from 'react-redux';
import * as actions from "./../../redux/actions";
import { Component } from "react";

export class CountriesFiltrados extends Component{

   componentDidMount(){
    return this.props.filterCountries(this.props.despacho)
   } 
   render(){
    return(        
                <div className="home">
                
                {
                    this.props.countriesFiltrados?.map(el=>
                        
                        <CountryCard key={el.ID}  id={el.ID} image={el.flagImage} name={el.name} continent={el.continent}></CountryCard>
                        )
                    }
                </div>
            )
   }
}
export const mapStateToProps = (state) => {
    return{
        countriesFiltrados:state.countriesFiltrados
    }
}

export const mapDispatchToProps = (dispatch) => {
    return{
      filterCountries:async (payload)=>await dispatch(actions.filterCountries(payload))
    }
   }

  export default connect(mapStateToProps, mapDispatchToProps)(CountriesFiltrados);