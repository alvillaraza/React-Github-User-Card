import React, {Component} from 'react';
import Axios from 'axios';
import Followers from './Followers';

class UserCard extends Component {
    constructor() {
        super();
        this.state = {
            followers: []
        };
    }

    componentDidMount() {
        Axios
        .get('https://api.github.com/users/alvillaraza/followers')
        .then(res => {
            // console.log("Axios", res.data);
            this.setState({
                followers: res.data
            });
        })
        .catch(err => console.log('error'));
    }
  

    render() {
        return (
            <div>
                {console.log("UserCard.js", this.state)}
                <img src={this.props.userCard.avatar_url} alt={`Profile of ${this.props.userCard.name}`} />
                <h2>{this.props.userCard.name}</h2>
                <p>{this.props.userCard.location}</p>
                <p>{this.props.userCard.bio}</p>

                <Followers followers={this.state.followers} />
            </div>
        );
    }
}
export default UserCard;