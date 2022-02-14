import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/NavbarVertical.css';
import profile from '../Images/user.jpg'
import rightIcon from '../Images/chevron_right.png'

function NavbarVertical() {

    return (
        <div className='navbarVertical'>
            <div className='login'>
                <div className='profile'>
                    <img src={profile} alt='profile' />
                </div>
                <span>
                    <Link to='#'>sing in</Link>/<Link to='#'>register</Link>
                </span>
            </div>
            <div className='Links'>
                <div className='Link'>
                    <div className='rightIcon'>
                        <img src={rightIcon} alt="right" />
                    </div>
                    <Link to="/home">home</Link>
                </div>
                <div className='Link'>
                    <div className='rightIcon'>
                        <img src={rightIcon} alt="right" />
                    </div>
                    <Link to="/beatmaps">beatmaps</Link>
                </div>
                <div className='Link'>
                    <div className='rightIcon'>
                        <img src={rightIcon} alt="right" />
                    </div>
                    <Link to="/ranking">ranking</Link>
                </div>
                <div className='Link'>
                    <div className='rightIcon'>
                        <img src={rightIcon} alt="right" />
                    </div>
                    <Link to="/community">community</Link>
                </div>
                <div className='Link'>
                    <div className='rightIcon'>
                        <img src={rightIcon} alt="right" />
                    </div>
                    <Link to="/store">store</Link>
                </div>
                <div className='Link'>
                    <div className='rightIcon'>
                        <img src={rightIcon} alt="right" />
                    </div>
                    <Link to="/help">help</Link>
                </div>
            </div>
        </div>
    )
}

export default NavbarVertical;
