
function ProfileCard({user}) {

    return (
        <div className="ProfileCard">
            <li>
                {user.username}
                <p>
                    {user.full_name}
                    {user.hometown}
                </p>
            </li>
        </div>
    )

}

export default ProfileCard;