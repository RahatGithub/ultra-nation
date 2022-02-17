import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import Country from './components/Country/Country';
import Header from './components/Header/Header';

function App() {

  const [countries, setCountries] = useState([]);
  const [collection, setCollection] = useState([]);

  useEffect( () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => setCountries(data))
    .catch(error => console.log(error))
  }, [])

  const handleAddCountry = (country) => {
    const newCollection = [...collection, country];
    setCollection(newCollection);
  }

  return (
    <div className="App">
      <header className="App-header">
        <Header collection={collection}></Header>
        {
          countries.map(country => <Country country={country} handleAddCountry={handleAddCountry}></Country>)
        }
      </header>
    </div>
  );
}

export default App;
