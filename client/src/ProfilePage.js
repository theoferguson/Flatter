import { useEffect, useState } from "react";
function ProfilePage() {
    const [profile, setProfile] = useState([]);

    useEffect(() => {
        fetch(`${window.location}`)
            .then(res => res.json())
            .then(json => {
                setProfile(json)
            })
    }, []);

    // const ProfileComments = profile.wall.comments.map((comment) =>
    //     <li>{comment.content}</li>
    // );

    return (
        <div className="ProfileCard">
            <h3>Username:</h3>
            <p>{profile.username}</p>
            <h3>Full Name:</h3>
            <p>{profile.full_name}</p>
            <h3> Program:</h3>
            <p>{profile.program}</p>
            <h3> Hometown: </h3>
            <p> {profile.hometown}</p>
            <h3>Bio:</h3>
            <p>{profile.bio} </p>
            <ul>Comments:
                {/* {ProfileComments} */}
            </ul>
        </div>
    );
};

export default ProfilePage;