import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CountryDetails = () => {

    const {name} = useParams();
    const [country, setCountry] = useState([])

    useEffect( () => {
        const url = `https://restcountries.com/v3.1/name/${name}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setCountry(data[0]))
    }, [])

    return (
        <div className='country'>
            <div>
                {/* <h1>{country.name.common}</h1> */}
                <h4>Region: {country.region}</h4>
                <h4>Subregion: {country.subregion}</h4>
                <h4>Area: {country.area} sq km</h4>
                <h4>Population: {country.population}</h4>
                <h4>Independent: {country.independent ? "yes" : "no"}</h4>
                <h4>Landlocked: {country.landlocked ? "yes" : "no"}</h4>
            </div>
        </div>
    );
};

export default CountryDetails;