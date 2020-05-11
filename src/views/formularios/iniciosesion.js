import {
    html,
    LitElement,
    css
} from "lit-element";
import {store} from "../../redux/store";
import {connect} from "@brunomon/helpers";
import {modoPantalla,cancelarTimer} from "../../redux/actions/ui";
import { idiomas } from "../../redux/datos/idiomas"
import { inicioSesionComponente } from "../componentes/iniciosesioncomponente"
const MODO_PANTALLA = "ui.timeStampPantalla"
export class pantallaInicioSesion extends connect(store, MODO_PANTALLA)(LitElement) {
    constructor() {
        super();
        this.hidden = true
        this.idioma = "ES"
    }

    static get styles() {
        return css`
        :host{
            display: grid;
            justify-items:center;
            align-items: center;  
            background-color: trasparent;
            height: 100vh;
            width: 100vw;   
        }
        :host([hidden]){
            display: none; 
        }
        ` 
    }
    render() {
        return html`
            <iniciosesion-componente label="${idiomas[this.idioma].iniciosession.datos}"
            .clickBtn1=${function () {this.adelante()}}
            .clickBtn2=${function () {store.dispatch(modoPantalla("recuperaclave"))}}
            .clickBtn3=${function () {store.dispatch(modoPantalla("recuperaclave"))}}
            > </iniciosesion-componente>

        `
    }
 
    stateChanged(state, name) {
        if (name == MODO_PANTALLA && state.ui.quePantalla == "iniciosesion") {
            store.dispatch(cancelarTimer())

        }
    }

    static get properties() {
        return {
            hidden: {
                type: Boolean,
                reflect: true
            }
        }
    }

}
window.customElements.define("pantalla-iniciosesion", pantallaInicioSesion);