require('isomorphic-fetch');

export const LOADING_PEOPLE= 'LOADING_PEOPLE';
export const LOADING_PEOPLE_SUCCESS = 'LOADING_PEOPLE_SUCCESS';
export const LOADING_PEOPLE_ERROR = 'LOADING_PEOPLE_ERROR';
export const SET_NEW_FILTER = 'SET_NEW_FILTER';



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
