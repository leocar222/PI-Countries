import React, {Component} from "react";
import './home.css'
import {connect} from 'react-redux';
import * as actions from "./../../redux/actions"
import Countries from "../Countries/Countries";
import Selector from "../Selector/Selector";
import Searchbar from "../Searchbar/Searchbar";
import BotonOrdenar from "../BotonOrdenar/BotonOrdenar";
import Paginado from "../Paginado/Paginado";
import { Link } from "react-router-dom";

export class Home extends Component {
    constructor(props){
        super(props);
        this.state={
            paises:this.props.getCountries(),
            currentPage:1,
            countriesPerPage:9
        }
        this.handleSelect = this.handleSelect.bind(this);
        this.handleSelectByAct=this.handleSelectByAct.bind(this);
        this.onSearch=this.onSearch.bind(this);
        this.onClick=this.onClick.bind(this);
        this.onClickDsc=this.onClickDsc.bind(this)
        this.onClickPopAsc=this.onClickPopAsc.bind(this)
        this.onClickPopDsc=this.onClickPopDsc.bind(this)
        this.handleCountriesPerPage=this.handleCountriesPerPage.bind(this)
        this.handleAnterior=this.handleAnterior.bind(this)
        this.handleSiguiente=this.handleSiguiente.bind(this)
    }
    
    onSearch(country){
        this.setState({
            currentPage:1,
        })
        return this.props.searchCountry(country)
    }
    
    handleSelect(payload){
        return this.props.filterCountries(payload)
    }

    handleSelectByAct(payload){
        return this.props.filterCountriesByActivity(payload)
    }

    onClick(ordenamiento){
        this.setState({
            currentPage:1,
        })
        return this.props.orderCountries(ordenamiento)
    }

    onClickDsc(){
        this.setState({
            currentPage:1,
        })
        return this.props.orderCountriesDesc()
    }

    onClickPopAsc(){
        this.setState({
            currentPage:1,
        })
        return this.props.orderCountriesPopAsc()
    }
    onClickPopDsc(){
        this.setState({
            currentPage:1,
        })
        return this.props.orderCountriesPopDsc()
    }
    
    
    handleCountriesPerPage(num){
        if(num===1){
            console.log(this.state.countriesPerPage);
            this.setState({
                countriesPerPage:9
            })
        }else{
            this.setState({
                countriesPerPage:9
            })
        }
    }
    
    
    handleAnterior(){
        if(this.state.currentPage!==1){
            this.setState({currentPage:this.state.currentPage-1})
        }
    }

    handleSiguiente(){
        console.log(Math.ceil(this.props.countries.length/this.state.countriesPerPage));
        if(this.state.currentPage!==Math.ceil(this.props.countries.length/this.state.countriesPerPage))
        this.setState({
            currentPage:this.state.currentPage+1,
        })
    }
    
    render() {
        const allCountries=this.props.countries
        if(!Array.isArray(allCountries)){
            console.log('no es un array');
            return(
                <img src="https://www.redeszone.net/app/uploads-redeszone.net/2021/09/Error-404-01-e1633683457508.jpg" alt="imagen de error" />
            )
        }
        else{
            // paginado
            let indexOfLastCountry=this.state.currentPage*this.state.countriesPerPage;
            const indexOfFirstCountry=indexOfLastCountry-this.state.countriesPerPage;
            const currentCountries=allCountries.slice(indexOfFirstCountry,indexOfLastCountry)
            const paginado=(pageNumber)=>{
                this.setState({
                    currentPage:pageNumber,
                })
            }
            // Opciones para el selector
            const continentes= this.props.countriesFilter;
            // opciones para actividades
            let optionActivity=[];
            continentes.forEach(element => {
                if(element.activities.length!==0){
                    element.activities.forEach(e=>optionActivity.push(e.name))
                }
                
            });
            optionActivity=[...new Set(optionActivity)]
            // opciones para continentes
            let optionContinent=[];
            continentes.forEach(element => {
                if(element.continent.length!==0){
                    element.continent.forEach(e=>optionContinent.push(e))
                }
            });

            return(
                <div className="contenedor">
                    <header className="nav-header">
                        <button className="botonCrear">
                            <Link to={'/activities/create'}>Create Activity</Link>
                        </button>
                        <div className="nav-search">
                        <Searchbar onSearch={this.onSearch}></Searchbar>
                        </div>
                        <div className="nav-menu">
                            <Selector onSelect={this.handleSelect} filtrado={'Continente'} opciones={[...new Set(optionContinent)]}></Selector>
                            <Selector onSelect={this.handleSelectByAct} filtrado={'Actividades'} opciones={[...new Set(optionActivity)]}></Selector>
                            <BotonOrdenar onClick={this.onClick} order='asc'></BotonOrdenar>
                            <BotonOrdenar onClick={this.onClickDsc} order='dsc'></BotonOrdenar>
                            <BotonOrdenar onClick={this.onClickPopAsc} order='ascPop'></BotonOrdenar>
                            <BotonOrdenar onClick={this.onClickPopDsc} order='dscPop'></BotonOrdenar>
                        </div>
                        <div className="paginado">
                            <Paginado siguiente={this.handleSiguiente} anterior={this.handleAnterior} countriesPerPage={this.state.countriesPerPage} allCountries={allCountries.length} paginado={paginado} handleCountriesPerPage={this.handleCountriesPerPage} ></Paginado>
                        </div>
                    </header>
                    {allCountries&&<Countries paises={currentCountries}></Countries>}
                </div>
                    )
        }
             }
}

export const mapStateToProps = (state) => {
    // console.log(state.countries);
    return{
        countries:state.countries,
        countriesFilter:state.countriesFilter
    }
}


export const mapDispatchToProps = (dispatch) => {
    return{
        getCountries:()=>dispatch(actions.getCountries()),
        filterCountries:(continent)=>dispatch(actions.filterCountries(continent)),
        filterCountriesByActivity:(activity)=>dispatch(actions.filterCountriesByActivity(activity)),
        searchCountry:(country)=>dispatch(actions.searchCountry(country)),
        orderCountries:()=>dispatch(actions.orderCountries()),
        orderCountriesDesc:()=>dispatch(actions.orderCountriesDesc()),
        orderCountriesPopAsc:()=>dispatch(actions.orderCountriesPopAsc()),
        orderCountriesPopDsc:()=>dispatch(actions.orderCountriesPopDsc())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);



// this.handleChange = this.handleChange.bind(this);
//   this.handleSubmit=this.handleSubmit.bind(this);
  //   async handleChange(e) {
//     e.preventDefault();
//     // this.props.getCountries()
//        await this.setState({
//             [e.target.name]: e.target.value
//         })
//         this.props.filterCountries({[e.target.name]:e.target.value})
//         // e.target.reset()
//       }
//       async handleSubmit(e) {
        
//         e.preventDefault();
//         console.log(e.target);
//            await this.setState({
//                 [e.target.name]: e.target.value
//             })
//             this.props.filterCountries({[e.target.name]:e.target.value})
//             // e.target.reset()
//           }
//     // onClick(e){
//     //     e.preventDefault();
//     //     this.props.onClick()
//     // }