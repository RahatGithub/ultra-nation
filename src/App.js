import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import Country from './components/Country/Country';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import CountryDetails from './components/CountryDetails/CountryDetails';

function App() {

  // const [countries, setCountries] = useState([]);
  // const [collection, setCollection] = useState([]);

  // useEffect( () => {
  //   fetch('https://restcountries.com/v3.1/all')
  //   .then(res => res.json())
  //   .then(data => setCountries(data))
  //   .catch(error => console.log(error))
  // }, [])

  // const handleAddCountry = (country) => {
  //   const newCollection = [...collection, country];
  //   setCollection(newCollection);
  // }

  return (
    <div>
      {/* <Header collection={collection}></Header> */}
      <Router>
        <Switch>
          <Route exact path="/"> <Home></Home> </Route>
          <Route path="/home"> <Home></Home> </Route>
          <Route path="/country/:name"> <CountryDetails></CountryDetails> </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
