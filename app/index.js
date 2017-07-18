import React from 'react';
import { render } from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import AOS from 'aos';
import NpcContainer from './components/npc/npcContainer';
import chronicleContainer from './components/chronicle/chronicleContainer';
import SplashContainer from './components/splash/splashContainer';

import { reducer } from './reducers';
import {
    fetchNpc,
    fetchChroncile
} from './actions'

//Setup the store and initial state of the app
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, /* preloadedState, */ composeEnhancers(
    applyMiddleware(thunk)
  ));


//store.dispatch(fetchPeople());
store.dispatch(fetchNpc());
store.dispatch(fetchChroncile());


//Save store on windows for easy access from the dev-tool console
window.store = store;

 AOS.init();

//Add unique function to Array
Array.prototype.unique = function() {
  return this.filter(function (value, index, self) {
    return self.indexOf(value) === index;
  });
}

render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={chronicleContainer}/>
            <Route path="/chronicle" component={chronicleContainer}/>
            <Route path="/npc" component={NpcContainer}/>
            <Route path="/splash" component={SplashContainer}/>
    </Router>
  </Provider>,
    document.getElementById('app')
);
