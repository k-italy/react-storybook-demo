import { configure, setAddon } from '@kadira/storybook';
import 'todomvc-app-css/index.css'
import infoAddon from '@kadira/react-storybook-addon-info';

setAddon(infoAddon);

function loadStories() {
  require('../components/stories/');
}

configure(loadStories, module);
