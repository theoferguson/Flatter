import { useState } from 'react';

function Login({ onLogin}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username,
                password
            }),
        })
            .then((r) => r.json())
            .then((user) => onLogin(user));
    }

    return (
        <div>
            <div className="login">
                
                <form onSubmit={handleSubmit}>
                    <div className="login-style"> Login
                        <div>
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}/>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                        <button type="submit">Login</button>
                    </div>
                </form>
            </div>
        </div>
        
    );
};

export default Login;