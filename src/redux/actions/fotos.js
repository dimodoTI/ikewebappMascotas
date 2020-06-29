export const CAPTURA = "[fotos] captura";


export const captura = (foto, quien) => ({
    type: CAPTURA,
    foto: foto,
    quien: quien
});