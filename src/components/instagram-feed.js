import React from 'react';

import { useInstagram } from '../hooks';

function InstagramFeed() {
  const posts = useInstagram();

  console.log(posts);
  return <h1>hello</h1>;
}

export { InstagramFeed };
