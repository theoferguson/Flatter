import React from "react";
import { useState } from "react";

function NewStatusForm({ handleNewStatus, user }) {
    const [content, setContent] = useState("")


    function handleSubmit(e) {
        e.preventDefault()
        console.log(content)

        fetch("/comments", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                content: content,
                user_id: user.id,
                wall_id: 1
            })
        })
            .then((r) => r.json())
            .then((newStatus) => {
                handleNewStatus()
                setContent("")
            })

    }


    return (
        <div className="new-status-form">
            <h2>New Status</h2>
            <form onSubmit={handleSubmit} >
                <input type="text" content="status" placeholder="new status..." value={content} onChange={(e) => setContent(e.target.value)} />

                <button type="submit">Update Status</button>
            </form>
        </div>
    );
}

export default NewStatusForm;
