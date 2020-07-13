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

import {
  reducer as clienteReducer
} from "./cliente"

import {
  reducer as mascotasReducer
} from "./mascotas"

import {
  reducer as mascotasTipoReducer
} from "./mascotasTipo"

import {
  reducer as razasReducer
} from "./razas"

import {
  reducer as publicacionReducer
} from "./publicacion"

import {
  reducer as configuracionReducer
} from "./configuracion"

import {
  reducer as puestosReducer
} from "./puestos"

import {
  reducer as tramosReducer
} from "./tramos"

import {
  reducer as reservasReducer
} from "./reservas"

import {
  reducer as atencionesReducer
} from "./atenciones"

import {
  reducer as fotosReducer
} from "./fotos"
import {
  reducer as calendarioReducer
} from "./calendario"
import {
  reducer as vacunasReducer
} from "./vacunas"

import {
  reducer as mascotasvacunasReducer
} from "./mascotasvacunas"

import {
  reducer as turnosdisponiblesReducer
} from "./turnosdisponibles"

import {
  reducer as apiReducer
} from "./api"

export const rootReducer = (state = {}, action) => {
  return {
    api: apiReducer(state.api, action),
    ui: uiReducer(state.ui, action),
    publicidad: publicidadReducer(state.publicidad, action),
    reserva: reservaReducer(state.reserva, action),
    usuario: usuarioReducer(state.usuario, action),
    autorizacion: autorizacionReducer(state.autorizacion, action),
    cliente: clienteReducer(state.cliente, action),
    mascotas: mascotasReducer(state.mascotas, action),
    mascotastipo: mascotasTipoReducer(state.mascotastipo, action),
    razas: razasReducer(state.razas, action),
    publicacion: publicacionReducer(state.publicacion, action),
    configuracion: configuracionReducer(state.configuracion, action),
    puestos: puestosReducer(state.puestos, action),
    tramos: tramosReducer(state.tramos, action),
    reservas: reservasReducer(state.reservas, action),
    atenciones: atencionesReducer(state.atenciones, action),
    fotos: fotosReducer(state.fotos, action),
    calendario: calendarioReducer(state.calendario, action),
    vacunas: vacunasReducer(state.vacunas, action),
    mascotasvacunas: mascotasvacunasReducer(state.mascotasvacunas, action),
    turnosdisponibles: turnosdisponiblesReducer(state.turnosdisponibles, action),

  };
};