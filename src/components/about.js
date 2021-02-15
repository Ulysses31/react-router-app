import React from 'react';

import myRouteMatch from './helpers';

export default function About() {
  console.log(myRouteMatch());
  return <h2>About</h2>;
}
