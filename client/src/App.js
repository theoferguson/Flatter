import logo from './logo.svg';
import './App.css';
import Header from './Header'
import WallContainer from './WallContainer'
import AllProfiles from './AllProfiles'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Personal from './Personal';
import Friendslist from './Friendslist'
import Signup from './SignUp';
import { useEffect, useState } from 'react';
import Login from './Login';

function App() {
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('/me').then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  function onLogin() {
    fetch('/me').then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  };

  function onLogout() {
    fetch('/me').then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      } else {
        setUser(null)
      }
    });
  };

  function handleFriends(e, props){
    e.preventDefault()
    console.log(props.id)
    fetch (`/users/${user.id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        }, body: JSON.stringify(props)
    }) 
    .then((r)=> r.json())
    .then(userDeets => console.log(userDeets))
}

  if (user) {
    return (
      <Router>
        <div className="App">
          <Header onLogout={onLogout} user={user} />
          <Personal />
          <Friendslist user={user} users={users} />
        </div>
        <Switch>
          <Route path="/allprofiles">
            <AllProfiles handleFriends={handleFriends} users={users} setUsers={setUsers} />
          </Route>
          <Route path="/">
            <WallContainer user={user} />
          </Route>
        </Switch>
      </Router>
    );
  } else {
    return <>
      <Signup onLogin={onLogin} />
      <Login onLogin={onLogin} />
    </>;
  }
}

export default App;
