import React from 'react';
import Follower from './Follower'

class FollowerList extends React.Component {
    render () {
        return(
        <div id='followers'>
            <Follower />         
        </div>);
    }
}

export default FollowerList;