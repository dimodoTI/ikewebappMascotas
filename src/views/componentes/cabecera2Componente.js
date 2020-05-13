import {html,LitElement,css} from "lit-element";
import {store} from "../../redux/store";
import {connect} from "@brunomon/helpers";
import {label} from "../css/label"
export class cabecera2Componente extends connect(store)(LitElement) {
    constructor() {
        super();
        this.titulo = ""
        this.leyenda = ""
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
        #lblTitulo{
            position: relative;
            display:flex;
            width: 100%;
            height:100%;
            background-color: transparent;
            align-items:flex-end; 
            justify-content:left;
            font-size: var(--font-header-h1-size);
            font-weight: var(--font-header-h1-weight);
        }
        #lblLeyenda{
            position: relative;
            display:flex;
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
        <label id="lblTitulo">${this.titulo}</label>
        <label id="lblLeyenda">${this.leyenda}</label>
    `
    }

    static get properties() {
        return {
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

window.customElements.define("cabecera2-componente", cabecera2Componente);