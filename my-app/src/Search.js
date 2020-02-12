import React from 'react';
import axios from 'axios';

class Search extends React.Component {
    constructor() {
        super();
        this.state = {
            searchInput: '',
            searchResult: ''
        };
    }

    componentDidMount() {
console.log('mount')
    }

    componentDidUpdate(){
        // axios
        // .get(`https://api.github.com/users/${this.state.searchInput}`)
        // .then(res => {
        //     this.setState({
        //         searchResult: res.data.name
        //     })
        // })
    }

    handleChanges = e => {
        this.setState({
            searchInput: e.target.value
        });
    }

    findUser = e => {
        e.preventDefault();
        axios
        .get(`https://api.github.com/users/${this.state.searchInput}`)
        .then(res => {
            this.setState({
                searchResult: res.data.name
            })
        })
    }

    render() {
        return (
            <div>
              <input type='text' name='text' value={this.state.members} onChange={this.handleChanges} />

              <button onClick={this.findUser}>Find User</button>
            </div>
        )
    }
}

export default Search;