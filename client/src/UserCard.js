import { Link } from 'react-router-dom';

function UserCard({ user, handleFriends, friend }) {
    return (
        <div className="ProfileCard">
            <h2>{user.username}</h2>
            <img src="{user.image_url}" width="40" height="40" alt="prof pic" />
            <p>{user.full_name}</p>
            <p>{user.hometown}</p>
            {friend ? <Link to={`/friends/${user.id}`}>See full Profile</Link> : <Link to={`/allprofiles/${user.id}`}>See Full Profile </Link>}
            {friend ? null : <button onClick={(e) => handleFriends(e, user)}>Add Friend</button>}
        </div>
    )
};

export default UserCard;