import React from 'react';

class Follower extends React.Component {
    render () {
        return (
        <div id='followers'>
            <div className='follower'>
            <img src="https://avatars.githubusercontent.com/u/6520868?v=4" />
            <a target="_blank" rel='noreferrer' href="https://github.com/MarkRivera"><p>MarkRivera</p></a>
            </div>

            <div className='follower'>
            <img src="https://avatars.githubusercontent.com/u/75545636?v=4" />
            <a target="_blank" rel='noreferrer' href="https://github.com/Cheyenneb96"><p>Cheyenneb96</p></a>
            </div>
        </div>);
    }
}

export default Follower;