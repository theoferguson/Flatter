import { Link } from 'react-router-dom';

function UserCard({ user, handleFriends }) {
    return (
        <div className="ProfileCard">
            <li>
                {user.username}
                <h1>
                    {user.full_name}
                    <p>{user.hometown}</p>
                 </h1>
                    <Link to={`/allprofiles/${user.id}`}>See Full Profile </Link>
                    <button onClick={(e)=> handleFriends(e, user)}>Add Friend</button>
            </li>
        </div>
    )
};

export default UserCard;