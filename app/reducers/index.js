'use strict';
const createStore = require('redux').createStore;

import {
    LOAD_NPC_REQUEST,
    LOAD_NPC_FAILURE,
    LOAD_NPC_SUCCESS,
    LOAD_CHRONICLE_REQUEST,
    LOAD_CHRONICLE_FAILURE,
    LOAD_CHRONICLE_SUCCESS,
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
        case LOAD_NPC_SUCCESS:
            return Object.assign({}, state, { status: { npc: 'SUCCESS' }, npc: action.payload });
        case LOAD_NPC_FAILURE:
            return Object.assign({}, state, { status: { npc: 'FAILIURE' }, error: action.payload });
        case LOAD_CHRONICLE_SUCCESS:
            return Object.assign({}, state, { status: { chronicle: 'SUCCESS' }, chronicle: action.payload });
        case LOAD_CHRONICLE_FAILURE:
            return Object.assign({}, state, { status: { chronicle: 'FAILIURE' }, error: action.payload });
  default:
    return state
  }
}
