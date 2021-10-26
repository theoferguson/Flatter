import { Route, Link } from 'react-router-dom';

function Header({onLogout}) {

    function handleLogout() {
        fetch("/logout", {
            method: "DELETE",
        }).then(() => onLogout());
    }

    return (
        <div className="App-header">
            <p> Welcome to Flatter</p>
            <div className="Header-buttons">
                <Link to={`/allprofiles`}>
                    <button>
                        All Profiles
                    </button>
                </Link>
                <Link to={`/`}>
                    <button>
                        Wall
                    </button>
                </Link>
                <button onClick={handleLogout}>Logout</button>
            </div>

        </div>
    )

}

export default Header;