import './App.css';
import React from 'react';
import {Route} from 'react-router-dom';
import Home from './components/Home/Home';
import Nav from './components/Nav/Nav';
import Landing from './components/Landing/Landing';
import CountryDetail from './components/CountryDetail/CountryDetail';
import CreateActivity from './components/CreateActivity/CreateActivity';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Route exact path='/' component={Landing}></Route>
      <Route exact path='/home' component={Home}></Route>
      <Route exact path='/activities/create' component={CreateActivity}></Route>
      <Route exact path='/countries/:id' component={CountryDetail}></Route>
    </div>
  );
}

export default App;
