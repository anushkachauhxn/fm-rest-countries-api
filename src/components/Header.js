import React from 'react';
import Button from '@mui/material/Button';
import './Header.css';

function Header() {
    return (
        <div className="header">
            <h1>Where in the World?</h1>
            <Button 
                className="header__btn"
                variant="text" 
                color="secondary"
                startIcon={<ion-icon name="moon-outline"></ion-icon>}
            >
                Dark Mode
            </Button>
        </div>
    );
}

export default Header;
