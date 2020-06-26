import {
  loadState,
  saveState
} from "../libs/localStorage"
import {
  applyMiddleware,
  createStore,
  compose
} from "redux";
import {
  logger
} from "redux-logger";
import {
  rootReducer as reducers
} from "./reducers";
import {
  middleware as ui
} from "./middleware/ui";
import {
  middleware as api
} from "./middleware/api";
import {
  middleware as rest
} from "./middleware/REST";
import {
  middleware as usuario
} from "./middleware/usuario";
import {
  middleware as autorizacion
} from "./middleware/autorizacion";

import {
  middleware as mascotasTipo
} from "./middleware/mascotasTipo"

import {
  middleware as razas
} from "./middleware/razas"

import {
  middleware as mascotas
} from "./middleware/mascotas"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let mdw = [
  api,
  rest,
  ...ui,
  ...usuario,
  ...autorizacion,
  ...mascotas,
  ...mascotasTipo,
  ...razas,

]

if (process.env.NODE_ENV !== 'production') {
  mdw = [...mdw, logger]
}

//ver que se guarda en el dispositivo y que no
//const initialData = loadState()
const initialData = {}



export const store = createStore(
  reducers,
  initialData,
  composeEnhancers(applyMiddleware(...mdw))
);


/* store.subscribe(function () {
  saveState(store.getState())
}) */