import React from 'react';
import { LinkContainer } from "react-router-bootstrap";

import './menu.css';

const Menu = () => {
    return (
        <div id="header">
            <LinkContainer to="/">
                <img id="logo" alt="life" src="https://storage.googleapis.com/life-personal-network/commun/logo.png" />
            </LinkContainer>
            <ul id="menu">
                <li>
                    <LinkContainer to="/">
                        <img alt="myStory" src="https://storage.googleapis.com/life-personal-network/commun/menu/myStory.png" />
                        <img alt="myStory" src="https://storage.googleapis.com/life-personal-network/commun/menu/myStoryBack.png" />
                    </LinkContainer>
                </li>
                <li>
                    <LinkContainer to="/">
                        <img alt="myTrip" src="https://storage.googleapis.com/life-personal-network/commun/menu/myTrip.png" />
                        <img alt="myTrip" src="https://storage.googleapis.com/life-personal-network/commun/menu/myTripBack.png" />
                    </LinkContainer>
                </li>
                <li>
                    <LinkContainer to="/">
                        <img alt="myFriends" src="https://storage.googleapis.com/life-personal-network/commun/menu/myFriends.png" />
                        <img alt="myFriends" src="https://storage.googleapis.com/life-personal-network/commun/menu/myFriendsBack.png" />
                    </LinkContainer>
                </li>
                <li>
                    <LinkContainer to="/">
                        <img alt="myLife" src="https://storage.googleapis.com/life-personal-network/commun/menu/myLife.png" />
                        <img alt="myLife" src="https://storage.googleapis.com/life-personal-network/commun/menu/myLifeBack.png" />
                    </LinkContainer>
                </li>
                <li>
                    <LinkContainer to="/">
                        <img alt="myPics" src="https://storage.googleapis.com/life-personal-network/commun/menu/myPics.png" />
                        <img alt="myPics" src="https://storage.googleapis.com/life-personal-network/commun/menu/myPicsBack.png" />
                    </LinkContainer>
                </li>
                <li>
                    <LinkContainer to="/">
                        <img alt="myPage" src="https://storage.googleapis.com/life-personal-network/commun/menu/myPage.png" />
                        <img alt="myPage" src="https://storage.googleapis.com/life-personal-network/commun/menu/myPageBack.png" />
                    </LinkContainer>
                </li>
                <li>
                    <LinkContainer to="/">
                        <img alt="myProfile" src="https://storage.googleapis.com/life-personal-network/commun/menu/myProfile.png" />
                        <img alt="myProfile" src="https://storage.googleapis.com/life-personal-network/commun/menu/myProfileBack.png" />
                    </LinkContainer>
                </li>
            </ul>
            <ul id="settings">
                <li>
                    <LinkContainer to="/">
                        <span className="glyphicon glyphicon-cog"></span>
                    </LinkContainer>
                </li>
                <li>
                    <LinkContainer to="/">
                        <span className="glyphicon glyphicon-question-sign"></span>
                    </LinkContainer>
                </li>
                <li>
                    <LinkContainer to="/">
                        <span className="glyphicon glyphicon-log-in"></span>
                    </LinkContainer>
                </li>
            </ul>
        </div>
    );
};

export default Menu;
