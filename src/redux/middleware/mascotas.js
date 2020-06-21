import {
    GET,
    GET_SUCCESS,
    GET_ERROR,
    ADD,
    ADD_SUCCESS,
    ADD_ERROR,
    UPDATE,
    UPDATE_SUCCESS,
    UPDATE_ERROR,
    PATCH,
    PATCH_SUCCESS,
    PATCH_ERROR,
    REMOVE,
    REMOVE_SUCCESS,
    REMOVE_ERROR

} from "../actions/mascotas";

import {

    ikeMascotas
} from "../fetchs"

import {
    RESTRequest,
    RESTAdd,
    RESTDelete,
    RESTUpdate,
    RESTPatch
} from "../actions/REST"

export const get = ({
    dispatch
}) => next => action => {
    next(action);
    if (action.type === GET) {
        dispatch(RESTRequest(ikeMascotas, action.id, GET_SUCCESS, GET_ERROR))
    }
};

export const add = ({
    dispatch
}) => next => action => {
    next(action);
    if (action.type === ADD) {
        dispatch(RESTAdd(ikeMascotas, action.body, ADD_SUCCESS, ADD_ERROR))
    }
};

export const update = ({
    dispatch
}) => next => action => {
    next(action);
    if (action.type === UPDATE) {
        dispatch(RESTUpdate(ikeMascotas, action.id, action.body, UPDATE_SUCCESS, UPDATE_ERROR))
    }
};

export const patch = ({
    dispatch
}) => next => action => {
    next(action);
    if (action.type === PATCH) {
        dispatch(RESTPatch(ikeMascotas, action.id, action.body, PATCH_SUCCESS, PATCH_ERROR))
    }
};

export const remove = ({
    dispatch
}) => next => action => {
    next(action);
    if (action.type === REMOVE) {
        dispatch(RESTDelete(ikeMascotas, action.id, REMOVE_SUCCESS, REMOVE_ERROR))
    }
};


export const processGet = ({
    dispatch
}) => next => action => {
    next(action);
    if (action.type === GET_SUCCESS) {

    }
};

export const processComand = ({
    dispatch
}) => next => action => {
    next(action);
    if (action.type === ADD_SUCCESS || action.type === UPDATE_SUCCESS || action.type === REMOVE_SUCCESS || action.type === PATCH_SUCCESS) {

    }
};



export const processError = ({
    dispatch
}) => next => action => {
    next(action);
    if (action.type === GET_ERROR || action.type === ADD_ERROR || action.type === UPDATE_ERROR || action.type === REMOVE_ERROR || action.type === PATCH_ERROR) {

    }
};

export const middleware = [get, add, update, patch, remove, processGet, processComand, processError];