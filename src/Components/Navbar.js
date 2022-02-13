import React from 'react';
import '../Styles/Navbarr.css'
import { Link } from 'react-router-dom';
import osuLogo from "../Images/Osulogo.png";
import searchIcon from '../Images/search_50px.png';
import heartIcon from '../Images/heartIcon.png';
import twiterIcon from '../Images/twitterIcon.png';
import userIcon from '../Images/user.jpg';
import morrocoFlag from '../Images/morroco flag.png';
import downIcon from '../Images/chevron_down.png';



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
                <div className='right'>
                    <div className='twiter'>
                        <a href='#'>
                            <img src={twiterIcon} alt='twitter' />
                        </a>
                    </div>
                    <div className='heart'>
                        <a href='#'>
                            <img src={heartIcon} alt='heart' />
                        </a>
                    </div>
                    <div className='language'>
                        <div className='flag'>
                            <img src={morrocoFlag} alt='lang' />
                        </div>
                    </div>
                    <div className='profile'>
                        <a href='#'>
                            <img src={userIcon} alt='user' />
                        </a>
                    </div>
                </div>
            </div>
            <div className="showNav">
                <img src={downIcon} alt='ShowNav' />
            </div>
        </div>
    )
}

export default Navbar;
