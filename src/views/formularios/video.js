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
import {modoPantalla,dispararTimer,cancelarTimer} from "../../redux/actions/ui";
const MODO_PANTALLA = "ui.timeStampPantalla"
import {COLGAR,MICROFONO,VIDEO} from "../../../assets/icons/icons"
import {idiomas } from "../../redux/datos/idiomas"

export class pantallaVideo extends connect(store, MODO_PANTALLA)(LitElement) {
    constructor() {
        super();
        this.idioma = "ES"
        this.hidden = false
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
        #fondo{
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
        #fondo[llamando]{
            background-image:var(--imagen-video-inactivo);
        }
        #fondo[hablando]{
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
        <div id="fondo"  llamando @click="${this.pasar}">
            <div id="llamando" class="parpadea">${idiomas[this.idioma].video.conectando}</div>
            <div id="micvid">
                <div id="microfono">${MICROFONO}</div>
                <div id="video">${VIDEO}</div>
            </div>
            <div id="cortar">${COLGAR}</div>
        </div>
        `
    }
    stateChanged(state, name) {
        if (name == MODO_PANTALLA && state.ui.quePantalla == "video") {
        }
    }
    pasar(e) {
        this.shadowRoot.querySelector("#fondo").removeAttribute("llamando");
        this.shadowRoot.querySelector("#fondo").setAttribute("hablando","");
        this.shadowRoot.querySelector("#llamando").innerHTML="";
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
window.customElements.define("pantalla-video", pantallaVideo);