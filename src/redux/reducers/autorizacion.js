import {
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    RECUPERO_SUCCESS,
    RECUPERO_ERROR,
    RENOVACION_SUCCESS,
    RENOVACION_ERROR
} from "../actions/autorizacion";


const initialState = {
    usuario: null,
    loginTimeStamp: null,
    recuperoTimeStamp: null,
    renovacionTimeStamp: null,
    commandErrorTimeStamp: null
};

export const reducer = (state = initialState, action) => {
    const newState = {
        ...state
    };

    switch (action.type) {
        case LOGIN_SUCCESS:
            newState.usuario = action.payload.receive
            newState.loginTimeStamp = (new Date()).getTime();
            break;
        case RENOVACION_SUCCESS:
            newState.renovacionTimeStamp = (new Date()).getTime();
            break;
        case RECUPERO_SUCCESS:
            newState.recuperoTimeStamp = (new Date()).getTime();
            break;
        case LOGIN_ERROR || RECUPERO_ERROR || RENOVACION_ERROR:
            newState.commandErrorTimeStamp = (new Date()).getTime();
            break;

    }
    return newState;
};