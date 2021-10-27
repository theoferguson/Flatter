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

    const allProfileCards = users.map((user) => {
        return (
            <li>
                <ProfileCard user={user} />
            </li>
        )
    })

    return (
        <div className="Wall">
            <p> ALL
            </p>
            <ul>
                {allProfileCards}
            </ul>
        </div>
    )

}

export default AllProfiles;