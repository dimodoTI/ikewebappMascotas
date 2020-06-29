import {
    captura,
    CAPTURA
} from "../actions/fotos";


const initialState = {
    foto: null,
    timeStamp: null,
    quien: null,
    errorTimeStamp: null,

};

export const reducer = (state = initialState, action) => {
    const newState = {
        ...state
    };

    switch (action.type) {
        case CAPTURA:
            newState.foto = action.foto;
            newState.quien = action.quien
            newState.timeStamp = (new Date()).getTime();
            break;


    }
    return newState;
};