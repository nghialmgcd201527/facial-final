import * as React from 'react';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
import { Home } from './component/Home';
import { Admin } from './component/Admin';

function App() {
  return (
    <Router forceRefresh={true}>
      <div>
        {/* <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/admin">Admin</Link>
          </li>
        </ul> */}

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/admin" component={Admin} />
        </Switch>
      </div>
    </Router>
  );
}
export default App;