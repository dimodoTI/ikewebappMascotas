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
import { COLGAR, MICROFONO, VIDEO } from "../../../assets/icons/icons"
import { idiomas } from "../../redux/datos/idiomas"
import { mediaConMenu01 } from "../css/mediaConMenu01"
import { cabecera1 } from "../css/cabecera1"

export class pantallaVideo extends connect(store, MODO_PANTALLA)(LitElement) {
    constructor() {
        super();
        this.idioma = "ES"
        this.hidden = true
    }

    static get styles() {
        return css`
        ${mediaConMenu01}
        ${cabecera1}
        :host{
            display: grid;
            background-color: trasparent;
            height: 100%;
            width: 100%;   
        }
        :host([hidden]){
            display: none; 
        }
        :host([media-size="small"]) #gridContenedor{
            grid-row-start:1;
            grid-row-end:3;
        }
        #campana{
            position:relative;
            background-image: var(--icon-campana-con-marca);
            background-color: transparent;
            background-repeat: no-repeat;
            background-position: right center;
            background-size: 1rem 1rem;
        }
        #cuerpo{
            height: 100%;
            width: 100%;
            display: grid;
            background-color:transparent;            
            background-image:var(--imagen-video-inactivo);
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
            grid-template-rows:70% 15% 15%;
            align-items: center;
            justify-items: center;
        }
        :host([media-size="small"]) #cuerpo{
            grid-row-start:1;
            grid-row-end:3;
        }
        #cuerpo[llamando]{
            background-image:var(--imagen-video-inactivo);
        }
        #cuerpo[hablando]{
            background-image:var(--imagen-video-activo);
        }
        #llamando{
            width:8rem;
            color: var(--color-blanco);
            background-color: var(--color-gris-oscuro);
            opacity:.8;
            border-radius:1rem;
            text-align:center;
            font-size: var(--font-titulo-h1-size);
            font-weight: var(--font-titulo-h1-weight);
        }
        #cortar{
            display:grid;
            width:2.5rem;
            height:2.5rem;
            background-color: var(--color-rojo);
            border-radius:1.25rem;
            text-align:center;
            align-items: center;
            justify-content: center;
            align-self: flex-start;
        }
        #micvid{
            display:grid;
            width:12rem;
            grid-template-columns:50% 50%;
            align-items: center;
            justify-items: center;
            opacity:.6;
        }
        #microfono,#video{
            display:grid;
            width:2.5rem;
            height:2.5rem;
            background-color: var(--color-gris-oscuro);
            border-radius:1.25rem;
            align-items: center;
            justify-content: center;
        }
        #cortar svg, #microfono svg,#video svg{
            width:2rem;
            height:2rem;
            fill: var(--color-blanco);
            stroke: transparent;
        }
        #pie{
            position:relative;
            grid-area: Pie; 
            display:grid;
            overflow-x: none; 
        }
        :host([media-size="small"]) #pie{
            display:none;
        }
        .parpadea {
  
            animation-name: parpadeo;
            animation-duration: 2s;
            animation-timing-function: linear;
            animation-iteration-count: infinite;
          
            -webkit-animation-name:parpadeo;
            -webkit-animation-duration: 2s;
            -webkit-animation-timing-function: linear;
            -webkit-animation-iteration-count: infinite;
        }
          
        @-moz-keyframes parpadeo{  
            0% { opacity: 1.0; }
            50% { opacity: 0.0; }
            100% { opacity: 1.0; }
        }     
        @-webkit-keyframes parpadeo {  
            0% { opacity: 1.0; }
            50% { opacity: 0.0; }
             100% { opacity: 1.0; }
        } 
        @keyframes parpadeo {  
            0% { opacity: 1.0; }
             50% { opacity: 0.0; }
            100% { opacity: 1.0; }
        }
        `
    }
    render() {
        return html`
        <div id="gridContenedor">
            <div id="header">
                <div style="display:grid;width:100%;grid-template-columns:90% 10%;">
                    <div id="bar">
                        <div id="lblTitulo">${idiomas[this.idioma].video.titulo}</div>
                    </div>
                    <div id="campana"></div>
                </div>    
                <div id="lblLeyenda">${idiomas[this.idioma].video.leyenda}</div>
            </div>
            <div id="cuerpo"  llamando @click="${this.pasar}">
                <div id="llamando" class="parpadea">${idiomas[this.idioma].video.conectando}</div>
                <div id="micvid">
                    <div id="microfono">${MICROFONO}</div>
                    <div id="video">${VIDEO}</div>
                </div>
                <div id="cortar" @click="${this.colgar}">${COLGAR}</div>
            </div>
        </div>
        <pie-componente id="pie" opcion="cinco" media-size="${this.mediaSize}">
        </pie-componente>
        `
    }
    colgar() {
        store.dispatch(modoPantalla("videocalificacion", "video"))
    }
    stateChanged(state, name) {
        if (name == MODO_PANTALLA && state.ui.quePantalla == "video") {
        }
    }
    pasar(e) {
        this.shadowRoot.querySelector("#cuerpo").removeAttribute("llamando");
        this.shadowRoot.querySelector("#cuerpo").setAttribute("hablando", "");
        this.shadowRoot.querySelector("#llamando").innerHTML = "";
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
window.customElements.define("pantalla-video", pantallaVideo);