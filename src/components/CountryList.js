import React, { useEffect, useState } from 'react';
import CountryCard from './CountryCard';
import './CountryList.css';

function CountryList() {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetchCountries("https://restcountries.com/v2/all");
    }, []);

    function fetchCountries(apiUrl) {
        fetch(apiUrl)
        .then(res => res.json())
        .then(data => {
            setCountries(data);
        })
        .catch(error => alert(error));
    }

    return (
        <div className="countryList">
            {countries.map(({ alpha3Code, flags: { svg }, name, population, region, capital }) => (
                <CountryCard 
                    id={alpha3Code}
                    flag={svg} 
                    name={name}
                    population={population}
                    region={region}
                    capital={capital}
                />
            ))}
        </div>
    );
}

export default CountryList;
