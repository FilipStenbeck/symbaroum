require('isomorphic-fetch');

export const LOADING_PEOPLE= 'LOADING_PEOPLE';
export const LOADING_PEOPLE_SUCCESS = 'LOADING_PEOPLE_SUCCESS';
export const LOADING_PEOPLE_ERROR = 'LOADING_PEOPLE_ERROR';

export const LOAD_NPC_REQUEST = 'LOAD_NPC_REQUEST';
export const LOAD_NPC_SUCCESS = 'LOAD_NPC_SUCCESS';
export const LOAD_NPC_FAILURE = 'LOAD_NPC_FAILURE';
const { API } = require('../../config');


export const SET_NEW_FILTER = 'SET_NEW_FILTER';

export function loadNpc() {
    return {
        type: LOAD_NPC_REQUEST,
    };
};

export function loadNpcSuccess(payload) {
    return {
        type: LOAD_NPC_SUCCESS,
        payload: payload
    };
};

export function loadNpcFailure(error) {
    return {
        type: LOAD_NPC_FAILURE,
        payload: error
    };
};

export function fetchNpc() {
  return (dispatch, getState) => {
      console.log(`${API}/npc`);
        fetch(`${API}/npc`)
        .then(function(response) {
            if (response.status >= 400) {
              dispatch(loadNpcFailure(response));
            }
            return response.json();
        })
        .then(function(items) {
            dispatch(loadNpcSuccess(items));
          })
        .catch(function(error) {
            console.log(error);
        });
        dispatch(loadNpc());
  };
}


export function loadingPeople() {
    return {
        type: LOADING_PEOPLE,
    };
};


export function loadingPeopleSuccess(payload) {
    return {
        type: LOADING_PEOPLE_SUCCESS,
        payload: payload
    };
};

export function loadingPeopleError(error) {
    return {
        type: LOADING_PEOPLE_ERROR,
        payload: error
    };
};

export function fetchPeople() {
  return (dispatch, getState) => {
        fetch('https://tinylittleserver.herokuapp.com/people')
        .then(function(response) {
            if (response.status >= 400) {
              dispatch(loadingPeopleError(response));
            }
            return response.json();
        }).then(function(items) {
         dispatch(loadingPeopleSuccess(items));
     });
        dispatch(loadingPeople());
  };
}

export function setNewFilter(filter) {
    return {
        type: SET_NEW_FILTER,
        payload: filter
    };
};
