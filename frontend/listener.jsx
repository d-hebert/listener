import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store'
import Root from './components/root'
import { load } from './actions/session_actions'

document.addEventListener('DOMContentLoaded', () => {
  
  let store;

  // bootstrapping current_user from root:
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id },
    }
    store = configureStore(preloadedState);
  } else {
      store = configureStore();
  }
    store.dispatch(load({ id: -1 }));

  // testing begin
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  // testing end

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root)

});