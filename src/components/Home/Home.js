import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import Header from '../Header/Header';

const Home = () => {

    const [countries, setCountries] = useState([]);
    const [collection, setCollection] = useState([]);

    useEffect( () => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
        .catch(error => console.log(error))
      }, [])

    const handleAddCountry = (country) => {
        const countryFound = collection.find(ct => country === ct);
        if(countryFound === undefined){
            const newCollection = [...collection, country];
            setCollection(newCollection);
            country.isClicked = true;
        }
        
    }

    return (
        <div>
            <Header collection={collection}></Header>
            {
                countries.map(country => 
                <Country 
                    key={country.name.common}
                    country={country} 
                    handleAddCountry={handleAddCountry}>
                </Country>)
            }
        </div>
    );
};

export default Home;