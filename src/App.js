import React from 'react';
import User from './components/User'
import FollowerList from './components/FollowerList';
import axios from 'axios';
'./App.css';

class App extends React.Component {
  state = {
    currentUser: "EstrellaDionis",
    user: {},
    followers: []
  }

  componentDidMount () {
    axios.get(`https://api.github.com/users/${this.state.currentUser}`)
    .then(resp => {
      console.log(resp);
      this.setState({
        ...this.state,
        user: resp.data});
    })
  }

  //line 55 in readMe only loading data when slice of state changes
  componentDidUpdate(prevProps, prevState) {
    if(this.state.user !== prevState.user){
      axios.get(`https://api.github.com/users/${this.state.currentUser}/followers`)
      .then(resp => {
        console.log(resp)
        this.setState({
          ...this.state,
          followers: resp.data
        });
      })
    }
  }

  //57 in readme. building search capabilities within app
  handleChange = (e) => {
    this.setState({
      ...this.state,
      currentUser: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('clicked the submit button');
    axios.get(`https://api.github.com/users/${this.state.currentUser}`)
    .then(resp => {
      console.log(resp);
      this.setState({
        ...this.state,
        user: resp.data});
    })
  }
  
  render() {
    console.log(this.state);
    return(<div>
      <h1>Github Info</h1>
      <form onSubmit={this.handleSubmit}>
        <input placeholder='Github Handle' onChange={this.handleChange}/>
        <button>Search</button>
      </form>

      <User user={this.state.user}/>
      <FollowerList followers={this.state.followers}/>
     

      </div>
    );
  }
}

export default App;
