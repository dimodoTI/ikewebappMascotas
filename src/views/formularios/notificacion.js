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
            display:grid;
            top: 0rem;
            left: 0rem;  
            height:100%;
            width: 100%;
            background-color:transparent;
        }
        :host([hidden]){
            display: none; 
        } 
        :host([media-size="small"]) #fondo{
           display:none; 
        }
        :host(:not([media-size="small"])) #fondo{
            position:absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            z-index:80;
            background-color: var(--color-negro);
            opacity:.4; 
        }
        :host([media-size="small"]) #cuerpo{
            display: grid;
            position:absolute;
            justify-items:center;
            align-items: center;  
            height: 100%;
            width: 100%;   
            background-color: var(--color-gris-fondo);
            grid-template-rows:1fr 9fr;
        }
        :host(:not([media-size="small"])) #cuerpo{
            position:absolute;
            top:4rem;
            right:2rem;
            display: grid;
            justify-items:center;
            align-items: center;  
            background-color: var(--color-gris-fondo);
            height: 22rem;
            width: 16rem;   
            border-radius: .8rem 0 .8rem .8rem;
            z-index:80;
            grid-template-rows:1fr 9fr;
        }
        #cabecera{
            display:grid;
            width:100%;
            align-items: center;
            justify-items: left;
            border-radius:0 0 20px 20px;
            border-radius: .8rem 0 0 0;
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
        #Notificaciones{
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
        <div id="fondo"> </div>
        <div id="cuerpo">
            <div id="cabecera">
                <div id="atras" @click=${this.clickBoton1}>${ATRAS}</div>
                <div id="lblTitulo">${idiomas[this.idioma].notificacion.titulo}</div>
            </div>
            <div id="Notificaciones">
            
            </div>
        </div>
        `
    }

    clickBoton1() {
        store.dispatch(modoPantalla(store.getState().ui.pantallaQueLLamo, "notificacion"))
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
            },
            mediaSize: {
                type: String,
                reflect: true,
                attribute: 'media-size'
            }
        }
    }
}

window.customElements.define("pantalla-notificacion", pantallaNotificacion);