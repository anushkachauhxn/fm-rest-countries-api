import React, { useState } from 'react';
import { Button } from '@mui/material';
import './Main.css';
import CountryList from './CountryList';

function Main() {
    const [menu, setMenu] = useState(false);
    const [menuLabel, setMenuLabel] = useState("Filter by Region");

    return (
        <div className="main">
            <div className="main__header">
                <div className="main__search">
                    <ion-icon name="search-sharp"></ion-icon>
                    <input 
                        type="search" 
                        name="search" 
                        id="search" 
                        placeholder="Search for a country..." 
                    />
                </div>

                <div className="main__filter">
                    <Button 
                        className="main__filterBtn" 
                        onClick={() => setMenu(!menu)}
                        endIcon={<ion-icon name="chevron-down-sharp"></ion-icon>}
                    >
                        {menuLabel}
                    </Button>
                    <ul onClick={() => setMenu(false)} className={`main__filterOptions ${menu && "active"}`}>
                        <li>All</li>
                        <li>Africa</li>
                        <li>Americas</li>
                        <li>Asia</li>
                        <li>Europe</li>
                        <li>Oceania</li>
                    </ul>
                </div>
            </div>

            <div className="main__body">
                <CountryList />
            </div>
        </div>
    );
}

export default Main;
