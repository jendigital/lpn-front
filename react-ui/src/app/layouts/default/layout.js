import React from 'react';
import Menu from '../components/commun/menu/menu';
import MobileMenu from '../components/commun/mobile_menu/mobile_menu';

const MainLayout = props => (
    <div>
        <Menu/>
        <MobileMenu/>
        <div className="content">
            {props.children}
        </div>
    </div>
);

export default MainLayout;
