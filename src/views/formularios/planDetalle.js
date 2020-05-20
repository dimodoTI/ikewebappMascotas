import {html,LitElement,css} from "lit-element";
import {store} from "../../redux/store";
import {connect} from "@brunomon/helpers";
import {idiomas } from "../../redux/datos/idiomas"
import {button} from "../css/button"
import {cabecera1} from "../css/cabecera1"
import {modoPantalla,pantallaQueLLamo} from "../../redux/actions/ui";
import {repeat} from 'lit-html/directives/repeat.js';
import {ATRAS} from "../../../assets/icons/icons"
export class pantallaPlanDetalle extends connect(store)(LitElement) {
    constructor() {
        super();
        this.plan=["Atención ante emergencias.","Análisis y estudios.","Intervención quirúrgica.",
        "Internación.","Guardería.","Ayuda para localización de mascotas extraviadas.",
        "Envío de alimento a domicilio.","Asesoramiento legal telefónico.","Orientación en adiestramiento.",
        "Descuentos en farmacias y veterinarias."]
        this.hidden = true
        this.idioma = "ES"
    }

    static get styles() {
        return css`
        ${button}
        ${cabecera1}
        :host{
            position: absolute;
            top: 0rem;
            left: 0rem;  
            height:100%;
            width: 100%;
            background-color:var(--color-gris-claro);
            display:grid;
            grid-template-rows:2fr 8fr;
        }
        :host([hidden]){
            display: none; 
        } 
        #cuerpo{
            background-color: transparent;
            display:grid;
            padding:2rem;
            grid-auto-flow:row;
            grid-gap:.8rem;
            align-content:start;
            overflow-y: auto; 
            overflow-x: hidden; 
        }
        #cuerpo::-webkit-scrollbar {
            display: none;
        }
        button {
            position: relative;
            width: 80%;
            color: var(--color-negro);
            background-color:transparent;
            border-radius:0;
            font-size: var(--font-bajada-size);
            font-weight: var(--font-bajada-weight);
        }
        #planes{
            width: auto;
            position: relative;
            display: grid;
            grid-template-columns: 15% auto;
            grid-gap: .8rem;
            font-size: var(--font-header-h2-size);
            font-weight: var(--font-header-h2-weight);
            padding-bottom:1rem;
        }
        #planImg{
            height: auto;
            width: 100%;
            background-image: var(--icon-click);
            background-color: transparent;
            background-repeat: no-repeat;
            background-position: center center;
            background-size: 1rem 1rem;
        }
        #planDes{
            height: 1.5rem;
            width: 100%;
            font-size: var(--font-header-h2-size);
            font-weight: var(--font-header-h2-weight);
            display: flex;
            align-items:center; 
            justify-content:left;
        }        
        `
    } 
    render() {
        return html `

        <div id="header">
            <div id="bar">
                <div @click=${this.clickBoton3}>${ATRAS}</div>
                <div id="lblTitulo">${idiomas[this.idioma].plandetalle.titulo}</div>
            </div>
            <div id="lblLeyenda">${idiomas[this.idioma].plandetalle.leyenda}</div>
        </div>
        <div id="cuerpo">
            <div id="planes">
                ${repeat(this.plan, (item) => item, (item, index) => html`
                    <div id="planImg">
                    </div>
                    <div id="planDes">
                        ${item}
                    </div>
                `)}
                <button id="btn-poliza" btn1 @click=${this.clickBoton1}
                style="grid-column-start:1;grid-column-end:3;width:100%;margin-top:1rem">
                ${idiomas[this.idioma].plandetalle.btn1}
                </button>
                <button id="btn-planes" btn3 @click=${this.clickBoton2}
                style="grid-column-start: 1;grid-column-end:3;width:100%;margin-top:1rem">
                ${idiomas[this.idioma].plandetalle.btn2}
                </button>  
            
            </div>
             
        </div>
        `
    }
    
    clickBoton1(){
        //store.dispatch(modoPantalla("iniciosesion","plandetalle"))
    }
    clickBoton2(){
        //store.dispatch(modoPantalla("iniciosesion","plandetalle"))
    }
    clickBoton3(){
        store.dispatch(modoPantalla(store.getState().ui.pantallaQueLLamo,"plandetalle"))
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

window.customElements.define("pantalla-plandetalle", pantallaPlanDetalle);