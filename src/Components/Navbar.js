import React from 'react';
import '../Styles/Navbarr.css'
import { Link } from 'react-router-dom';
import osuLogo from "../Images/Osulogo.png";
import searchIcon from '../Images/search_50px.png';

function Navbar() {
    return (
        <div className='navbar'>
            <div className='inside'>
                <div className='left'>
                    <div className='logo'>
                        <img src={osuLogo} alt='Empty' />
                    </div>
                    <div className='Links'>
                        <div className='Link'>
                            <Link to="/home">home</Link>
                        </div>
                        <div className='Link'>
                            <Link to="/beatmaps">beatmaps</Link>
                        </div>
                        <div className='Link'>
                            <Link to="/ranking">ranking</Link>
                        </div>
                        <div className='Link'>
                            <Link to="/community">community</Link>
                        </div>
                        <div className='Link'>
                            <Link to="/store">store</Link>
                        </div>
                        <div className='Link'>
                            <Link to="/help">help</Link>
                        </div>
                    </div>
                    <div className='serach'>
                        <img src={searchIcon} alt='search' />
                    </div>
                </div>
                <div className='right'></div>
            </div>
        </div>
    )
}

export default Navbar;
