import {
    html,
    LitElement,
    css
} from "lit-element";
import {
    store
} from "../../redux/store";
import {
    connect
} from "@brunomon/helpers";
import {modoPantalla,dispararTimer,cancelarTimer} from "../../redux/actions/ui";
const MODO_PANTALLA = "ui.timeStampPantalla"
export class pantallaSplash extends connect(store, MODO_PANTALLA)(LitElement) {
    constructor() {
        super();
        this.hidden = false
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
        <div id="fondo" @click="${this.pasar}">
            <splash-screen></splash-screen>
         </div>
        `

    }

    stateChanged(state, name) {
        if (name == MODO_PANTALLA && state.ui.quePantalla == "splash") {
            store.dispatch(cancelarTimer())
            store.dispatch(dispararTimer(3, "usuarioregistro", "splash"))
        }
    }

    pasar(e) {
        store.dispatch(modoPantalla("usuarioregistro"))
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
window.customElements.define("pantalla-splash", pantallaSplash);