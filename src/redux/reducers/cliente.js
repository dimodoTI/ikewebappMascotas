import {
    SET_DATOS,
    SET_CONFIRMADO,
    SET_LOGUEADO
} from "../actions/cliente";


const initialState = {
    datos: {
        documento: 0,
        apellido: "",
        nombre: "",
        email: ""
    },
    logueado: false,
    confirmado: false,
    timeStamp: null,
    confirmadoTimeStamp: null,
    logueadoTimeStamp: null

};

export const reducer = (state = initialState, action) => {
    const newState = {
        ...state
    };

    switch (action.type) {

        case SET_DATOS:
            const datosViejos = newState.datos
            const datosNuevos = action.datos
            Object.assign(datosViejos, datosNuevos)
            newState.datos = datosViejos
            newState.timeStamp = (new Date()).getTime();
            break;
        case SET_LOGUEADO:
            newState.logueado = action.logueado
            newState.logueadoTimeStamp = (new Date()).getTime();
            break
        case SET_CONFIRMADO:
            newState.confirmado = action.confirmado
            newState.confirmadoTimeStamp = (new Date()).getTime();
            break

    }
    return newState;
};