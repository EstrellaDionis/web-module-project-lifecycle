import React from 'react';

class User extends React.Component {
    render () {
        return (
            <div id='UserCard'>
            <img src="https://avatars.githubusercontent.com/u/87622513?v=4" />
            <a target="_blank" rel='noreferrer' href="https://github.com/EstrellaDionis"><h3>Dionis Estrella</h3></a>
            <p>Estrella Dionis</p>
            <p>Total Repos: 35</p>
            <p>Total Followers: 2</p>
          </div>
        )
    }
}

export default User;