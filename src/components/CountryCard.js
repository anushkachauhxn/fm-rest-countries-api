import React from 'react';
import { CardActionArea } from '@mui/material';
import './CountryCard.css';

function CountryCard({ id, flag, name, population, region, capital }) {
    return (
        <CardActionArea key={id} className="countryCard">
            <div className="countryCard">
                <img className="countryCard__flag" src={flag} alt="" />
                <div className="countryCard__content">
                    <h2>{name}</h2>
                    <ul>
                        <li>
                            <span>Population: </span>
                            {population}
                        </li>
                        <li>
                            <span>Region: </span>
                            {region}
                        </li>
                        <li>
                            <span>Capital: </span>
                            {capital}
                        </li>
                    </ul>
                </div>
            </div>
        </CardActionArea>
    );
}

export default CountryCard;
