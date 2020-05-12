import {
    html,
    LitElement,
    css
} from "lit-element";
import {
    connect
} from "@brunomon/helpers"
import {
    store
} from "../redux/store";

import {splashScreen} from "../views/componentes/splashscreen";
import {onboardingComponente} from "../views/componentes/onboardingcomponente";
import {inicioSesionComponente} from "../views/componentes/iniciosesioncomponente";
import {recuperaClaveComponente} from "../views/componentes/recuperaclavecomponente";

import { pantallaSplash } from "../views/formularios/splash";
import { pantallaOnboarding } from "../views/formularios/onboarding";
import { pantallaInicioSesion } from "../views/formularios/iniciosesion";
import { pantallaRecuperaClave } from "../views/formularios/recuperaclave";
import { pantallaRecuperaClaveMesg } from "../views/formularios/recuperaclavemsg";
import { pantallaCrearClave } from "../views/formularios/crearclave";
import { pantallaCrearClaveMsg } from "../views/formularios/crearclavemsg";
import { pantallaAccespPlan } from "../views/formularios/accesoplan";
import { pantallaVErCobertuta } from "../views/formularios/vercobertura";
import { pantallaUsuarioRegistro } from "../views/formularios/usuarioRegistro";

const QUEPANTALLA = "ui.timeStampPantalla";
export class viewManager extends connect(store, QUEPANTALLA)(LitElement) {
    constructor() {
        super();
        this.current = "IKE-Mascotas";
    }

    static get styles() {
        return css `
        :host{
            display: grid;                 
            grid-gap:1rem;
             height:100vh;
            width: 100vw;
            padding:0;
            background-color:var(--color-gris-claro);
        }
        #splash{
            align-self: top;
            height: 100%;
            width: 100%;
          }
        `;
    }
    render() {
        return html `
        <pantalla-splash id='splash'></pantalla-splash>
        <pantalla-onboarding id="onboarding"></pantalla-onboarding>
        <pantalla-iniciosesion id="iniciosesion"></pantalla-iniciosesion>
        <pantalla-recuperaclave id="recuperaclave"></pantalla-recuperaclave>
        <pantalla-recuperaclavemsg id="recuperaclavemsg"></pantalla-recuperaclavemsg>
        <pantalla-crearclave id="crearclave"></pantalla-crearclave>
        <pantalla-crearclavemsg id="crearclavemsg"></pantalla-crearclavemsg>
        <pantalla-accesoplan id="accesoplan"></pantalla-accesoplan>
        <pantalla-vercobertura id="vercobertura"></pantalla-vercobertura>
        <pantalla-usuarioregistro id="usuarioregistro"></pantalla-usuarioregistro>
        `;
    }
 
    stateChanged(state, name) {
        if (name == QUEPANTALLA ) {
            if (this.shadowRoot.children.length > 0) {
                this.shadowRoot.querySelector("#splash").hidden = state.ui.quePantalla != "splash";
                this.shadowRoot.querySelector("#onboarding").hidden = state.ui.quePantalla != "onboarding";
                this.shadowRoot.querySelector("#iniciosesion").hidden = state.ui.quePantalla != "iniciosesion";
                this.shadowRoot.querySelector("#recuperaclave").hidden = state.ui.quePantalla != "recuperaclave";
                this.shadowRoot.querySelector("#recuperaclavemsg").hidden = state.ui.quePantalla != "recuperaclavemsg";
                this.shadowRoot.querySelector("#crearclave").hidden = state.ui.quePantalla != "crearclave";
                this.shadowRoot.querySelector("#crearclavemsg").hidden = state.ui.quePantalla != "crearclavemsg";
                this.shadowRoot.querySelector("#accesoplan").hidden = state.ui.quePantalla != "accesoplan";
                this.shadowRoot.querySelector("#vercobertura").hidden = state.ui.quePantalla != "vercobertura";
                this.shadowRoot.querySelector("#usuarioregistro").hidden = state.ui.quePantalla != "usuarioregistro";
            }
        }

        this.update();
    }

    static get properties() {
        return {
            mediaSize: {
                type: String,
                reflect: true,
                attribute: 'media-size'

            }
        }
    }
}
window.customElements.define("view-manager", viewManager);