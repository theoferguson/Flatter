import logo from './logo.svg';
import './App.css';
import Header from './Header'
import WallContainer from './WallContainer'
import AllProfiles from './AllProfiles'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Personal from './Personal';
import Friendslist from './Friendslist'
import Signup from './SignUp';
import { useEffect, useState } from 'react';

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

  if (user) {
    return (
      <Router>
        <div className="App">
          <Header>
          </Header>
          <Personal>
          </Personal>
          <Friendslist>
          </Friendslist>
          <Switch>
            <Route path="/">
              <WallContainer>
              </WallContainer>
            </Route>

            <Route path="/allprofiles">
              <AllProfiles>

              </AllProfiles>
            </Route>




          </Switch>

        </div>
      </Router>
    );
  } else {
    return <Signup onLogin={onLogin} />;
  }
}

export default App;
