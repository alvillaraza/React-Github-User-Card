import React from 'react';


function Followers(props) {
    return (
        <div>
            {props.followers.map(follower => (
                <div key={follower.id}>
                <img src={follower.avatar_url} alt={`profile of ${follower.name}`} />
                <h3>{follower.login}</h3>
                <p>{follower.html_url}</p>
                <p>{follower.bio}</p>
                </div>
            ))}
        </div>
    )
}

export default Followers;