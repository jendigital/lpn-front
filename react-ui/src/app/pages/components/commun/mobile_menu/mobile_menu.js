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
                    <LinkContainer to="/"><img src="https://storage.googleapis.com/life-personal-network/commun/logo.png" /></LinkContainer>
                </Navbar.Brand>
            </Navbar.Header>
            <Navbar.Collapse>
                <div className="icons center">
                    <LinkContainer to="/">
                        <img src="https://storage.googleapis.com/life-personal-network/commun/menu/myStory.png" />
                    </LinkContainer>
                    <LinkContainer to="/">
                        <img src="https://storage.googleapis.com/life-personal-network/commun/menu/myTrip.png" />
                    </LinkContainer>
                    <LinkContainer to="/">
                        <img src="https://storage.googleapis.com/life-personal-network/commun/menu/myFriends.png" />
                    </LinkContainer>
                </div>
                <div className="icons center">
                    <LinkContainer to="/">
                        <span>myStory</span>
                    </LinkContainer>
                    <LinkContainer to="/">
                        <span>myTrip</span>
                    </LinkContainer>
                    <LinkContainer to="/">
                        <span>myFriends</span>
                    </LinkContainer>
                </div>
                <div className="icons center">
                    <LinkContainer to="/">
                        <img src="https://storage.googleapis.com/life-personal-network/commun/menu/myLife.png" />
                    </LinkContainer>
                    <LinkContainer to="/">
                        <img src="https://storage.googleapis.com/life-personal-network/commun/menu/myPics.png" />
                    </LinkContainer>
                    <LinkContainer to="/">
                        <img src="https://storage.googleapis.com/life-personal-network/commun/menu/myPage.png" />
                    </LinkContainer>
                </div>
                <div className="icons center">
                    <LinkContainer to="/">
                        <span>myLife</span>
                    </LinkContainer>
                    <LinkContainer to="/">
                        <span>myPics</span>
                    </LinkContainer>
                    <LinkContainer to="/">
                        <span>myPage</span>
                    </LinkContainer>
                </div>
                <div className="icons">
                    <LinkContainer to="/">
                        <img src="https://storage.googleapis.com/life-personal-network/commun/menu/myProfile.png" />
                    </LinkContainer>
                </div>
                <div className="icons">
                    <LinkContainer to="/">
                        <span>myProfile</span>
                    </LinkContainer>
                </div>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default MobileMenu;
