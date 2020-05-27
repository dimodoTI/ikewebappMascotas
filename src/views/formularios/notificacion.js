import { html, LitElement, css } from "lit-element";
import { store } from "../../redux/store";
import { connect } from "@brunomon/helpers";
import { idiomas } from "../../redux/datos/idiomas"
import { label } from "../css/label"
import { button } from "../css/button"
import { modoPantalla } from "../../redux/actions/ui";
import { ATRAS } from "../../../assets/icons/icons"
export class pantallaNotificacion extends connect(store)(LitElement) {
    constructor() {
        super();
        this.hidden = true
        this.idioma = "ES"
    }

    static get styles() {
        return css`
        ${label}
        ${button}
        :host{
            position: absolute;
            top: 0rem;
            left: 0rem;  
            height:100%;
            width: 100%;
            background-color:var(--color-gris-fondo);
            display:grid;
            grid-template-rows:1fr 9fr;
        }
        :host([hidden]){
            display: none; 
        } 
        #cabecera{
            display:grid;
            align-content: center;
            justify-items: left;
            padding:1.5rem;
            border-radius:0 0 20px 20px;
            background-color: var(--color-blanco);
            grid-template-columns:auto 1fr;
            grid-gap:.5rem;
        }
        #atras svg{
            width:1.5rem;
        }
        #lblTitulo{
            font-size: var(--font-header-h1-size);
            font-weight: var(--font-header-h1-weight);
        }
        #cuerpo{
            background-color: transparent;
            display:grid;
            grid-auto-flow:row;
            grid-gap:.8rem;
            align-content:start;
        }
        #cuerpo::-webkit-scrollbar {
            display: none;
        }
    `
    }
    render() {
        return html`
            <div id="cabecera">
                <div id="atras" @click=${this.clickBoton1}>${ATRAS}</div>
                <div id="lblTitulo">${idiomas[this.idioma].notificacion.titulo}</div>
            </div>
            <div id="cuerpo">
            
            </div>
        `
    }

    clickBoton1() {
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

window.customElements.define("pantalla-notificacion", pantallaNotificacion);