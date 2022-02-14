import React from 'react';
import '../Styles/Home.css';
import osulogo3 from '../Images/Osulogo3.png'
import osuLogo from '../Images/Osulogo.png';
import blow from '../Images/below.png';

function Home() {
    return (
        <div className='home'>
            <div className='info'>
                <div className='left'>
                    <img src={osulogo3} alt='logo' />
                </div>
                <div className='right'>
                    <p>16,270,060 registered players, 23,490 currently online in 645 games</p>
                    <div className='osuLogo'>
                        <img src={osuLogo} alt='Osu Logo' />
                    </div>
                    <p className='p2'>the bestest free-to-win rhythm game</p>
                    <p className='p3'>rhythm is just a click away</p>
                    <div className='button'>
                        <span>Download Now</span>
                        <div className='download'>
                            <img src={blow} alt='downlad logo' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='newFeatured'>
                <div className='featurImg'>
                    <div className='mysapn'>12 FEB 2022</div>
                </div>
                <div className='bot'>
                    <span>New Featured Artist: MisoilePunch</span>
                    <span>by pishifat</span>
                </div>
            </div>
            <div className='more'></div>
        </div>
    )
}

export default Home;
