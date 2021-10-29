import UserCard from "./UserCard";
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import ProfilePage from "./ProfilePage";

function AllProfiles({handleFriends, users, setUsers}) {

    useEffect(() => {
        fetch('/users')
            .then(res => res.json())
            .then(json => {
                setUsers(json)
            })
    }, []);

    const allUserCards = users.map((user) => {
        return (
                <UserCard user={user} handleFriends={handleFriends}/>
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
                        <h1> All Profiles
                        </h1>
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