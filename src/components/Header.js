import { useDispatch, useSelector } from 'react-redux';
import { selectDarkMode, toggleDarkMode } from '../features/darkmodeSlice';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import './Header.css';

function Header() {
    const dispatch = useDispatch();
    const darkmode = useSelector(selectDarkMode);

    return (
        <div className="header">
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                <h1>Where in the World?</h1>
            </Link>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <Link to="/rock-paper-scissors" style={{ textDecoration: 'none' }}>
                    <Button
                        className="header__btn"
                        variant="text"
                        color="secondary"
                        startIcon={(darkmode) ? (<ion-icon name="game-controller-sharp"></ion-icon>) : (<ion-icon name="game-controller-outline"></ion-icon>)}
                    >
                        Play Game
                    </Button>
                </Link>
                <Button
                    onClick={() => dispatch(toggleDarkMode())}
                    className="header__btn"
                    variant="text"
                    color="secondary"
                    startIcon={(darkmode) ? (<ion-icon name="moon-sharp"></ion-icon>) : (<ion-icon name="moon-outline"></ion-icon>)}
                >
                    Dark Mode
                </Button>
            </div>
        </div>
    );
}

export default Header;
