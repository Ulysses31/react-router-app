import React from 'react';

import loadable from '@loadable/component';
import { Route, Link, Switch } from 'react-router-dom';

const Home = loadable(() => import('./components/home'));
const About = loadable(() => import('./components/about'));
const Users = loadable(() => import('./components/users'));
const Topics = loadable(() =>
  import('./components/topics')
);

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/users'>Users</Link>
          </li>
          <li>
            <Link to='/topics'>
              Topics (Nested Routing)
            </Link>
          </li>
        </ul>
      </nav>
      <hr />
      <Switch>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/users'>
          <Users />
        </Route>
        <Route path='/topics'>
          <Topics />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
