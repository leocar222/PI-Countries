import React,{useState} from "react";
import './searchbar.css'


export default function Searchbar(props){
    const [country, setCountry] = useState("");
    return(
        <form onSubmit={(e) => {
          e.preventDefault();
          props.onSearch(country);
          setCountry('')
        }}>
          <input
            className="nav-search-input"
            type="text"
            placeholder="País..."
            value={country}
            onChange={e => setCountry(e.target.value)}
          />
          <button className="nav-search-btn" type="submit" value="Buscar">
            <div role='img' aria-label="Buscar" className="nav-icon-search">
              
            </div>
          </button>
        </form>
      )
}