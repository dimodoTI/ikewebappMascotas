import {DISPARAR_TIMER, setTimer, setContador
} from "../actions/ui";
import { modoPantalla, dispararTimer as dispararTimerAction } from "../actions/ui";
import { tiempos } from "../datos/tiempoEspera"

export const dispararTimer = ({
    dispatch
}) => next => action => {
    next(action);
    if (action.type === DISPARAR_TIMER) {
        const timer = setTimeout(function () {
            dispatch(modoPantalla(action.target));
        }, action.tiempo * 1000)
        const intervalo = setInterval(function () {
            dispatch(setContador());
        }, 1000)
        dispatch(setTimer(timer, intervalo, action.tiempo, action.pantallaQueLLamo))
    }
};

export const middleware = [dispararTimer];