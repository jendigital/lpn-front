import React from 'react';
import { Navbar } from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";
import './mobile_menu.css';

const MobileMenu = () => {
    return (
        <Navbar id="mobile_header" inverse collapseOnSelect>
            <Navbar.Header>
                <Navbar.Toggle />
                <Navbar.Brand>
                    <LinkContainer to="/"><img alt="life" src="https://storage.googleapis.com/life-personal-network/commun/logo.png" /></LinkContainer>
                </Navbar.Brand>
            </Navbar.Header>
            <Navbar.Collapse>
                <div className="icons center">
                    <LinkContainer to="/">
                        <img alt="myStory" src="https://storage.googleapis.com/life-personal-network/commun/menu/myStory.png" />
                        <img alt="myStory" src="https://storage.googleapis.com/life-personal-network/commun/menu/myStoryBack.png" />
                    </LinkContainer>
                    <LinkContainer to="/">
                        <img alt="myTrip" src="https://storage.googleapis.com/life-personal-network/commun/menu/myTrip.png" />
                        <img alt="myTrip" src="https://storage.googleapis.com/life-personal-network/commun/menu/myTripBack.png" />
                    </LinkContainer>
                    <LinkContainer to="/">
                        <img alt="myFriends" src="https://storage.googleapis.com/life-personal-network/commun/menu/myFriends.png" />
                        <img alt="myFriends" src="https://storage.googleapis.com/life-personal-network/commun/menu/myFriendsBack.png" />
                    </LinkContainer>
                </div>
                <div className="icons center">
                    <LinkContainer to="/">
                        <img alt="myLife" src="https://storage.googleapis.com/life-personal-network/commun/menu/myLife.png" />
                        <img alt="myLife" src="https://storage.googleapis.com/life-personal-network/commun/menu/myLifeBack.png" />
                    </LinkContainer>
                    <LinkContainer to="/">
                        <img alt="myPics" src="https://storage.googleapis.com/life-personal-network/commun/menu/myPics.png" />
                        <img alt="myPics" src="https://storage.googleapis.com/life-personal-network/commun/menu/myPicsBack.png" />
                    </LinkContainer>
                    <LinkContainer to="/">
                        <img alt="myPage" src="https://storage.googleapis.com/life-personal-network/commun/menu/myPage.png" />
                        <img alt="myPage" src="https://storage.googleapis.com/life-personal-network/commun/menu/myPageBack.png" />
                    </LinkContainer>
                </div>
                <div className="icons">
                    <LinkContainer to="/">
                        <img alt="myProfile" src="https://storage.googleapis.com/life-personal-network/commun/menu/myProfile.png" />
                        <img alt="myProfile" src="https://storage.googleapis.com/life-personal-network/commun/menu/myProfileBack.png" />
                    </LinkContainer>
                </div>
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
            </Navbar.Collapse>
        </Navbar>
    );
};

export default MobileMenu;
