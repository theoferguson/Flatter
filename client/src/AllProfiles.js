import UserCard from "./UserCard";
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import ProfilePage from "./ProfilePage";

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
                <Link to={`/allprofiles/${user.id}`}>
                    <UserCard user={user} />
                </Link>
            </li>
        )
    })

    return (
        <Router>
            <div className="Wall">
                <Switch>
                    <Route exact path='/allprofiles/:id'>
                        <ProfilePage />
                    </Route>
                    <Route path='/allprofiles'>
                        <p> ALL
                        </p>
                        <ul>
                            {allUserCards}
                        </ul>
                    </Route>
                </Switch>

            </div>
        </Router>
    )

}

export default AllProfiles;