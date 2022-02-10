import React from 'react';
import './Country.css';

const Country = (props) => {
    const {country} = props;
    const [name, area, population, region, flag] = [country.name.common, country.area, country.population, country.region, country.flags.png]; 
    return (
        <div className="country">
            <div className="flag">
                <img src={flag} alt="" />
            </div>
            <div className="info">
                <div>
                    <h2>{name}</h2>
                    <h4>Area: {area} sq-km</h4>
                    <h4>Population: {population}</h4>
                    <h4>Region: {region}</h4>
                    <button onClick={() => props.handleAddCountry(props.country)}>Add</button>
                </div>
            </div>
        </div>
    );
};

export default Country;