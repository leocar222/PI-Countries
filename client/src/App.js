import './App.css';
import React from 'react';
import {Route} from 'react-router-dom';
import Countries from './components/Countries/Countries';
import Home from './components/Home/Home';


function App() {
  return (
    <div className="App">
      {/* <Nav/> */}
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/countries' component={Countries}></Route>
      
    </div>
  );
}

export default App;
