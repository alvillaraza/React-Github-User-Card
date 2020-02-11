import React, {Component} from 'react';


class UserCard extends Component {
    constructor() {
        super();
        this.state = {
            villaraza: '',
        };
    }

    render() {
        return (
            <div>
            {console.log(this.props.villaraza)}    
            </div>
        )
    }
}

export default UserCard;