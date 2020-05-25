import {html,LitElement,css} from "lit-element";
import {store} from "../../redux/store";
import {connect} from "@brunomon/helpers";
import {label} from "../css/label"
import {REGALO,CARRITO,RELOJ} from "../../../assets/icons/icons"
import { repeat } from 'lit-html/directives/repeat.js';

export class marquesinaComponente extends connect(store)(LitElement) {
    constructor() {
        super();
        this.item = {}
    }

    static get styles() {
        return css`
        ${label}
        :host{
            position: relative;
            display: grid; 
            grid-auto-flow: column;
            height: 100%;
            background-color: trasparent;
            grid-template-rows: 100%;
            grid-gap:1rem;
            width:auto;
        }

        #cuerpo-marq{
            position: relative;
            display: grid;
            height: 100%;
            width: 38vw;
            background-color: var(--color-celeste);
            align-items:center; 
            justify-content:center;
            grid-template-columns:100%;
            grid-gap:0;
            border-radius:.4rem;
        }
        .cuerpo-marq-combinado{
            grid-template-rows: 70% 30%;
        }
        .cuerpo-marq-uno{
            grid-template-rows: 100%;
        }

        #img-marq{
            height: 60%;
            width: auto%;
            position: relative;
            display:flex;
            align-items:center; 
            justify-content:center;
       }
       
        #lbl-marq{
            height: 30%;
            width: auto%;
            position: relative;
            display:flex;
            align-items:center; 
            justify-content:center;
            font-size: var(--font-header-h2-size);
            font-weight: var(--font-header-h2-weight);
            color:var(--color-blanco);
        }
        `
    } 
    render() {
        return html `
            ${repeat(this.item, (dato) => dato.texto, (dato, index) => html`
                <div id="cuerpo-marq" class="${!dato.texto=='' ? 'cuerpo-marq-combinado' : 'cuerpo-marq-uno'}"
                style="background-color:var(${dato.color});">
                    <div id="img-marq" >${dato.imagen}</div>
                    <label id="lbl-marq" >${dato.texto}</label>
                </div>                
            `)}

       `
    }
    static get properties() {
        return {
            item: {
                type: Object,
                reflect: false
            }
        }
    }
}

window.customElements.define("marquesina-componente", marquesinaComponente);