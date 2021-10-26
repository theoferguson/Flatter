import { useState } from 'react';
import './SignUp.css';

function Signup({ onLogin }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [newUser, setNewUser] = useState({});

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/signup", {
            method: "POST",
            headers: {
                "Content-type": "applicaiton/json",
            },
            body: JSON.stringify({
                username,
                password,
                password_confirmation: passwordConfirmation,
                newUser
            }),
        })
            .then((r) => r.json())
            .then(onLogin);
    }

    function handleChange(event) {
        setNewUser({ ...newUser, [event.target.name]: event.target.value })
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
            <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <label htmlFor="password">Password:</label>
            <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="password_confirmation">Confirm Password:</label>
            <input
                type="password"
                id="password_confirmation"
                value={passwordConfirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
            />
            <label htmlFor="full_name">Full Name:</label>
            <input
                type="text"
                id="full_name"
                value={newUser.full_name}
                onChange={(e) => handleChange}
            />
            <label htmlFor="program">Program:</label>
            <input
                type="text"
                id="program"
                value={newUser.program}
                onChange={(e) => handleChange}
            />
            <label htmlFor="hometown">Hometown:</label>
            <input
                type="text"
                id="hometown"
                value={newUser.hometown}
                onChange={(e) => handleChange}
            />
            <label htmlFor="profile_picture">Profile Picture:</label>
            <input
                type="text"
                id="image_url"
                value={newUser.image_url}
                onChange={(e) => handleChange}
            />
            <label htmlFor="bio">Biography:</label>
            <input
                type="text"
                id="bio"
                value={newUser.bio}
                onChange={(e) => handleChange}
            />
            <button type="submit">Submit</button>
        </form>
    );
}

export default Signup;