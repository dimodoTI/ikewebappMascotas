import {html,LitElement,css} from "lit-element";
import {store} from "../../redux/store";
import {connect} from "@brunomon/helpers";
import {idiomas } from "../../redux/datos/idiomas"
import {label} from "../css/label"
import {cabecera1} from "../css/cabecera1"
import {btnFlotanteRedondo} from "../css/btnFlotanteRedondo"
import {modoPantalla} from "../../redux/actions/ui";
import {COMPARTIR,ATRAS} from "../../../assets/icons/icons"
const MODO_PANTALLA = "ui.timeStampPantalla"
export class pantallaFotoVer extends connect(store, MODO_PANTALLA)(LitElement) {
    constructor() {
        super();
        this.hidden = true
        this.idioma = "ES"
        this.item = [{img: "--imagen-perro1"}]
    }

    static get styles() {
        return css`
        ${label}
        ${cabecera1}
        ${btnFlotanteRedondo}
        :host{
            position: absolute;
            top: 0rem;
            left: 0rem;  
            height:100%;
            width: 100%;
            background-color:var(--color-gris-fondo);
            display:grid;
            grid-template-rows:20% 60% 20%;
        }
        :host([hidden]){
            display: none; 
        } 
        #campana{
            position:relative;
            background-image: var(--icon-trash);
            background-color: transparent;
            background-repeat: no-repeat;
            background-position: right center;
            background-size: 1rem 1rem;
        }
        #cuerpo{
            background-color: transparent;
            display: grid;
            width: 100%;
            grid-template-columns: repeat(auto-fit,minmax(3rem,1fr));
            justify-items: center;
            align-content: start;
            overflow-y: auto; 
            overflow-x: hidden; 
            padding-top: .5rem;
            grid-gap: .5rem;
            background-repeat: no-repeat;
            background-position: center center;
            background-size: 100% 100%;
        }
        #cuerpo::-webkit-scrollbar {
            display: none;
        }
        label{
            position: relative;
            width: 95%;
            color: var(--color-negro);
            background-color:transparent;
            border-radius:0;
            font-size: var(--font-bajada-size);
            font-weight: var(--font-bajada-weight);
        }      
    `
    } 
    render() {
        return html `
        <div id="header">
            <div style="display:grid;width:100%;grid-template-columns:90% 10%;">
                <div id="bar">
                    <div @click=${this.atras}>${ATRAS}</div>
                    <div id="lblTitulo"></div>
                </div>
                <div id="campana" @click="${this.atras}"></div>
            </div>    
            <div id="lblLeyenda"></div>
        </div>
        <div id="cuerpo" style="background-image:var(${this.item[0].img})">
        </div>
        <div style="background-color:var(--color-blanco)";>
        </div>        
        <div id="bfrDivMas" style="bottom:1rem">
            ${COMPARTIR}
        </div>
        `
    }
    atras(){
        store.dispatch(modoPantalla(store.getState().ui.pantallaQueLLamo,"fotover"))
    }
    stateChanged(state, name) {
        if (name == MODO_PANTALLA && state.ui.quePantalla == "fotover") {
        }
    }
    firstUpdated() {
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

window.customElements.define("pantalla-fotover", pantallaFotoVer);