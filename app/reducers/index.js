'use strict';
const createStore = require('redux').createStore;

import {
	LOADING_PEOPLE,
	LOADING_PEOPLE_SUCCESS,
	LOADING_PEOPLE_ERROR,
	SET_NEW_FILTER
} from '../actions'

export function reducer(state = {}, action) {

  switch (action.type) {
		case LOADING_PEOPLE_SUCCESS:
		  return Object.assign({}, state, { people: action.payload });
		case SET_NEW_FILTER:
		  return Object.assign({}, state, { filter: action.payload });
  default:
    return state
  }
}
