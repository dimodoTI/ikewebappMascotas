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
import {modoPantalla,cancelarTimer} from "../../redux/actions/ui";
import { idiomas } from "../../redux/datos/idiomas"
const MODO_PANTALLA = "ui.timeStampPantalla"
export class pantallaOnboarding extends connect(store, MODO_PANTALLA)(LitElement) {
    constructor() {
        super();
        this.hidden = true
        this.idioma = "ES"
        this.contenido = [{titulo: "Cuidalos. Sin salir de tu casa", mensaje: "Accedé a consultas online y chat personalizado con nuestros profesionales."},
            {titulo: "Lo que necesitas, al alcance de tu mano.", mensaje: "Consultá la historia clínica de tus mascotas en cualquier momento y lugar."},
            {titulo: "Te ayudamos a darles lo mejor", mensaje: "Chequeá el calendario de vacunación para estar siempre al día."},
            {titulo: "Bruno", mensaje: "Chequeá el calendario de vacunación para estar siempre al día."}
        ];
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
        <div id="fondo">
            <onboarding-componente .lineas="${this.contenido}" 
            txtBtn1=${idiomas[this.idioma].onboarding.btn1} 
            txtBtn2=${idiomas[this.idioma].onboarding.btn2}
            txtBtn3=${idiomas[this.idioma].onboarding.btn3}
            .clickBtn1=${function () {this.adelante()
            }}
            .clickBtn2=${function () {store.dispatch(modoPantalla("iniciosesion"))
            }}
            .clickBtn3=${function () {store.dispatch(modoPantalla("accesoplan"))
            }}
            ></onboarding-componente>
        </div>
        `
    }

    stateChanged(state, name) {
        if (name == MODO_PANTALLA && state.ui.quePantalla == "onboarding") {
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
window.customElements.define("pantalla-onboarding", pantallaOnboarding);