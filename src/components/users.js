import React from 'react';

import myRouteMatch from './helpers.js';

export default function Users() {
  console.log(myRouteMatch());
  return <h2>Users</h2>;
}
