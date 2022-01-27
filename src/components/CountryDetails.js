import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Button } from '@mui/material';
import './CountryDetails.css';

function CountryDetails() {
    const { id } = useParams();
    const history = useHistory();

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
            </div>
        </div>
    );
}

export default CountryDetails;
