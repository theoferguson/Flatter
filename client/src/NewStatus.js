import React from "react";
import { useState } from "react";

function NewStatusForm({ handleNewStatus }) {
    const [content, setContent] = useState("")
    const [userID, setUserID] = useState("")
    const [wallID, setWallID] = useState("")
    

    function handleSubmit(e) {
        e.preventDefault()
        console.log(content)
    
        fetch("http://localhost:4000", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                content: content,
                wall_id: wallID,
                user_id: userID,
                

            })
        })
            .then((r) => r.json())
            .then((newStatus) => handleNewStatus(newStatus))

    }


    return (
        <div className="new-status-form">
            <h2>New Status</h2>
            <form onSubmit={handleSubmit} >
                <input type="text" content="content"  placeholder="new status..." value={content} onChange={(e) => setContent(e.target.value)} />
                <input type="text" wallID="wallID" placeholder="wallID..." value={wallID} onChange={(e) => setWallID(e.target.value)} />
                <input type="text" userID="userID" placeholder="userID..." value={userID} onChange={(e) => setUserID(e.target.value)} />
                <div className="form-buttons">
                    <button type="submit">Update Status</button>
                </div>
            </form>
        </div>
    );
}

export default NewStatusForm;
