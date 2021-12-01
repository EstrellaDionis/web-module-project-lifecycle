import React from 'react';
import User from './components/User'
import FollowerList from './components/FollowerList';
'./App.css';

class App extends React.Component {
  state = {
    currentUser: "Estrella Dionis",
    user: {
      avatar_url: "https://avatars.githubusercontent.com/u/87622513?v=4",
      html_url: "https://github.com/EstrellaDionis",
      name: "Dionis Estrella",
      login: "EstrellaDionis",
      public_repos: 35,
      followers: 2,
    },
    followers: [
      {
        avatar_url: "https://avatars.githubusercontent.com/u/6520868?v=4",
        html_url: "https://github.com/MarkRivera",
        login: "MarkRivera"
      },

      {
        avatar_url: "https://avatars.githubusercontent.com/u/75545636?v=4",
        html_url: "https://github.com/Cheyenneb96",
        login: "Cheyenneb96"
      }
    ]
  }

  render() {
    return(<div>
      <h1>Github Info</h1>
      <form>
        <input placeholder='Github Handle'/>
        <button>Search</button>
      </form>

      <User user={this.state.user}/>
      <FollowerList followers={this.state.followers}/>
     

      </div>
    );
  }
}

export default App;
