import React, { Component } from 'react'
import './index.css'
import { FormattedMessage } from 'react-intl'
import $ from 'jquery'
import { Icon } from 'react-fa'
import Cookie from '../../../components/commun/cookie'

function FriendsBlocs(props) {
    const friends = props.ListOfFriends;
    var date = new Date;

    const friendsSort = friends.sort(function(friendA, friendB) {
        var dateA = new Date(friendA.last_msg_date);
        var dateB = new Date(friendB.last_msg_date);

        var current_year = date.getFullYear();
        var current_month = date.getMonth();
        var current_date = date.getDate();
        var current_time = date.getTime();

        var A_year = dateA.getFullYear();
        var A_month = dateA.getMonth();
        var A_date = dateA.getDate();
        var A_time = dateA.getTime();

        var B_year = dateB.getFullYear();
        var B_month = dateB.getMonth();
        var B_date = dateB.getDate();
        var B_time = dateB.getTime();
        
        if((current_year - A_year) < (current_year - B_year)) {
            return -1;
        }

        if((current_year - A_year) > (current_year - B_year)) {
            return 1;
        }

        if((current_month - A_month) < (current_month - B_month)) {
            return -1;
        }

        if((current_month - A_month) > (current_month - B_month)) {
            return 1;
        }

        if((current_date - A_date) < (current_date - B_date)) {
            return -1;
        }

        if((current_date - A_date) > (current_date - B_date)) {
            return 1;
        }

        if((current_time - A_time) < (current_time - B_time)) {
            return -1;
        }

        if((current_time - A_time) > (current_time - B_time)) {
            return 1;
        }

        // names must be equal
        return 0;
    });
    
    var firstLetter;

    const firstLetterBloc = friendsSort.map(function(friend) {
        var date = new Date();
        var friend_date = new Date(friend.last_msg_date);
        var month = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
        var running_out_time;
        var friend_month;
        var minutes = date.getMinutes() - friend_date.getMinutes();
        var hours = date.getHours() - friend_date.getHours();
        var nbOfMsg;

        if(friend_date.getFullYear() == date.getFullYear() && (friend_date.getMonth()) == (date.getMonth())) {
            
            if(friend_date.getDate() == date.getDate()) {

                running_out_time = 'il y a ';

                if(date.getHours() == friend_date.getHours()) {
                    running_out_time += minutes + ' minutes';
                    nbOfMsg = 3;
                } else {
                    running_out_time += hours + ' heures';
                    nbOfMsg = 1;
                }
            } else if((date.getDate() - friend_date.getDate()) == 1) {
                running_out_time = 'hier';
            } else {
                friend_month = friend_date.getMonth();
                running_out_time = friend_date.getDate() + ' ' + month[friend_month] + ' ' + friend_date.getFullYear();
            }
        } else {
            friend_month = friend_date.getMonth();
            running_out_time = friend_date.getDate() + ' ' + month[friend_month] + ' ' + friend_date.getFullYear();
        }

        return (
            <div className='friend'>
                <div className='avatar'>
                    <img src={friend.avatar} />
                </div>
                
                <div className='info'>
                    <span className='nbOfMsg'> {nbOfMsg} </span>
                    <h5>{friend.firstname} {friend.lastname}</h5>
                    <p>{running_out_time}</p>
                </div>
            </div>
        )
    });

    return (
        <div className='friends-bloc'>
            {firstLetterBloc}
        </div>
    );
}

class ListOfFriends extends Component {
    constructor(props) {
        super(props);

        this.ListOfFriends = [
            {firstname: 'John', lastname: 'Doe', living_place: 'Zurich', last_msg_date: '09/07/2017 07:09', avatar: 'https://storage.googleapis.com/life-personal-network/profile/avatar.jpg'},
            {firstname: 'Albert', lastname: 'Einstein', living_place: 'Paris', last_msg_date: '10/11/2017 08:10', avatar: 'https://storage.googleapis.com/life-personal-network/profile/avatar2.jpg'},
            {firstname: 'Gael', lastname: 'Love', living_place: 'Montpellier', last_msg_date: '07/11/2017 17:10', avatar: 'https://storage.googleapis.com/life-personal-network/profile/avatar.jpg'},
            {firstname: 'Melody', lastname: 'Friend', living_place: 'Pékin', last_msg_date: '09/10/2017 16:01', avatar: 'https://storage.googleapis.com/life-personal-network/profile/avatar2.jpg'},
            {firstname: 'Maela', lastname: 'Barbie', living_place: 'Montreal', last_msg_date: '10/09/2017 03:12', avatar: 'https://storage.googleapis.com/life-personal-network/profile/avatar.jpg'},
            {firstname: 'Clémentine', lastname: 'Fun', living_place: 'Genève', last_msg_date: '07/05/2017 19:07', avatar: 'https://storage.googleapis.com/life-personal-network/profile/avatar2.jpg'},
            {firstname: 'Mélissa', lastname: 'Blondy', living_place: 'Nice', last_msg_date: '07/06/2017 21:07', avatar: 'https://storage.googleapis.com/life-personal-network/profile/avatar.jpg'},
            {firstname: 'Logan', lastname: 'Hansburger', living_place: 'Madrid', last_msg_date: '10/09/2017 21:09', avatar: 'https://storage.googleapis.com/life-personal-network/profile/avatar2.jpg'},
            {firstname: 'Britney', lastname: 'Spears', living_place: 'Londres', last_msg_date: '01/02/2017 22:09', avatar: 'https://storage.googleapis.com/life-personal-network/profile/avatar.jpg'},
            {firstname: 'Rihanna', lastname: 'Song', living_place: 'Sidney', last_msg_date: '03/09/2017 23:59', avatar: 'https://storage.googleapis.com/life-personal-network/profile/avatar2.jpg'},
            {firstname: 'Françoise', lastname: 'Mam', living_place: 'New York', last_msg_date: '10/12/2017 07:09', avatar: 'https://storage.googleapis.com/life-personal-network/profile/avatar.jpg'},
            {firstname: 'Phillippe', lastname: 'Pap', living_place: 'Washington', last_msg_date: '09/07/2015 12:01', avatar: 'https://storage.googleapis.com/life-personal-network/profile/avatar2.jpg'},
            {firstname: 'Alice', lastname: 'Mum', living_place: 'Los Angeles', last_msg_date: '10/12/2017 23:21', avatar: 'https://storage.googleapis.com/life-personal-network/profile/avatar.jpg'},
            {firstname: 'The group', lastname: 'Cranberries', living_place: 'San Francisco', last_msg_date: '09/07 /2017 13:11', avatar: 'https://storage.googleapis.com/life-personal-network/profile/avatar2.jpg'},
            {firstname: 'Ally', lastname: 'McBeal', living_place: 'Boston', last_msg_date: '10/12/2017 20:00', avatar: 'https://storage.googleapis.com/life-personal-network/profile/avatar.jpg'},
            {firstname: 'Antony', lastname: 'Vasano', living_place: 'Paris', last_msg_date: '07/04/2016 17:01', avatar: 'https://storage.googleapis.com/life-personal-network/profile/avatar2.jpg'},
            {firstname: 'Aither', lastname: 'Seal', living_place: 'Genève', last_msg_date: '07/11/2016 19:01', avatar: 'https://storage.googleapis.com/life-personal-network/profile/avatar.jpg'},
            {firstname: 'Anita', lastname: 'Benglador', living_place: 'Inde', last_msg_date: '09/07/2011 14:01', avatar: 'https://storage.googleapis.com/life-personal-network/profile/avatar2.jpg'},
            {firstname: 'Ace', lastname: 'Champaign', living_place: 'Quebec', last_msg_date: '10/04/2008 01:09', avatar: 'https://storage.googleapis.com/life-personal-network/profile/avatar.jpg'},
        ]
    }

    render() {
        return (
            <div id="list-of-friends-mobile">
                <div className='myFriends-mob-menu'>
                    <div>
                        <Icon name='newspaper-o' />
                        <FormattedMessage id='profile.news' />
                    </div>
                     <div className='myFriendsTab'>
                        <Icon name='users' />
                        <FormattedMessage id='myFriends.title' />
                    </div>
                    <div>
                        <Icon name='comments-o' />
                        <FormattedMessage id='profile.messages' />
                    </div>       
                </div>
                <div className='myFriends-mob-search'>
                    <div><Icon name='search' /></div>
                    <div><input type='text' placeholder='Contact...' /></div>
                </div>
                <FriendsBlocs ListOfFriends={this.ListOfFriends} />
            </div>
        )
    }
}

export default ListOfFriends
