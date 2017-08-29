import React from 'react';
import Menu from '../components/commun/menu/menu';
import MobileMenu from '../components/commun/mobile_menu/mobile_menu';

var MainLayout = React.createClass({
    propTypes: {
      title: React.PropTypes.string
    },

    render() {
      return (
        <div>
            <Menu/>
            <MobileMenu/>
            <div className="content">
                {this.props.children}
            </div>
        </div>
      );
    }
});

export default MainLayout;
