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
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                username,
                password,
                password_confirmation: passwordConfirmation
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
            <div>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    name="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="password_confirmation">Confirm Password:</label>
                <input
                    type="password"
                    name="password_confirmation"
                    value={passwordConfirmation}
                    onChange={(e) => setPasswordConfirmation(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="full_name">Full Name:</label>
                <input
                    type="text"
                    name="full_name"
                    value={newUser.full_name}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="program">Program:</label>
                <input
                    type="text"
                    name="program"
                    value={newUser.program}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="hometown">Hometown:</label>
                <input
                    type="text"
                    name="hometown"
                    value={newUser.hometown}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="profile_picture">Profile Picture:</label>
                <input
                    type="text"
                    name="image_url"
                    value={newUser.image_url}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="bio">Biography:</label>
                <input
                    type="text"
                    name="bio"
                    value={newUser.bio}
                    onChange={handleChange}
                />
            </div>
            <button type="submit">Create Account</button>
        </form>
    );
}

export default Signup;