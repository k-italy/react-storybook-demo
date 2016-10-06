import React from 'react';
import ui from 'redux-ui';

import ToggleParagraph from '../components/ToggleParagraph';

const ToggleParagraphContainer = ui({
  state: { isOpen: true }
})(ToggleParagraph);

export default ToggleParagraphContainer;
