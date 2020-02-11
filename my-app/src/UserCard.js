import React, {Component} from 'react';


class UserCard extends Component {
    constructor() {
        super();
        this.state = {
            me: []
        };
    }

    render() {
        return (
            <div>
            {console.log(this.props.userCard)}
            <img src={this.props.userCard.avatar_url} />
            <h2>{this.props.userCard.name}</h2>
            <p>{this.props.userCard.location}</p>
            <p>{this.props.userCard.bio}</p>
            </div>
        )
    }
}

export default UserCard;