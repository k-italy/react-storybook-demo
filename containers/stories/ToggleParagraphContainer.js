import React from 'react';
import { storiesOf } from '@kadira/storybook';

import ToggleParagraphContainer from '../ToggleParagraphContainer';

storiesOf('ToggleParagraphContainer', module)
  .addWithRedux('normal', () => {
    return (
      <ToggleParagraphContainer/>
    );
  });
