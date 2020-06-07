import { html, LitElement, css } from "lit-element";
import { store } from "../../redux/store";
import { connect } from "@brunomon/helpers";
import { idiomas } from "../../redux/datos/idiomas"
import { label } from "../css/label"
import { button } from "../css/button"
import { modoPantalla } from "../../redux/actions/ui";
export class pantallaVacunaMsg extends connect(store)(LitElement) {
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
            z-index:10;
            background-color: var(--color-negro);
            opacity:.7; 
        }
        :host([media-size="small"]) #cuerpo{
            display: grid;
            position:relative;
            justify-items:center;
            align-items: center;  
            height: 100%;
            width: 100%;   
            background-color: var(--color-gris-fondo);
            grid-template-rows:5fr 1fr 1fr 1fr 2fr;
        }
        :host(:not([media-size="small"])) #cuerpo{
            position:absolute;
            top:15%;
            left:15%;
            display: grid;
            justify-items:center;
            align-items: center;  
            background-color: var(--color-gris-fondo);
            height: 70%;
            width: 70%;   
            grid-template-rows:5fr 1fr 1fr 1fr 2fr;
            z-index:20;
        }
        #x{
            position: absolute;
            top: .5rem;
            right: .5rem;
            width: 1.5rem;
            height: 1.5rem;
            background-color: transparent;
            background-image:var(--icon-cerrar);
            background-repeat: no-repeat;
            background-position: center;
            background-size: 100%;
            cursor: pointer;
            z-index:10;
        }
        #titulo{
            width:90%;
            align-items: flex-end;
            justify-content:center;
            text-align:center;
            font-size: var(--font-header-h1-size);
            font-weight: var(--font-header-h1-weight);
        }
        #leyenda{
            position:relative;
            width:90%;
            align-items: flex-start;
            justify-content:center;
            text-align:center;
            font-size: var(--font-header-h2-size);
            font-weight: var(--font-header-h2-weight);
        }
        button {
            width:90%;
            height: 2rem;
            align-items: flex-start;
            justify-content:center;
            font-size: var(--font-bajada-size);
            font-weight: var(--font-bajada-weight);
        }
        #imagen{
            height:8rem;
            width:8rem;
            background-color:trasparent;
            background-image:var(--imagen-clave-mod);
            background-repeat: no-repeat;
            background-position: center;
            background-size: 100%;
            align-self: end;
        }
    `
    }
    render() {
        return html`
        <div id="fondo"> </div>
        <div id="cuerpo">
            <div id="x" @click=${this.clickBoton1}>
            </div>               
            <div id="imagen">
            </div>
            <div id="titulo">
            ${idiomas[this.idioma].vacunamsg.titulo}
            </div>
            <label id="leyenda">
            ${idiomas[this.idioma].vacunamsg.leyenda}
            </label>
            <button id="btnOtraVacuna" btn1 @click=${this.clickBoton2}>
            ${idiomas[this.idioma].vacunamsg.btn1}
            </button>
            <button id="btnInicio" btn2 @click=${this.clickBoton3}>
            ${idiomas[this.idioma].vacunamsg.btn2}
            </button>
        </div>
        `
    }

    clickBoton1() {
        store.dispatch(modoPantalla("principal", "principal"))
    }
    clickBoton2() {
        store.dispatch(modoPantalla("vacuna", "principal"))
    }
    clickBoton3() {
        store.dispatch(modoPantalla("principal", "principal"))
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

window.customElements.define("pantalla-vacunamsg", pantallaVacunaMsg);