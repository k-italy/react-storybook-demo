import React from 'react';
import People from '../People';
import { storiesOf } from '@kadira/storybook';

storiesOf('People', module)
  .add('with non-empty list', () => {
    const users = [ { name: 'Taro' }, { name: 'Jiro' } ];
    return (
      <People users={users} />
    );
  })
  .add('with empty list', () => {
    const users = [];
    return (
      <People users={users} />
    );
  });
