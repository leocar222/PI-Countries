import React, {Component} from "react";
import {connect} from 'react-redux';
import * as actions from "./../../redux/actions"
import Countries from "../Countries/Countries";
import CountriesFiltrados from "../CountriesFiltrados/CountriesFiltrados";
import Selector from "../Selector/Selector";
import Searchbar from "../Searchbar/Searchbar";



export class Home extends Component {
    constructor(props){
        super(props);
        this.state={
            continent:'',
            name:''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    //montando componente para mostrar todos los paises
    componentDidMount(){        
        return this.props.getCountries()
    }
    
   async handleChange(e) {
    console.log(e.target.name);
    e.preventDefault();
       await this.setState({
            [e.target.name]: e.target.value
        })
        this.props.filterCountries({[e.target.name]:e.target.value})
      }
    
    render() {
        //hay que agregar un estado local para manejar el valor del input
        const {continent,name}=this.state;
        // let objeto;
        // if(continent||name){
        //     const clave=Object.keys(this.state)[0]
        //     const valor=this.state[Object.keys(this.state)[0]]
        //     objeto={[clave]:valor}
        //     console.log('tiene contin o name')
        // }
        // else{
        //     objeto=null;
        // }
        if(continent||name){    
            console.log('entro a countries filtrados');
            const clave=Object.keys(this.state)[0]
            const valor=this.state[Object.keys(this.state)[0]]
            const objeto={[clave]:valor}
            console.log(objeto)
            // Object.keys(this.state)[0]:this.state[Object.keys(this.state)[0]]
            return (
                <div>

                    {/* al componente Selector le pasamos por props la funcion handleChange de manera de capturar luego el cambio en el estado que sera devuelto por el componente */}
                    <Searchbar name='name' handleChange={this.handleChange}></Searchbar>
                    <Selector  name='continent' handleChange={this.handleChange}></Selector> 
                    <CountriesFiltrados despacho={objeto}></CountriesFiltrados>
                    {/* <Countries despacho={objeto}></Countries>  */}
                </div>
            )
        }
        else {
            console.log('entro a countries');
            
            return(
                <div>
                    <Searchbar name='name' handleChange={this.handleChange}></Searchbar>
                    <Selector name='continent' handleChange={this.handleChange}></Selector>                 
                    <Countries ></Countries>        
                </div>
            )
        }
    }
}

export const mapDispatchToProps = (dispatch) => {
    return{
      getCountries:()=>dispatch(actions.getCountries()),
      filterCountries:(payload)=>dispatch(actions.filterCountries(payload)),
    }
   }

  export default connect(null, mapDispatchToProps)(Home);