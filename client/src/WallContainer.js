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
            <h1>Wall</h1> 
            

            <NewStatusForm user={user} handleNewStatus={handleNewStatus} handleDeleteComments={handleDeleteComments} />

            <div className="comments"> {listComments} </div>
            <span className="delete-comment">
            {content.map((comment) => (
                <div key={comment.id}>
                    <button onClick={() => handleDeleteComments(comment.id)}>
                          Delete
                    </button>
               
                </div>
            ))}
            </span>
            

        </div>
    );

}

export default WallContainer;