import {html,LitElement,css} from "lit-element";
import {store} from "../../redux/store";
import {connect} from "@brunomon/helpers";
import {idiomas } from "../../redux/datos/idiomas"
import {label} from "../css/label"
import {modoPantalla} from "../../redux/actions/ui";
export class pantallaRecuperaClaveMsg extends connect(store)(LitElement) {
    constructor() {
        super();
        this.hidden = true
        this.idioma = "ES"
    }

    static get styles() {
        return css`
        ${label}
        :host{
            position: absolute;
            display:grid;
            grid-template-columns: auto;
            grid-template-rows: auto auto auto;
            grid-gap:0.5rem;
            top: 35%;
            left: 0rem;  
            height:auto;
            width: 100vw;
            background-color:var(--color-gris-claro);
            justify-content:center;
            align-items:center; 
        }
        :host([hidden]){
            display: none; 
        }
        #x{
            position: fixed;
            top: .5rem;
            right: .5rem;
            width: 1.5rem;
            height: 1.5rem;
            background-color: transparent;
            justify-content:center;
            align-items:center; 
            background-image:var(--icon-cerrar);
            background-repeat: no-repeat;
            background-position: center;
            background-size: 100%;
            cursor:pointer;
        }
        #titulo{
            position:relative;
            text-align:center;
            font-size: var(--font-header-h1-size);
            font-weight: var(--font-header-h1-weight);
        }
        #leyenda{
            position:relative;
            text-align:center;
            font-size: var(--font-header-h2-size);
            font-weight: var(--font-header-h2-weight);
        }
        `
    } 
    render() {
        return html `
            <div id="x" @click=${this.clickBoton1}>
            </div>               
            <label id="titulo">
            ${idiomas[this.idioma].recuperaclavemsg.titulo}
            </label>
            <label id="leyenda">
            ${idiomas[this.idioma].recuperaclavemsg.leyenda}
            </label>
        `
    }
    
    clickBoton1(){
        store.dispatch(modoPantalla("iniciosesion"))
    }

    stateChanged(state, name) {

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

window.customElements.define("pantalla-recuperaclavemsg", pantallaRecuperaClaveMsg);