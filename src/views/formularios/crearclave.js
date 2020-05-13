import {html,LitElement,css} from "lit-element";
import {store} from "../../redux/store";
import {connect} from "@brunomon/helpers";
import {idiomas } from "../../redux/datos/idiomas"
import {label} from "../css/label"
import {modoPantalla} from "../../redux/actions/ui";
import {crearClave} from "../componentes/crearclavecomponente"
export class pantallaCrearClave extends connect(store)(LitElement) {
    constructor() {
        super();
        this.hidden = true
        this.idioma = "ES"
        this.item={mail:"",clave:"",recordar:""}
        this.label = ""
    }

    static get styles() {
        return css`
        ${label}
        :host{
            position: absolute;
            top: 0rem;
            left: 0rem;  
            height:100%;
            width: 100%;
            background-color:var(--color-gris-claro);
        }
        :host([hidden]){
            display: none; 
        } 
        #header{
            position: absolute;
            top: 0px;
            left: 0px;
            height: 20%;
            width: 100%;
            background-color: var(--color-blanco);
         }
        #cuerpo{
            position: absolute;
            top: 20%;
            left: 0px;
            height: 45%;
            width: 100%;
            background-color: transparent;
            display:grid;
            grid-auto-flow:row;
            grid-gap:0rem;
            align-items:center;
            justify-items:center;
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
        <div id="header">            
            <cabecera1-componente 
            titulo="${idiomas[this.idioma].crearclave.titulo}" 
            leyenda="${idiomas[this.idioma].crearclave.leyenda}"
            .btn1=${function () {store.dispatch(modoPantalla("iniciosesion"))}}
            ></cabecera1-componente>   

        </div>
        <div id="cuerpo">
            <crearclave-componente 
            .clickBtn1=${function () {store.dispatch(modoPantalla("crearclavemsg"))
            }}>
            </crearclave-componente>
        </div>
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
            },
            label: {
                type: String,
                reflect: ""
            }
        }
    }
}

window.customElements.define("pantalla-crearclave", pantallaCrearClave);