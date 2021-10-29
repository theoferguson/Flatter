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
            <p> Friends
            </p>
            {allFriendCards}
        </div>
    )

}

export default Friendslist;