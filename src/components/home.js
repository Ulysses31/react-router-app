import React from 'react';

import myRouteMatch from './helpers';

export default function Home() {
  console.log(myRouteMatch());
  return <h2>Home</h2>;
}
