import { GET_COUNTRIES, FILTER_COUNTRIES } from "../actions";


const intialState={
  countries:[],
  countriesFiltrados:[],
  countryDetail:{},

}


const rootReducer = (state =intialState, action) => {
  switch (action.type) {
    case GET_COUNTRIES:
      // console.log('maver')
      // console.log(state.countries)
      return{
        ...state,
        countries:action.payload
      }
    case FILTER_COUNTRIES:
      // console.log(action.payload[Object.keys(action.payload)[0]])
      // console.log(Object.keys(action.payload)[0])
      const clave=Object.keys(action.payload)[0]
      const valor=action.payload[Object.keys(action.payload)[0]]
      // console.log(state.countries[0][clave][0])
      // console.log(state.countries[0][clave])
      const {continent,name}=action.payload
      console.log(continent)
      console.log(name);
      if(continent){
        console.log('es array')
        return{
          ...state,
          countriesFiltrados:state.countries.filter(el=>el[clave][0]===valor)
      }}
        return{
          ...state,
         countriesFiltrados:state.countries.filter(el=>el[clave]===valor)
      }
    // case FILTER_COUNTRIES_BY_NAME:
    //   return{
    //     ...state,
    //     countriesFiltrados:state.countries.filter(el=>el.name===action.payload)
    //   }  
    default:
      return state;
  }

  };
  
  export default rootReducer;