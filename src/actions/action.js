import fetch from 'isomorphic-fetch';

export const ACTION = 'ACTION';
export function action(msg) {
  return {
    type: ACTION,
    msg: msg
  };
}

export const REQUEST_ASYNC = 'REQUEST_ASYNC';
function requestAsync() {
  return {
    type: REQUEST_ASYNC
  };
}

export const RECEIVE_ASYNC = 'RECEIVE_ASYNC';
function receiveAsync(json) {
  return {
    type: RECEIVE_ASYNC,
    data: json
  };
}

export function fetchAsync() {
  return dispatch => {
    dispatch(requestAsync());
    return fetch(``)
      .then(resp => resp.json())
      .then(json => {
        dispatch(receiveAsync(json));
      });
  };
}
