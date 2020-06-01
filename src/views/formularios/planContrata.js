import { html, LitElement, css } from "lit-element";
import { store } from "../../redux/store";
import { connect } from "@brunomon/helpers";
import { idiomas } from "../../redux/datos/idiomas"
import { label } from "../css/label"
import { media02 } from "../css/media02"
import { modoPantalla } from "../../redux/actions/ui";
import { button } from "../css/button"
export class pantallaPlanContrata extends connect(store)(LitElement) {
    constructor() {
        super();
        this.hidden = true
        this.idioma = "ES"
    }

    static get styles() {
        return css`
        ${label}
        ${button}
        ${media02}
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
            background-image:var(--icon-cerrar);
            background-repeat: no-repeat;
            background-position: center;
            background-size: 100%;
            cursor: pointer;
            z-index:10;
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
        button, label {
            width:80vw;
            font-size: var(--font-bajada-size);
            font-weight: var(--font-bajada-weight);
       }
        `
    }
    render() {
        return html`   
            <div id="x" @click=${this.clickBoton1}>
            </div>           
            <label id="titulo">
            ${idiomas[this.idioma].plancontrata.titulo}
            </label>
            <label id="leyenda" style="padding-bottom:1.5rem;">
            ${idiomas[this.idioma].plancontrata.leyenda}
            </label>
            <button id="btn-planes" btn1 @click=${this.clickBoton2}>
            ${idiomas[this.idioma].plancontrata.btn1}
            </button>
            <button id="btn-asesor" btn3 @click=${this.clickBoton3}>
            ${idiomas[this.idioma].plancontrata.btn2}
            </button>
            <button id="btn-volver" btn2 @click=${this.clickBoton4}>
            ${idiomas[this.idioma].plancontrata.btn3}
            </button>


        `
    }

    clickBoton1() {
        store.dispatch(modoPantalla(store.getState().ui.pantallaQueLLamo, "plancontrata"))
    }
    clickBoton2() {
        //store.dispatch(modoPantalla("iniciosesion"))
    }
    clickBoton3() {
        store.dispatch(modoPantalla("vercobertura", "principal"))
    }
    clickBoton4() {
        store.dispatch(modoPantalla(store.getState().ui.pantallaQueLLamo, "plancontrata"))
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

window.customElements.define("pantalla-plancontrata", pantallaPlanContrata);