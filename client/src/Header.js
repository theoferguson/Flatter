import { Route, Link } from 'react-router-dom';

function Header() {

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
            </div>
          
        </div>
    )

}

export default Header;