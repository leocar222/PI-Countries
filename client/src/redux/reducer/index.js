import { GET_COUNTRIES, FILTER_COUNTRIES,SEARCH_COUNTRY, ORDENAR_ASC,ORDENAR_DSC,
  ORDENAR_POP_ASC,ORDENAR_POP_DSC,GET_COUNTRY_DETAIL,FILTER_COUNTRIES_BY_ACTIVITY} from "../actions";


const intialState={
  countries:[],
  countriesFilter:[],
  countryDetail:{},
}


const rootReducer = (state =intialState, action) => {
  switch (action.type) {
    case GET_COUNTRIES:
      return{
        ...state,
        countries:action.payload,
        countriesFilter:action.payload
      }
      case SEARCH_COUNTRY:
        
        return{
          ...state,
          countries:action.payload,
        }
        
      case FILTER_COUNTRIES:      
      const allcountries = state.countriesFilter;
      console.log(state.countries);
      const countriesFilter = action.payload === 'all' ?allcountries : allcountries.filter(e=> e.continent?.includes(action.payload))
      console.log(countriesFilter);
      return{
        ...state,
        countries:countriesFilter
      }
      case FILTER_COUNTRIES_BY_ACTIVITY:
      let allcountriesByAct =[];
      state.countriesFilter.forEach(pais=>{
        if(pais.activities){
          pais.activities.forEach(actividad=>{
            if(actividad.name===action.payload){
              allcountriesByAct.push(pais)
            }
          })

        }
      })
      allcountriesByAct=[...new Set(allcountriesByAct)]
      console.log(allcountriesByAct);
      return{
        ...state,
        countries:allcountriesByAct
      }

      case ORDENAR_ASC:
        const countriesSort=state.countries.sort(function (a,b){
          console.log(a);
          if(a.name>b.name){
            return 1;
          }
          if(a.name<b.name){
            return -1;
          }
          return 0;
          
        })
        return{
            ...state,
            countries:countriesSort
          }

          case ORDENAR_DSC:
            const countriesSortDsc=state.countries.sort(function (b,a){
              if(a.name>b.name){
                return 1;
              }
              if(a.name<b.name){
                return -1;
              }
              return 0;
              
            })
            return{
                ...state,
                countries:countriesSortDsc
              }
        case ORDENAR_POP_ASC:
          console.log(state.countries);
          const countriesSortPopAsc=state.countries.sort(function (a,b){
            // console.log(typeof(a.population))
          if(parseInt( a.population)>parseInt( b.population)){
              return 1;
          }
          if(parseInt( a.population)<parseInt( b.population)){
              return -1;
          }
          return 0;
          
          })
          return{
            ...state,
            countries:countriesSortPopAsc
          }
        case ORDENAR_POP_DSC:
          const countriesSortPopDsc=state.countries.sort(function (b,a){
            // console.log(typeof(a.population))
          if(parseInt( a.population)>parseInt( b.population)){
              return 1;
          }
          if(parseInt( a.population)<parseInt( b.population)){
              return -1;
          }
          return 0;
          
          })
          return{
            ...state,
            countries:countriesSortPopDsc
          }  
        case GET_COUNTRY_DETAIL:
          console.log(action.payload);
          return{
            ...state,
            countryDetail:action.payload
              }
    
      default:
        return state;
  }
  
};

export default rootReducer;