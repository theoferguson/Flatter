import UserCard from './UserCard';

function Friendslist({ user, users }) {

    const friendIds = user.friends

    const allFriendCards = users.map((friend) => {
        for (let i = 0; i < friendIds.length; i++) {
        if(friend.id == friendIds[i]) {
            console.log("ok")
        return (
                <UserCard user={friend} friend={true} />
        )
        }
    }})

    return (
        <div className="Friendslist">
<<<<<<< HEAD
            <p> Friends
            </p>
            {allFriendCards}
        </div>
=======
            <p> Friends</p>
       </div>
>>>>>>> d0dc2cff3f84f37a4ca2dd5835502b891e34ec69
    )

}

export default Friendslist;