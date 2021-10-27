import UserCard from "./UserCard";
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

    const allUserCards = users.map((user) => {
        return (
            <li>
                <UserCard user={user} />
            </li>
        )
    })

    return (
        <div className="Wall">
            <p> ALL
            </p>
            <ul>
                {allUserCards}
            </ul>
        </div>
    )

}

export default AllProfiles;