import React from 'react';
import '../Styles/Beatmaps.css';
import searchicon from '../Images/search_50px.png';
import beatmapsList from '../Images/lounge_music_playlis.png';
import playIcon from '../Images/play.png';
import audio from '../Images/flow-huawei-ringtone.mp3';
import heart from '../Images/heart.png';
import start from '../Images/start.png';
import ok from '../Images/ok.png';
import circle from '../Images/circle.png';

function Beatmaps() {
    return (
        <div className='beatmaps'>
            <div className='search'>
                <div className='title-field'>
                    <div className='song-img'>
                        <img src={beatmapsList} alt='song' />
                    </div>
                    <p>beatmap listing</p>
                </div>
                <div className='serach-field'>
                    <div className='serach-field-insid'>
                        <input type='text' placeholder='search' />
                        <div className='serach-img'>
                            <img src={searchicon} alt='srach-icon' />
                        </div>
                    </div>
                </div>
            </div>

            <div className='beatmaps-list'>
                <div className='beatmap-cart'>
                    <div className='background'>
                        <img src={playIcon} alt='play' />
                    </div>
                    <div className='beatmap-info'>
                        <a className='title'>1Luv U Cut Ver.</a>
                        <a className='author'>by G I-DLE</a>
                        <p className='by'>mapped by <a>Skymin</a></p>
                        <div className='more-info'>
                            <div className='inf fav'>
                                <div className='icon'>
                                    <img src={heart} alt='hear' />
                                </div>
                                <span>36</span>
                            </div>
                            <div className='inf playcount'>
                                <div className='icon'>
                                    <img src={start} alt='play' />
                                </div>
                                <span>1.3K</span>
                            </div>
                            <div className='inf date'>
                                <div className='icon'>
                                    <img src={ok} alt='date' />
                                </div>
                                <span>16 FEB 2022</span>
                            </div>
                        </div>
                        <div className='rank'>
                            <div className='ranked'>
                                <p>RANKED</p>
                            </div>
                            <div className='rank-starts'>
                                <div className='osu-play-icon'>
                                    <img src={circle} alt='icon' />
                                </div>
                                <div className='rank-starts-lvl'>
                                    <div className='color-field f1'></div>
                                    <div className='color-field f2'></div>
                                    <div className='color-field f3'></div>
                                    <div className='color-field f4'></div>
                                    <div className='color-field f5'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Beatmaps;
