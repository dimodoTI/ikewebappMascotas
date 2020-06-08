export const LOGIN = "[autorizacion] LOGIN";
export const RECUPERO = "[autorizacion] RECUPERO";
export const RENOVACION = "[autorizacion] RENOVACION";

export const LOGIN_SUCCESS = "[autorizacion] LOGIN success";
export const RECUPERO_SUCCESS = "[autorizacion] RECUPERO success";
export const RENOVACION_SUCCESS = "[autorizacion] RENOVACION success";

export const LOGIN_ERROR = "[autorizacion] LOGIN error";
export const RECUPERO_ERROR = "[autorizacion] RECUPERO error";
export const RENOVACION_ERROR = "[autorizacion] RENOVACION error";



export const login = (email, password) => ({
    type: LOGIN,
    email: email,
    password: password
});

export const recupero = (email) => ({
    type: RECUPERO,
    email: email
});

export const renovacion = (ticket, password) => ({
    type: RENOVACION,
    ticket: ticket,
    password: password
});