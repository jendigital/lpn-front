import React, { Component } from 'react'
import './index.css'
import { FormattedMessage } from 'react-intl'
import $ from 'jquery'
import { Icon } from 'react-fa'

class Profile extends Component {
    constructor(props) {
        super(props);

        this.profile = {firstname: 'Jen', lastname: 'Angel', living_place: 'New York', avatar: 'https://storage.googleapis.com/life-personal-network/profile/avatar.jpg'};
    }

    render() {
        return (
            <div className='profile' >
                <div className='details'>
                    <div className='avatar'>
                        <img src={this.profile.avatar} />
                    </div>
                    <div className='presentation'>
                        <h5>{this.profile.firstname} {this.profile.lastname}</h5>
                    </div>
                    <div className='link'>
                        <div>
                            <Icon name='newspaper-o' />
                            <FormattedMessage id='profile.news' />
                        </div>
                        <div>
                            <Icon name='users' />
                            <FormattedMessage id='profile.contacts' />
                        </div>
                        <div>
                            <Icon name='comments-o' />
                            <FormattedMessage id='profile.messages' />
                            <span className='nbOfMsg'> 4 </span>
                        </div>
                    </div>
                </div>
                <div className='complements'>
                    <div className='search'>
                        <Icon name='search' />
                        <FormattedMessage id='profile.search' />
                        <Icon name='sliders' />
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile