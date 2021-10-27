import { useState, useEffect } from 'react'
import NewStatusForm from "./NewStatusForm";

function WallContainer({ user }) {
    const [content, setContent] = useState([]);
    const [commentLoad, setCommentLoad] = useState(false)


    useEffect(() => {
        fetch("/comments")
            .then((r) => r.json())
            .then(statusArray => {
                setContent(statusArray)
            })
    }, commentLoad);

    console.log(content)

    const listComments = content.map((comment) =>
        <li>{comment.content}</li>
       
    );

    function handleNewStatus() {
        setCommentLoad(!commentLoad)
    }

    return (
        <div className="Wall">
            <p> wall
            </p>
            <NewStatusForm user={user} handleNewStatus={handleNewStatus} />
            {/* {listComments} */}
        </div>
    );

}

export default WallContainer;