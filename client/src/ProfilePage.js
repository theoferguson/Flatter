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

    function commentLoad() {
        if (profile.comments) {
            profile.comments.map((comment) => {
            return (
                <li>{comment.content}</li>
            )
            })
            console.log(profile.comments)
        } else {
            return (
            <p>no comments</p>
            )
        }
    };

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
                <h3>Comments:
                    {commentLoad()}
                </h3>
            </div>
        );
    };

    export default ProfilePage;