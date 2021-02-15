import React from 'react';

import loadable from '@loadable/component';
import {
  Route,
  Link,
  Switch,
  useRouteMatch
} from 'react-router-dom';

export default function Topics() {
  const Topic = loadable(() => import('./topic'));
  const match = useRouteMatch();
  console.log(match);
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${match.url}/components`}>
            Components
          </Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>
            Props v. State
          </Link>
        </li>
      </ul>
      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <Topic />
        </Route>
        <Route path={match.path}>
          <h3>Please select a topic</h3>
        </Route>
      </Switch>
    </div>
  );
}
