import React, { Component } from 'react';

import './index.css';

class Menu extends Component {
    render() {
        return (
            <div id='header'>
                <a href='#'>
                    <div className='logo_container'>
                        <img className='logo' alt='Life' src='https://storage.googleapis.com/life-personal-network/commun/life.png' />
                    </div>
                </a>
                <ul id='menu'>
                    <li>
                        <a href='#'>
                            <img alt='myStory' src='https://storage.googleapis.com/life-personal-network/commun/menu/myStory.png' />
                            <img alt='myStory' src='https://storage.googleapis.com/life-personal-network/commun/menu/myStoryBack.png' />
                        </a>
                    </li>
                    <li>
                        <a href='#'>
                            <img alt='myTrip' src='https://storage.googleapis.com/life-personal-network/commun/menu/myTrip.png' />
                            <img alt='myTrip' src='https://storage.googleapis.com/life-personal-network/commun/menu/myTripBack.png' />
                        </a>
                    </li>
                    <li>
                        <a href='#'>
                            <img alt='myFriends' src='https://storage.googleapis.com/life-personal-network/commun/menu/myFriends.png' />
                            <img alt='myFriends' src='https://storage.googleapis.com/life-personal-network/commun/menu/myFriendsBack.png' />
                        </a>
                    </li>
                    <li>
                        <a to='#'>
                            <img alt='myLife' src='https://storage.googleapis.com/life-personal-network/commun/menu/myLife.png' />
                            <img alt='myLife' src='https://storage.googleapis.com/life-personal-network/commun/menu/myLifeBack.png' />
                        </a>
                    </li>
                    <li>
                        <a href='#'>
                            <img alt='myPics' src='https://storage.googleapis.com/life-personal-network/commun/menu/myPics.png' />
                            <img alt='myPics' src='https://storage.googleapis.com/life-personal-network/commun/menu/myPicsBack.png' />
                        </a>
                    </li>
                    <li>
                        <a href='#'>
                            <img alt='myPage' src='https://storage.googleapis.com/life-personal-network/commun/menu/myPage.png' />
                            <img alt='myPage' src='https://storage.googleapis.com/life-personal-network/commun/menu/myPageBack.png' />
                        </a>
                    </li>
                    <li>
                        <a href='#'>
                            <img alt='myProfile' src='https://storage.googleapis.com/life-personal-network/commun/menu/myProfile.png' />
                            <img alt='myProfile' src='https://storage.googleapis.com/life-personal-network/commun/menu/myProfileBack.png' />
                        </a>
                    </li>
                </ul>
                <div id='settings_container'>
                    <ul id='settings'>
                        <li>
                            <a href='#'>
                                <span className='glyphicon glyphicon-cog'></span>
                            </a>
                        </li>
                        <li>
                            <a href='#'>
                                <span className='glyphicon glyphicon-question-sign'></span>
                            </a>
                        </li>
                        <li>
                            <a href='#'>
                                <span className='glyphicon glyphicon-log-in'></span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Menu;
