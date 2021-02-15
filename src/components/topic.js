import React from 'react';

import { useParams } from 'react-router-dom';

export default function Topic() {
  const { topicId } = useParams();
  console.log(topicId);
  return (
    <div>
      <h2>Topic</h2>
      <p>Requested topic id is {topicId}</p>
    </div>
  );
}
