import {
  combineReducers
} from "redux";
import {
  reducer as uiReducer
} from "./ui"
export const rootReducer = (state = {}, action) => {

  return {
    ui: uiReducer(state.ui, action)
    // titular: titularReducer(state.titular, action),
    // mascotas: mascotasReducer(state.mascotas, action),
    // hc: hcReducer(state.hc, action),
    // agenda: agendaReducer(state.agenda, action)
  };
};