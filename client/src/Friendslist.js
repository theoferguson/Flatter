import UserCard from './UserCard';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import ProfilePage from './ProfilePage';


function Friendslist({ user, users }) {

    const friendIds = user.friends

    const allFriendCards = users.map((friend) => {
        for (let i = 0; i < friendIds.length; i++) {
            if (friend.id == friendIds[i]) {
                console.log("ok")
                return (
                    <UserCard user={friend} friend={true} />
                )
            }
        }
    })

    return (
        <div className="Friendslist">
            <p> Friends
            </p>
            <Switch>
                <Route exact path='/friends/:id'>
                    <ProfilePage />
                </Route>
                <Route path='/'>
                    {allFriendCards}
                </ Route>

            </Switch>
        
            <p> Friends</p>
       </div>
    )

}

export default Friendslist;