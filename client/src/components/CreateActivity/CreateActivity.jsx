import React from "react";
import { useDispatch } from "react-redux";
import * as actions from "./../../redux/actions"
import { useSelector } from "react-redux";
import CountrySelected from "../CountrySelected/CountrySelected";

export default function CreateActivity(props){
    let dispatch=useDispatch()
    React.useEffect(()=>{
      dispatch(actions.getCountries())
    },[dispatch])
    let paises=useSelector(state=>state.countries)

    let initialState={
        name:'',
        difficulty:'',
        duration:'',
        season:'',
        countries:[]
    }
  
    const [input,setInput]=React.useState(initialState)
    const dificultades=[1,2,3,4,5];
    const seasons=['Verano','Otoño','Invierno','Primavera'];

    //validaciones
    let initalErrors={
      name: '',
      difficulty: '',
      duration: '',
      season:'',
      countries:[]
    }
    const [errors,setErrors]=React.useState(initalErrors); 

    const[disable,setDisable]=React.useState(true)

    let validarForm= (errors)=> {
      let valid = true;
      Object.values(errors).forEach( (val) => val.length > 0 && (valid = false));
      if(valid) {
        setDisable(false)
      } else {
        setDisable(true)
      }
    }

    function handleSelect(e) {
      if (input.countries.includes(e.target.value)) {
          console.log('pais ya cargado');
      } else {
          setInput((input) => ({
              ...input,
              countries: [...input.countries, e.target.value],
          }));
      }
  }

    let handleOnChange = (e) => {
        const { name, value } = e.target;
        switch (name) {
          case 'name': 
            // const patron=/[a-zA-Z ]{2,254}/
            // errors.name = patron.test(value)?'El nombre no puede tener simbolos':'';
            errors.name = value.length>10?'El nombre no puede tener mas de 10 caracteres':'';
            break;
          case 'duration':
            errors.duration=value>240?'La duración no puede exceder los 240 minutos (4 horas)':'';
            break;
          case "countries":
            errors.countries=value==='--Elegir País--'?'Por favor cargar un pais o paises donde realizar la actividad':''
          
          default:
            break;
        }

        
        
        setInput(
          {
            ...input,
            [e.target.name]:e.target.value
          }
          );
          setErrors(errors)
          validarForm(errors)
        };
        
        
        
        
        let handleDelete=(pais)=>{
          console.log(pais);
          console.log(input.countries[0]);
          const countriesFilt=input.countries.filter(e=>e!==pais)
          console.log(countriesFilt);
          setInput((input) => ({
            ...input,
            countries: countriesFilt
        }));

        }
    let handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(actions.createActivity(input))
    setInput({name:'',
    difficulty:'',
    duration:'',
    season:'',
    countries:[]})
  }




  console.log(input.countries);
  console.log(errors.name);
  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <label >Name: </label>
        
        <input
            type="text"
            name="name"
            value={input.name}
            onChange={(e)=>handleOnChange(e)}
            required
            
          />
          {errors.name ? <div style={{color:'red'}}>{errors.name}</div> : null}

        <label >difficulty: </label>
        <select name="difficulty" type='number' value={input.difficulty} onChange={handleOnChange}>
          <option >--Elegir Dificultad--</option>
        {dificultades.map(e=><option key={e}>{e}</option>)}
        </select>


        <label >duration: </label>
        
        <input
            type="text"
            name="duration"
            value={input.duration}
            onChange={handleOnChange}
            required
          />
        {errors.duration ? <div style={{color:'red'}}>{errors.duration}</div> : null}

        <label >season: </label>
        <select  name="season"  value={input.season} onChange={(e)=>handleOnChange(e)}>
        <option value="value"   >--Elegir Temporada--</option>
        {seasons.map(e=><option key={e}>{e}</option>)}
        </select>
        
        <label >countries: </label>
        <select name="countries"  value={input.countries} onChange={handleSelect}>
          <option>--Elegir País--</option>
        {paises.map(e=><option key={e.ID}>{e.name}</option>)}
        </select>
        <button type='submit' disabled={disable}>Create Activity</button>
      </form>
        {input.countries.length>0&&input.countries.map(e=>
        <CountrySelected pais={e} delete={handleDelete}></CountrySelected>)}
    </div>
  );

}