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
import { modoPantalla, dispararTimer, cancelarTimer } from "../../redux/actions/ui";
const MODO_PANTALLA = "ui.timeStampPantalla"
import { COLGAR, MICROFONO, VIDEO, ESTRELLA, ESTRELLABORDE } from "../../../assets/icons/icons"
import { idiomas } from "../../redux/datos/idiomas"
import { ikeInput } from "../css/ikeInput"
import { button } from "../css/button"
export class pantallaVideoCalificacion extends connect(store, MODO_PANTALLA)(LitElement) {
    constructor() {
        super();
        this.idioma = "ES"
        this.hidden = false
        this.calificacion = 0;
    }

    static get styles() {
        return css`
        ${ikeInput}
        ${button}
        :host{
            display: grid;
            justify-items:center;
            align-items: center;  
            background-color: var(--color-gris-fondo);
            height: 100%;
            width: 100%;   
            grid-template-rows:10% 10% 15% 10% 10% 7% 20% 8% 10%;
        }
        :host([hidden]){
            display: none; 
        }
        #cerrar{
            justify-self: end;
            padding-right: 1rem;
            font-size: var(--font-titulo-h1-size);
            font-weight: var(--font-titulo-h1-weight);
        }
        #titulo{
            font-size: var(--font-titulo-h1-size);
            font-weight: bolder;
            text-align:center;
        }
        #leyenda{
            font-size: var(--font-bajada-size);
            font-weight: var(--font-bajada-weight);
            padding: 0 1rem 0 1rem;
            text-align:center;
        }
        #calificaLbl{
            font-size: var(--font-titulo-h1-size);
            font-weight: var(--font-titulo-h1-weight);
            padding: 0 1rem 0 1rem;
            text-align:center;
        }
        #calificaImg{
            display:grid;
            grid-gap:0rem;
            justify-content: center;
            grid-template-columns:20% 20% 20% 20% 20%;
        }
        .estrella{
            height:2rem;
            width:2rem;
            background-repeat: no-repeat;
            background-position: center;
            background-size: 80%;
        }
        .estrella svg{
            fill : var(--color-amarillo);
        }
        #comentarioLbl{
            font-size: var(--font-label-size);
            font-weight: var(--font-label-weight);
            justify-self: left;
            padding-left:1rem;
            align-self: end;
        }

        `
    }
    render() {
        return html`
            <div id="cerrar" @click="${this.cerrar}">X</div>
            <div id="titulo">${idiomas[this.idioma].videocalificacion.titulo}</div>
            <div id="leyenda">${idiomas[this.idioma].videocalificacion.leyenda}</div>
            <div id="calificaLbl">${idiomas[this.idioma].videocalificacion.calificaLbl}</div>
            <div id="calificaImg">
                <div class="estrella" cal="1" @click="${this.califica}">${this.calificacion == 0 ? ESTRELLABORDE : ESTRELLA}</div>
                <div class="estrella" cal="2" @click="${this.califica}">${this.calificacion < 2 ? ESTRELLABORDE : ESTRELLA}</div>
                <div class="estrella" cal="3" @click="${this.califica}">${this.calificacion < 3 ? ESTRELLABORDE : ESTRELLA}</div>
                <div class="estrella" cal="4" @click="${this.califica}">${this.calificacion < 4 ? ESTRELLABORDE : ESTRELLA}</div>
                <div class="estrella" cal="5" @click="${this.califica}">${this.calificacion < 5 ? ESTRELLABORDE : ESTRELLA}</div>
            </div>
            <div id="comentarioLbl">${idiomas[this.idioma].videocalificacion.comentarioLbl}</div>
            <div id="comentarioTxt" style="width:90%;height:5rem;">
                <textarea id="txtComentario" style="width:100%;height:5rem;"></textarea>
            </div>
            <div id="btnGuardar" style="width:90%;">
                <button btn1 @click="${this.guardar}" style="width:100%;">${idiomas[this.idioma].videocalificacion.btn1}</button>
            </div>
            <div id="btnAhoraNo">
                <button btn2 @click="${this.ahoraNo}">${idiomas[this.idioma].videocalificacion.btn2}</button>
            </div>
        `
    }
    califica(e) {
        let valor = e.currentTarget.getAttribute("cal")
        if (valor == 1 && valor == this.calificacion) {
            this.calificacion = 0;
        } else {
            this.calificacion = valor;
        }
        this.update();
    }
    cerrar() {
    }
    guardar() {
    }
    ahoraNo() {
    }
    stateChanged(state, name) {
        if (name == MODO_PANTALLA && state.ui.quePantalla == "videocalificacion") {
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
window.customElements.define("pantalla-videocalificacion", pantallaVideoCalificacion);