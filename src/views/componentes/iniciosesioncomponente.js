import {
    html,
    LitElement,
    css
} from "lit-element";
import { repeat } from 'lit-html/directives/repeat.js';
import {
    store
} from "../../redux/store";
import {
    connect
} from "@brunomon/helpers";
import { idiomas } from "../../redux/datos/idiomas"
import {button} from "../css/button"
import {input} from "../css/input"
import {label} from "../css/label"
import {miCheckbox} from "../componentes/checkbox"
export class inicioSesionComponente extends connect(store)(LitElement) {
    constructor() {
        super();
        this.idioma = "ES"
        this.item={mail:"",clave:"",recordar:""}
        this.label = ""
        this.clickBtn1 = {};  
        this.clickBtn2 = {};  
        this.clickBtn3 = {};  
    }

    static get styles() {
        return css`
        ${button}
        ${input}
        ${label}
        :host{
            position: absolute;
            top: 0rem;
            left: 0rem;  
            height:100%;
            width: 100%;
            background-color:var(--color-gris-claro);
        }
        #header{
            position: absolute;
            top: 0px;
            left: 0px;
            height: 20%;
            width: 100%;
            background-color: var(--color-blanco);
         }
        #lblTitulo{
            position: absolute;
            top: 1rem;
            left: 1.5rem;
            height: 40%;
            width: 80%;
            background-color: transparent;
            display: flex;
            align-items:center; 
            justify-content:left;
            text-align: left;
            font-size: var(--font-header-h1-size);
            font-weight: var(--font-header-h1-weight);
        }
        #lblLeyenda{
            position: absolute;
            bottom: .1rem;
            left: 1.5rem;
            height: 60%;
            width: 80%;
            background-color: transparent;
            display: flex;
            align-items:center; 
            justify-content:left;
            text-align: left;
            font-size: var(--font-header-h2-size);
            font-weight: var(--font-header-h2-weight);
        }
        #cuerpo{
            position: absolute;
            top: 25%;
            left: 0px;
            width: 100%;
            background-color: transparent;
            display:grid;
            grid-auto-flow:row;
            grid-gap:.8rem;
            align-items:center;
            justify-items:center;
        }
        label,input,button,mi-checkbox {
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
            <label id="lblTitulo">${idiomas[this.idioma].iniciosession.titulo}</label>
            <label id="lblLeyenda">${idiomas[this.idioma].iniciosession.leyenda}</label>
        </div>
        <div id="cuerpo">
            <label id="lblMail">${idiomas[this.idioma].iniciosession.mail}</label>
            <input id="txtMail"  @input=${this.activaInicioSesion}>
            <label id="lblErrorMail" error oculto></label>
            <label id="lblClave">${idiomas[this.idioma].iniciosession.clave}</label>
            <input id="txtClave" @input=${this.activaInicioSesion}>
            <label id="lblErrorClave" error oculto></label>
            <mi-checkbox label="${this.label}"></mi-checkbox>
            <button id="btn-siguiente" btn1 apagado @click=${this.clickBoton1}>
            ${idiomas[this.idioma].iniciosession.btn1}
            </button>
            <button id="btn-cuenta" btn2 @click=${this.clickBoton2}>
            ${idiomas[this.idioma].iniciosession.btn2}
            </button>
            <button id="btn-sinregistro" btn2 @click=${this.clickBoton3}>
            ${idiomas[this.idioma].iniciosession.btn3}
            </button>
        </div>
        `
    }
    activaInicioSesion(){
        if (this.shadowRoot.getElementById("txtMail").value != "" && this.shadowRoot.getElementById("txtClave").value != ""){
            if(this.shadowRoot.getElementById("btn-siguiente").hasAttribute("apagado")){
                this.shadowRoot.querySelector("#btn-siguiente").removeAttribute("apagado","");
            }
        }else{
            if(!this.shadowRoot.getElementById("btn-siguiente").hasAttribute("apagado")){
                this.shadowRoot.querySelector("#btn-siguiente").setAttribute("apagado","");
            }
        }       
    }


    clickBoton1(){
        if(this.shadowRoot.getElementById("txtClave").value.length < 4){
            if (this.shadowRoot.getElementById("lblErrorClave").hasAttribute("oculto")){
                this.shadowRoot.getElementById("lblErrorClave").removeAttribute("oculto","");
                this.shadowRoot.getElementById("lblErrorClave").innerHTML=idiomas[this.idioma].iniciosession.errorClave.err1 ;
            }
        }else{
            if (!this.shadowRoot.getElementById("lblErrorClave").hasAttribute("oculto")){
                this.shadowRoot.getElementById("lblErrorClave").setAttribute("oculto","");
            }
        }
        if(this.shadowRoot.getElementById("txtMail").value.length < 4){
            if (this.shadowRoot.getElementById("lblErrorMail").hasAttribute("oculto")){
                this.shadowRoot.getElementById("lblErrorMail").removeAttribute("oculto","");
                this.shadowRoot.getElementById("lblErrorMail").innerHTML=idiomas[this.idioma].iniciosession.errorMail.err1 ;
            }
        }else{
            if (!this.shadowRoot.getElementById("lblErrorMail").hasAttribute("oculto")){
                this.shadowRoot.getElementById("lblErrorMail").setAttribute("oculto","");
            }
        }
    }
    
    clickBoton2(){
        this.clickBtn2();
    }
    clickBoton3(){
        this.clickBtn2();
    }
    stateChanged(state, name) {
    }
    firstUpdated() {
    }

    static get properties() {
        return {
            label: {
                type: String,
                reflect: ""
            },
            clickBtn1: {
                type: Object,
                reflect: ""
            },
            clickBtn2: {
                type: Object,
                reflect: ""
            },
            clickBtn3: {
                type: Object,
                reflect: ""
            }
        }
    }
}

window.customElements.define("iniciosesion-componente", inicioSesionComponente);