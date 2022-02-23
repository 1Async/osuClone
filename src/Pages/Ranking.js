import React from 'react';
import '../Styles/Ranking.css';
import listUp from '../Images/drag_list_up.png';
import { countriesList } from "../Helpers/Country";

function Ranking() {
    return (
        <div className='ranking'>
            <div className='ranking-head'>
                <div className='osu-types'>
                    <div className='osu-types-left'>
                        <div className='rankig-logo'>
                            <img src={listUp} alt='logo' />
                        </div>
                        <p>rankings</p>
                    </div>
                    <div className='osu-types-right'>
                        <a href='#'>osu!</a>
                        <a href='#'>osu!taiko</a>
                        <a href='#'>osu!catch</a>
                        <a href='#'>osu!mania</a>
                    </div>
                </div>
                <div className='order-by'>
                    <div className='order-by-list'>
                        <div className='perf'> <a href='#'>performance</a></div>
                        <div className='spot'> <a href='#'>spotlights</a></div>
                        <div className='score'> <a href='#'>score</a></div>
                        <div className='country'> <a href='#'>country</a></div>
                        <div className='multi'> <a href='#'>multiplayer</a></div>
                    </div>
                </div>
                <div className='listed-by'>
                    <div className='countries-list'>
                        <label>COUNTRY</label>
                        <select className='comboBox-countries'>
                            {
                                countriesList.map((country) => {
                                    return <option value={country.code}>{country.name}</option>
                                })
                            }

                        </select>
                    </div>
                    <div className='friend-All'>
                        <label>Show</label>
                        <div className='friend-All-Fields'>
                            <div className='All'>All</div>
                            <div className='Friend'>Friends</div>
                        </div>
                    </div>
                    <div className='show-by'></div>
                </div>
            </div>
            <div className='ranking-list'></div>
        </div>
    );
}

export default Ranking;
