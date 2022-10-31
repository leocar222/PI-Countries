import React , {useEffect} from "react";
import { useDispatch } from "react-redux";
import CountryCard from "../CountryCard/CountryCard";
import {connect} from 'react-redux';
import * as actions from "./../../redux/actions";



 function Countries(props){
    const dispatch=useDispatch();
    useEffect(()=>dispatch(actions.getCountries()),[])
    return(        
        <div className="home">
        
        {
            props.countries?.map(el=>
                <CountryCard key={el.ID} id={el.ID} image={el.flagImage} name={el.name} continent={el.continent}></CountryCard>
                )
            }
        </div>
    )
}

export const mapStateToProps = (state) => {
    return{
        countries: state.countries,
    }
}

export const mapDispatchToProps = (dispatch) => {
    return{
      getCountries:async()=>await dispatch(actions.getCountries()),
    }
   }

  export default connect(mapStateToProps, mapDispatchToProps)(Countries);