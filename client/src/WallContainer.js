import { useState, useEffect } from 'react'
import NewStatusForm from "./NewStatus";

function WallContainer() {
    const [content, setContent] = useState("");


    useEffect(() => {
        fetch("http://localhost:4000")
            .then((r) => r.json())
            .then(statusArray => {
                setContent(statusArray)
            })
    }, [])

    function handleNewStatus(newStatus) {
        const updatedStatus = [...content, newStatus];
        setContent(updatedStatus)

    }

    return (
        <div className="Wall">
            <p> Wall
            </p>
        
        <NewStatusForm handleNewStatus={handleNewStatus}/>
        </div>
    )

}

export default WallContainer;