import {
  combineReducers
} from "redux";
import {
  reducer as uiReducer
} from "./ui"
import {
  reducer as publicidadReducer
} from "./publicidad"
import {
  reducer as reservaReducer
} from "./reserva"
import {
  reducer as usuarioReducer
} from "./usuario"
import {
  reducer as autorizacionReducer
} from "./autorizacion"

export const rootReducer = (state = {}, action) => {
  return {
    ui: uiReducer(state.ui, action),
    publicidad: publicidadReducer(state.publicidad, action),
    reserva: reservaReducer(state.reserva, action),
    usuario: usuarioReducer(state.usuario, action),
    autorizacion: autorizacionReducer(state.autorizacion, action)
  };
};