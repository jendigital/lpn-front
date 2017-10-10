import React, { Component } from 'react'
import './index.css'
import { FormattedMessage } from 'react-intl'
import $ from 'jquery'
import Cookie from '../../../components/commun/cookie'

function Friends(props) {
    const firstLetter = props.FirstLetter;
    const friends = props.List;

    const injectFriendsInBloc = friends.map(function(friend) {
        if(friend.firstname.charAt(0) == firstLetter) {
            return (
                <div className='friend'>
                    <div className='avatar'>
                        <img src={friend.avatar} />
                    </div>
                    <div className='info'>
                        <h6>{friend.firstname} {friend.lastname}</h6>
                        <p>{friend.living_place}</p>
                    </div>
                </div>
            )
        }
    });

    return (
        <div className='friendinfo'>
            {injectFriendsInBloc}
        </div>
    );
}

function FriendsBlocs(props) {
    const friends = props.ListOfFriends;

    const friendsSort = friends.sort(function(friendA, friendB) {
        var firstnameA = friendA.firstname.toUpperCase(); // ignore upper and lowercase
        var firstnameB = friendB.firstname.toUpperCase(); // ignore upper and lowercase

        if (firstnameA < firstnameB) {
            return -1;
        }

        if (firstnameA > firstnameB) {
            return 1;
        }

        // names must be equal
        return 0;
    });

    var firstLetter;

    const firstLetterBloc = friendsSort.map(function(friend) {
        if(friend.firstname.charAt(0) !=  firstLetter) {
            firstLetter = friend.firstname.charAt(0);
            return (
                <div className={firstLetter}>
                    <div className='first-letter'>
                        <h5>{ firstLetter }</h5>
                    </div>
                    <div className='friends'>
                        <Friends FirstLetter={firstLetter} List={friendsSort} />
                    </div>
                </div>
            )
        }
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
            {firstname: 'John', lastname: 'Doe', living_place: 'Zurich', last_msg_date: '07/09/2017', last_msg_hour: '07:09', avatar: 'https://storage.googleapis.com/life-personal-network/profile/avatar.jpg'},
            {firstname: 'Albert', lastname: 'Einstein', living_place: 'Paris', last_msg_date: '07/10/2017', last_msg_hour: '07:09', avatar: 'https://storage.googleapis.com/life-personal-network/profile/avatar2.jpg'},
            {firstname: 'Gael', lastname: 'Love', living_place: 'Montpellier', last_msg_date: '07/11/2017', last_msg_hour: '07:09', avatar: 'https://storage.googleapis.com/life-personal-network/profile/avatar.jpg'},
            {firstname: 'Melody', lastname: 'Friend', living_place: 'Pékin', last_msg_date: '09/10/2017', last_msg_hour: '07:09', avatar: 'https://storage.googleapis.com/life-personal-network/profile/avatar2.jpg'},
            {firstname: 'Maela', lastname: 'Barbie', living_place: 'Montreal', last_msg_date: '07/10/2017', last_msg_hour: '07:09', avatar: 'https://storage.googleapis.com/life-personal-network/profile/avatar.jpg'},
            {firstname: 'Clémentine', lastname: 'Fun', living_place: 'Genève', last_msg_date: '07/05/2017', last_msg_hour: '07:09', avatar: 'https://storage.googleapis.com/life-personal-network/profile/avatar2.jpg'},
            {firstname: 'Mélissa', lastname: 'Blondy', living_place: 'Nice', last_msg_date: '07/06/2017', last_msg_hour: '07:09', avatar: 'https://storage.googleapis.com/life-personal-network/profile/avatar.jpg'},
            {firstname: 'Logan', lastname: 'Hansburger', living_place: 'Madrid', last_msg_date: '11/09/2017', last_msg_hour: '07:09', avatar: 'https://storage.googleapis.com/life-personal-network/profile/avatar2.jpg'},
            {firstname: 'Britney', lastname: 'Spears', living_place: 'Londres', last_msg_date: '01/02/2017', last_msg_hour: '07:09', avatar: 'https://storage.googleapis.com/life-personal-network/profile/avatar.jpg'},
            {firstname: 'Rihanna', lastname: 'Song', living_place: 'Sidney', last_msg_date: '03/09/2017', last_msg_hour: '07:09', avatar: 'https://storage.googleapis.com/life-personal-network/profile/avatar2.jpg'},
            {firstname: 'Françoise', lastname: 'Mam', living_place: 'New York', last_msg_date: '01/01/2017', last_msg_hour: '07:09', avatar: 'https://storage.googleapis.com/life-personal-network/profile/avatar.jpg'},
            {firstname: 'Phillippe', lastname: 'Pap', living_place: 'Washington', last_msg_date: '07/09/2015', last_msg_hour: '07:09', avatar: 'https://storage.googleapis.com/life-personal-network/profile/avatar2.jpg'},
            {firstname: 'Alice', lastname: 'Mum', living_place: 'Los Angeles', last_msg_date: '07/09/2016', last_msg_hour: '07:09', avatar: 'https://storage.googleapis.com/life-personal-network/profile/avatar.jpg'},
            {firstname: 'The group', lastname: 'Cranberries', living_place: 'San Francisco', last_msg_date: '07/09/2017', last_msg_hour: '07:09', avatar: 'https://storage.googleapis.com/life-personal-network/profile/avatar2.jpg'},
            {firstname: 'Ally', lastname: 'McBeal', living_place: 'Boston', last_msg_date: '07/05/2017', last_msg_hour: '07:09', avatar: 'https://storage.googleapis.com/life-personal-network/profile/avatar.jpg'},
            {firstname: 'Antony', lastname: 'Vasano', living_place: 'Paris', last_msg_date: '07/04/2016', last_msg_hour: '07:09', avatar: 'https://storage.googleapis.com/life-personal-network/profile/avatar2.jpg'},
            {firstname: 'Aither', lastname: 'Seal', living_place: 'Genève', last_msg_date: '07/11/2016', last_msg_hour: '07:09', avatar: 'https://storage.googleapis.com/life-personal-network/profile/avatar.jpg'},
            {firstname: 'Anita', lastname: 'Benglador', living_place: 'Inde', last_msg_date: '07/09/2011', last_msg_hour: '07:09', avatar: 'https://storage.googleapis.com/life-personal-network/profile/avatar2.jpg'},
            {firstname: 'Ace', lastname: 'Champaign', living_place: 'Quebec', last_msg_date: '10/04/2008', last_msg_hour: '07:09', avatar: 'https://storage.googleapis.com/life-personal-network/profile/avatar.jpg'},
        ]
    }

    render() {
        return (
            <div id="list-of-friends-mobile">
                <FriendsBlocs ListOfFriends={this.ListOfFriends} />
            </div>
        )
    }
}

export default ListOfFriends