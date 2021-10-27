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

  if (user) {
    return (
      <Router>
        <div className="App">
          <Header onLogout={onLogout} user={user} />
          <Personal>
          </Personal>
          <Friendslist>
          </Friendslist>
        </div>
        <Switch>
          <Route path="/allprofiles">
            <AllProfiles />
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
