
function UserCard({ user }) {
    return (
        <div className="ProfileCard">
            <li>
                {user.username}
                <h1>
                    {user.full_name}
                    <p>{user.hometown}</p>
                </h1>
            </li>
        </div>
    )
};

export default UserCard;