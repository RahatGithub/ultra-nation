import { isDisabled } from '@testing-library/user-event/dist/utils';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Country.css';

const Country = (props) => {
    const {country} = props;
    const [name, area, population, region, flag] = [country.name.common, country.area, country.population, country.region, country.flags.png]; 

    const history = useHistory();

    const handleView = (name) => {
        const url = `/country/${name}`;
        history.push(url);
    }

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
                    {/* <button id={`add-btn`+name} onClick={() => {props.handleAddCountry(country)}}>Add</button> */}
                    <button onClick={() => handleView(name)}>View more</button>
                    {country.isClicked && <button className='disabled-btn'>Added</button>}
                    {country.isClicked || <button id={`add-btn`+name} onClick={() => {props.handleAddCountry(country)}}>Add</button>}
                </div>
            </div>
        </div>
    );
};

export default Country;