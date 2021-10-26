import logo from './logo.svg';
import './App.css';
import Header from './Header'
import WallContainer from './WallContainer'
import AllProfiles from './AllProfiles'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Personal from './Personal';
import Friendslist from './Friendslist'

function App() {
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
}

export default App;
