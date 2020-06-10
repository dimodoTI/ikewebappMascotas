export const SET_DATOS = "[CLIENTE] set datos"
export const SET_LOGUEADO = "[CLIENTE] set logueado"
export const SET_CONFIRMADO = "[CLIENTE] set confirmado"


export const setDatos = (datos) => ({
    type: SET_DATOS,
    datos: datos
});

export const setLogueado = (logueado) => ({
    type: SET_LOGUEADO,
    logueado: logueado
});
export const setConfirmado = (logueado) => ({
    type: SET_CONFIRMADO,
    confirmado: confirmado
});