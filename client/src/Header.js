import { Route, Switch, Link } from 'react-router-dom';
import WallContainer from './WallContainer';
import AllProfiles from './AllProfiles';

function Header({ onLogout, user }) {

    function handleLogout() {
        fetch("/logout", {
            method: "DELETE",
        }).then(() => onLogout());
    }

    return (
        <div className="App-header">
            <h1> Welcome to Flatter!</h1>
            <div className="Header-buttons">
                <Link to="/allprofiles">
                    <button>All Profiles</button>
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