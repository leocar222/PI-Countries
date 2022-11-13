export const GET_COUNTRIES='GET_COUNTRIES'
export const FILTER_COUNTRIES='FILTER_COUNTRIES'
export const FILTER_COUNTRIES_BY_ACTIVITY='FILTER_COUNTRIES_BY_ACTIVITY';
export const ORDENAR_ASC='ORDENAR_ASC'
export const ORDENAR_DSC='ORDENAR_DSC'
export const SEARCH_COUNTRY='SEARCH_COUNTRY'
export const GET_COUNTRY_DETAIL='GET_COUNTRY_DETAIL'
export const CREATE_ACTIVITY='CREATE_ACTIVITY'
export const ORDENAR_POP_ASC='ORDENAR_POP_ASC'
export const ORDENAR_POP_DSC='ORDENAR_POP_DSC'

export const getCountries = () => {
    return async function(dispatch){
        return await fetch('http://localhost:3001/countries')
        .then(response=>response.json())
        .then(res=>{
            dispatch({
                type:GET_COUNTRIES,
                payload:res,
            })
        })
    }
};

export const  filterCountries= (payload)=>{
    return{
        type:FILTER_COUNTRIES,
        payload:payload
    }
}

export const  filterCountriesByActivity= (payload)=>{
    console.log(payload);
    return{
        type:FILTER_COUNTRIES_BY_ACTIVITY,
        payload:payload
    }
}

export const searchCountry=(country)=>{
    return async function(dispatch){
        return await fetch(`http://localhost:3001/countries/?name=${country}`)
        .then(response=>response.json())
        .then(res=>{
            dispatch({
                type:SEARCH_COUNTRY,
                payload:res,
            })
        })
        .catch(error=>console.log(error))
    }


}

export const orderCountries=()=>{
    return{
        type:ORDENAR_ASC,
    }

}

export const orderCountriesDesc=()=>{
    return{
        type:ORDENAR_DSC,
    }

}

export const orderCountriesPopAsc=()=>{
    return{
        type:ORDENAR_POP_ASC,
    }
}
export const orderCountriesPopDsc=()=>{
    return{
        type:ORDENAR_POP_DSC,
    }
}
export const getCountryDetail = (id) => {
    console.log('detail');
    return async function(dispatch){
        return await fetch(`http://localhost:3001/countries/${id}`)
        .then(response=>response.json())
        .then(res=>{
            dispatch({
                type:GET_COUNTRY_DETAIL,
                payload:res,
            })
        })
    }
};

export const createActivity=(input)=>{
    return async function(dispatch){
        return await fetch('http://localhost:3001/activities',
        {
            method:'POST',
            body:JSON.stringify(input),
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
              }
        }
        )

    }
}

