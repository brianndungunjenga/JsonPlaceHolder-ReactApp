import React, { Component } from 'react';
// import './App.css';
import Contacts from './components/contacts';

class App extends Component {

  state = {
    contacts: [],
  }

  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then((data) => {
        this.setState({ contacts: data })
        console.log(data)
      })
      .catch(console.log)
  }

  render() {
    return (
      <Contacts contacts={this.state.contacts} />
    );
  }
}

export default App;
