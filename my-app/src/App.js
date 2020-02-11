import React from 'react';
import axios from 'axios';
import UserCard from './UserCard';

import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
    console.log("constructor is running");
  }

  componentDidMount() {
    axios
    .get('https://api.github.com/users/alvillaraza')
    .then(res => {
      this.setState({
        users: res.data
    });
  })
    .catch(err => console.log("err"));
  }

  render () {
  return (
    <div className="App">
      <header className="App-header">
       <UserCard />
      </header>
    </div>
  );
  }}

export default App;
