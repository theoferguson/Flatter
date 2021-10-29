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
            <h3>Status:</h3>
                {profile.comments ?
                profile.comments.map((comment) => {<p>{comment.content}</p>}) : <p>no status</p>}
        </div>
    );
};

export default ProfilePage;