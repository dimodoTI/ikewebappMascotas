import {
    LOGIN,
    RECUPERO,
    RENOVACION,
    LOGIN_SUCCESS,
    RECUPERO_SUCCESS,
    RENOVACION_SUCCESS,
    LOGIN_ERROR,
    RECUPERO_ERROR,
    RENOVACION_ERROR

} from "../actions/autorizacion";

import {
    ikeLoginFetch,
    ikeRecuperoFetch,
    ikeRenovacionFetch
} from "../../redux/fetchs"

import {
    RESTAdd,
} from "../actions/REST"

export const login = ({
    dispatch
}) => next => action => {
    next(action);
    if (action.type === LOGIN) {
        dispatch(RESTAdd(ikeLoginFetch, {
            email: action.email,
            password: action.password
        }, LOGIN_SUCCESS, LOGIN_ERROR))
    }
};

export const recupero = ({
    dispatch
}) => next => action => {
    next(action);
    if (action.type === RECUPERO) {
        dispatch(RESTAdd(ikeRecuperoFetch, action.email, RECUPERO_SUCCESS, RECUPERO_ERROR))
    }
};

export const renovacion = ({
    dispatch
}) => next => action => {
    next(action);
    if (action.type === RENOVACION) {
        dispatch(RESTAdd(ikeRenovacionFetch, {
            ticket: action.ticket,
            password: action.password
        }, RENOVACION_SUCCESS, RENOVACION_ERROR))
    }
};


export const processCommand = ({
    dispatch
}) => next => action => {
    next(action);
    if (action.type === LOGIN_SUCCESS || action.type === RENOVACION_SUCCESS || action.type === RECUPERO_SUCCESS) {

    }
};


export const processError = ({
    dispatch
}) => next => action => {
    next(action);
    if (action.type === LOGIN_ERROR || action.type === RENOVACION_ERROR || action.type === RECUPERO_ERROR) {

    }
};

export const middleware = [login, recupero, renovacion, processCommand, processError];