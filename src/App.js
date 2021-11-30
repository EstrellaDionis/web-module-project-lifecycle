import React from 'react';
'./App.css';

class App extends React.Component {
  render() {
    return(<div>
      <h1>Github Info</h1>
      <form>
        <input placeholder='Github Handle'/>
        <button>Search</button>
      </form>
      <div id='UserCard'>
        <img src="https://avatars.githubusercontent.com/u/87622513?v=4" />
        <a target="_blank" rel='noreferrer' href="https://github.com/EstrellaDionis"><h3>Dionis Estrella</h3></a>
        <p>Estrella Dionis</p>
        <p>Total Repos: 35</p>
        <p>Total Followers: 2</p>
      </div>

      <div id='followers'>
          <div className='follower'>
            <img src="https://avatars.githubusercontent.com/u/6520868?v=4" />
            <a target="_blank" rel='noreferrer' href="https://github.com/MarkRivera"><p>MarkRivera</p></a>
          </div>
      </div>
    </div>
    );
  }
}

export default App;
