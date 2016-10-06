import React from 'react';
import { configure, setAddon } from '@kadira/storybook';
import 'todomvc-app-css/index.css'
import infoAddon from '@kadira/react-storybook-addon-info';
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { reducer as uiReducer } from 'redux-ui'

setAddon(infoAddon);

setAddon({
  infoAddon,
  addWithRedux(storyName, storyFn) {

    const store = createStore(
      combineReducers({
        ui: uiReducer
      }),
      {}
    );

    this.add(storyName, (context) => (
      <Provider store={store}>
        {storyFn(context)}
      </Provider>
    ));
  }
});

function loadStories() {
  require('../components/stories/');
  require('../containers/stories/');
}

configure(loadStories, module);
