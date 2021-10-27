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

    function handleDeleteComments(id) {
        fetch(`/comments/${id}`, {
            method: "DELETE",
        }).then((r) => {
            if (r.ok) {
                setContent((content) =>
                    content.filter((comment) => comment.id !== id)
                );

            }
        });
    }

    return (
        <div className="Wall">
            <p> wall
            </p>

            <NewStatusForm user={user} handleNewStatus={handleNewStatus} handleDeleteComments={handleDeleteComments} />

            {listComments}

            {content.map((comment) => (
                <li key={comment.id}>
                    <button onClick={() => handleDeleteComments(comment.id)}>
                        Delete
                    </button>
                </li>
            ))}


        </div>
    );

}

export default WallContainer;