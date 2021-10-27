import React, { useEffect, useState } from "react";
import Modal from "./Modal";
function ProfileCard() {
    const [deets, setDeets] = useState([]);
    const [edit, setEdit] = useState("")
    const [show, setShow ] = useState(false);

    useEffect(() => {
        fetch("/me")
            .then((r) => r.json())
            .then(userDeets => {
                setDeets({
                    fullname: userDeets.full_name,
                    hometown: userDeets.hometown,
                    program: userDeets.program,
                    bio: userDeets.bio,
                    id: userDeets.id
                })
            })
    }, []) 

    function handleEdit(event, id){
        event.preventDefault()
        fetch (`/users/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            }, body: JSON.stringify({bio: edit})
        }) 
        .then((r)=> r.json())
        .then(userDeets => setDeets({
            fullname: userDeets.full_name,
            hometown: userDeets.hometown,
            program: userDeets.program,
            bio: edit,
            id: userDeets.id
        }))
    }
    

    return (
        <div className="ProfileCard">
            <h3>Full Name:</h3>
            <p>{deets.fullname}</p>
            <h3> Program:</h3>
            <p>{deets.program}</p>
            <h3> Hometown: </h3>
            <p> {deets.hometown}</p>
            <h3>Bio:</h3>
            <p>{deets.bio} </p>
            <button onClick={()=> setShow(show => !show)}></button>
            <Modal onClose={()=>setShow(show => !show)} show={show} edit={edit} setEdit={setEdit} handleEdit={handleEdit}/>
        </div>
    )

}

export default ProfileCard;