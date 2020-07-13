import {
    GET,
    GET_SUCCESS,
    GET_ERROR,


} from "../actions/publicacion";

import {
    showSpinner,
    hideSpinner,
    showError
} from "../actions/ui";

import {
    ikeOdataPublicaciones
} from "../fetchs"

import {
    RESTRequest,

} from "../actions/REST"
///////////////
import {
    apiRequest
} from "../actions/api"

export const get = ({
    dispatch
}) => next => action => {
    next(action);
    if (action.type === GET) {
        //dispatch(RESTRequest(ikePublicaciones, action.id, GET_SUCCESS, GET_ERROR))
        dispatch(apiRequest(ikeOdataPublicaciones, action.options, GET_SUCCESS, GET_ERROR))
    }
};


export const processGet = ({
    dispatch
}) => next => action => {
    next(action);
    if (action.type === GET_SUCCESS) {

    }
};



export const processError = ({
    dispatch
}) => next => action => {
    next(action);
    if (action.type === GET_ERROR) {

    }
};

export const middleware = [get, processGet, processError];