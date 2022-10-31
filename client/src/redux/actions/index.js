export const GET_COUNTRIES='GET_COUNTRIES'
export const FILTER_COUNTRIES='FILTER_COUNTRIES'
export const FILTER_COUNTRIES_BY_NAME='FILTER_COUNTRIES_BY_NAME'

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
    console.log(payload)
    return{
        
        type:FILTER_COUNTRIES,
        payload
    }
}

export const filterCountriesByName=(payload)=>{
    console.log(payload);
    return{
        type:FILTER_COUNTRIES_BY_NAME,
        payload
    }
}
