import ProfileCard from "./ProfileCard";
import { useEffect, useState } from 'react';

function AllProfiles() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('/users')
        .then(res => res.json())
        .then(json => {
            setUsers(json)
        })
    }, []);



    return (
        <div className="Wall">
            <p> ALL
            </p>
            {/* <ProfileCard>
            </ProfileCard> */}
        </div>
    )

}

export default AllProfiles;