import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import { a } from 'react-router-bootstrap';
import { FormattedMessage } from 'react-intl';
import { Icon } from 'react-fa';
import $ from 'jquery';
import './index.css';

class MobileMenu extends Component {
    constructor(props) {
        super(props);

        this.showConfig    = this.showConfig.bind(this);
        this.hideConfig    = this.hideConfig.bind(this);
    }

    showConfig() {
        $('.config').css('display', 'flex');

    }

    hideConfig() {
        $('.config').css('display', 'none');
    }

    render() {
        return (
            <div id='mobile_menu'>
                <Navbar id='mobile_header' inverse collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Toggle onClick={this.hideConfig} />
                        <Navbar.Brand>
                            <div className='mobile_menu_bar' onMouseOver={this.hideConfig}>
                                <a href='#'>
                                    <img alt='life' className='logo' src='https://storage.googleapis.com/life-personal-network/commun/life.png' />
                                </a>
                            </div>
                            <div>
                                <img alt='avatar' className='avatar' onClick={this.showConfig} onMouseOver={this.showConfig} src="https://storage.googleapis.com/life-personal-network/commun/avatar.jpg" />
                            </div>
                            <div className='config' onClick={this.hideConfig} onMouseLeave={this.hideConfig}>
                                <div className='config_top'>
                                    <div className='triangle'></div>
                                </div>
                                <div className='config_line'>
                                    <div className='line'>
                                        <div className="logo_settings">
                                            <span className='glyphicon glyphicon-cog'></span>
                                        </div>
                                        <FormattedMessage id="menu.settings" />
                                    </div>
                                    <div className='line'>
                                        <div className="logo_settings">
                                            <Icon name='question' />
                                        </div>
                                        <FormattedMessage id="menu.help" />
                                    </div>
                                    <div className='line'>
                                        <div className="logo_settings">
                                            <Icon name='sign-out' />
                                        </div>
                                        <FormattedMessage id="menu.disconnect" />
                                    </div>
                                </div>
                            </div>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <div className="menu_icons">
                            <div className='icons'>
                                <a href='#'>
                                    <div>
                                        <img alt='myStory' src='https://storage.googleapis.com/life-personal-network/commun/menu/myStory.png' />
                                    </div>
                                    <FormattedMessage id="menu.myStory" />
                                </a>
                                <a href='#'>
                                    <div>
                                        <img alt='myTrip' src='https://storage.googleapis.com/life-personal-network/commun/menu/myTrip.png' />
                                    </div>
                                    <FormattedMessage id="menu.myTrip" />
                                </a>
                                <a href='#'>
                                    <div>
                                        <img alt='myFriends' className='last-one' src='https://storage.googleapis.com/life-personal-network/commun/menu/myFriends.png' />
                                    </div>
                                    <FormattedMessage id="menu.myFriends" />
                                </a>
                            </div>
                            <div className='icons'>
                                <a href='#'>
                                    <div>
                                        <img alt='myPics' src='https://storage.googleapis.com/life-personal-network/commun/menu/myPics.png' />
                                    </div>
                                    <FormattedMessage id="menu.myPics" />
                                </a>
                                <a href='#'>
                                    <div>
                                        <img alt='myLife' src='https://storage.googleapis.com/life-personal-network/commun/menu/myLife.png' />
                                    </div>
                                    <FormattedMessage id="menu.myLife" />
                                </a>
                                <a href='#'>
                                    <div>
                                        <img alt='myPage' className='last-one' src='https://storage.googleapis.com/life-personal-network/commun/menu/myPage.png' />
                                    </div>
                                    <FormattedMessage id="menu.myPage" />
                                </a>
                            </div>
                            <div className='icons'>
                                <a href='#'>
                                    <div>
                                        <img alt='myProfile' src='https://storage.googleapis.com/life-personal-network/commun/menu/myProfile.png' />
                                    </div>
                                    <FormattedMessage id="menu.myProfile" />
                                </a>
                            </div>
                        </div>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default MobileMenu;
