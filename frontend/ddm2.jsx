import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configuredStore from './store/store';
debugger

document.addEventListener('DOMContentLoaded', () => {
  // let store;
  // if(window.currentUser) {
  //   const preloadedState = {
  //     session: { id: window.currentUser.id },
  //     entities: {
  //       users: { [window.currentUser.id]: currentUser }
  //     }
  //   };
  //   store = configuredStore(preloadedState);
  //   delete window.currentUser;
  // } else {
  let store = configuredStore();
  // }

  debugger
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});