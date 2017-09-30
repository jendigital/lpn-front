import React, { Component } from 'react';
import Menu from '../components/commun/menu';
import MobileMenu from '../components/commun/mobile_menu';

import $ from 'jquery';
import './index.css'

class MainLayout extends Component {
    hideConfig() {
        $('.config').css('display', 'none');
    }

    render() {
        return (
            <div id="layout">
                <Menu/>
                <MobileMenu/>
                <div className="content" onClick={this.hideConfig}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default MainLayout;
