import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Button } from '@mui/material';
import './CountryDetails.css';

function CountryDetails() {
    const { id } = useParams();
    const history = useHistory();
    const empty = {
        "name": "",
        "topLevelDomain": [
            ""
        ],
        "capital": "",
        "subregion": "",
        "region": "",
        "population": 0,
        "borders": [],
        "nativeName": "",
        "flags": {
            "svg": "",
        },
        "currencies": [],
        "languages": [],
    };

    const [country, setCountry] = useState(empty);
    useEffect(() => {
        fetch(`https://restcountries.com/v2/alpha/${id}`)
        .then(res => res.json())
        .then(data => {
            setCountry(data);
        })
        .catch((err) => console.log(err));
    }, [id]);

    return (
        <div className="countryDetails">
            <Button 
                onClick={() => history.push("/")}
                className="countryDetails__btn"
                variant="text"
                color="secondary"
                startIcon={<ion-icon name="arrow-back-sharp"></ion-icon>}
            >
                Back
            </Button>

            <div className="countryDetails__content">
                <img src={country.flags.svg} alt="" />
                <div className="countryDetails__details">
                    <h1>{country.name}</h1>

                    <div className="countryDetails__lists">
                        <ul>
                            <li>
                                <span>Native Name: </span>
                                {country.nativeName}
                            </li>
                            <li>
                                <span>Population: </span>
                                {country.population}
                            </li>
                            <li>
                                <span>Region: </span>
                                {country.region}
                            </li>
                            <li>
                                <span>Sub Region: </span>
                                {country.subregion}
                            </li>
                            <li>
                                <span>Capital: </span>
                                {country.capital}
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <span>Top Level Domain: </span>
                                {country.topLevelDomain}
                            </li>
                            <li>
                                <span>Currencies: </span>
                                {/* {getString(country.currencies)} */}
                            </li>
                            <li>
                                <span>Languages: </span>
                                {/* {getString(country.languages)} */}
                            </li>
                        </ul>
                    </div>

                    <div className="countryDetails__borders">
                        <span>Border Countries: </span>
                        <div className="countryDetails__bordersBtn">
                            {country.borders.map((border) => {
                                return (
                                    <Button onClick={() => history.push(`/country/${border}`)}>
                                        {border}
                                    </Button>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CountryDetails;
