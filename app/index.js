import React from 'react';
import { render } from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'

import PeopleContainer from './containers/peopleContainer';
import NpcContainer from './components/npc/npcContainer';
import chronicleContainer from './components/chronicle/chronicleContainer';


import { reducer } from './reducers';
import {
	fetchPeople,
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

render(
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path="/" component={chronicleContainer}/>
			<Route path="/people" component={PeopleContainer}/>
			<Route path="/people/:filter" component={PeopleContainer}/>
            <Route path="/npc" component={NpcContainer}/>
    </Router>
  </Provider>,
	document.getElementById('app')
);
