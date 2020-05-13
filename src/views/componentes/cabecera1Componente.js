import {html,LitElement,css} from "lit-element";
import {store} from "../../redux/store";
import {connect} from "@brunomon/helpers";
import {label} from "../css/label"
export class cabecera1Componente extends connect(store)(LitElement) {
    constructor() {
        super();
        this.titulo = ""
        this.leyenda = ""
        this.btn1 = {}
    }

    static get styles() {
        return css`
        ${label}
        :host{
            position: absolute;
            display: grid;
            top: 0rem;
            left: 0rem;  
            height:100%;
            width: 100%;
            background-color: var(--color-blanco);
            grid-template-columns:100%;
            grid-template-rows: 45% auto;
            grid-gap:.3rem;
            padding-left:1.5rem;
        }
        :host([hidden]){
            display: none; 
        } 
        #titulo{
            position: relative;
            display: grid;
            height: 100%;
            width: 100%;
            grid-template-columns:5% 95%;
            grid-template-rows: 100%;
            background-color: transparent;    
            grid-gap:.5rem;   
        }
        #atras{
            height: 100%;
            width: 100%;
            background-image: var(--icon-flecha-izq-sin-borde);
            background-color: transparent;
            background-repeat: no-repeat;
            background-position: left bottom;
            background-size: 100%;
        }
        #lblTitulo{
            height: 100%;
            width: 100%;
            background-color: transparent;
            display: flex;
            align-items:flex-end; 
            justify-content:left;
            font-size: var(--font-header-h1-size);
            font-weight: var(--font-header-h1-weight);
        }
        #lblLeyenda{
            position: relative;
            width: 100%;
            background-color: transparent;
            align-items:flex-start; 
            justify-content:left;
            font-size: var(--font-header-h2-size);
            font-weight: var(--font-header-h2-weight);
        }
        label {
            position: relative;
            width: 80%;
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
        <div id="titulo">
            <div id="atras" 
                @click=${this.clickBoton1}>
            </div>
            <label id="lblTitulo">${this.titulo}</label>
        </div>
        <label id="lblLeyenda">${this.leyenda}</label>
    `
    }
    stateChanged(state, name) {
    }
    firstUpdated() {
    }
    clickBoton1() {
        this.btn1();
    }
    static get properties() {
        return {
            btn1: {
                type: Object,
                reflect: null
            },
            titulo: {
                type: String,
                reflect: ""
            },
            leyenda: {
                type: String,
                reflect: ""
            }
        }
    }
}

window.customElements.define("cabecera1-componente", cabecera1Componente);