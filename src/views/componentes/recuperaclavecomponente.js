import {
    html,
    LitElement,
    css
} from "lit-element";
import {store} from "../../redux/store";
import {connect} from "@brunomon/helpers";
import {idiomas } from "../../redux/datos/idiomas"
import {button} from "../css/button"
import {input} from "../css/input"
import {label} from "../css/label"
import {modoPantalla} from "../../redux/actions/ui";
export class recuperaClaveComponente extends connect(store)(LitElement) {
    constructor() {
        super();
        this.clickBtn1 = {};  
        this.idioma = "ES"
        this.item={mail:"",clave:"",recordar:""}
        this.label = ""
    }

    static get styles() {
        return css`
        ${button}
        ${input}
        ${label}
        :host{
            position: absolute;
            top: 2.5rem;
            left: 0px;
            width: 100%;
            background-color: transparent;
            display:grid;
            grid-auto-flow:row;
            grid-gap:1rem;
            align-items:center;
            justify-items:center;
        }
        label,input,button {
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
            <label id="lblMail">${idiomas[this.idioma].recuperaclave.mail}</label>
            <input id="txtMail"  @input=${this.activaInicioSesion}>
            <label id="lblErrorMail" error oculto></label>
            <label id="lblDocumento">${idiomas[this.idioma].recuperaclave.documento}</label>
            <input id="txtDocumento" @input=${this.activaInicioSesion}>
            <label id="lblErrorDocumento" error oculto></label>
            <button id="btn-recuperar" btn1 apagado @click=${this.clickBoton1}>
            ${idiomas[this.idioma].recuperaclave.btn1}
            </button>
        `
    }
    activaInicioSesion(){
        if (this.shadowRoot.getElementById("txtMail").value != "" && this.shadowRoot.getElementById("txtDocumento").value != ""){
            if(this.shadowRoot.getElementById("btn-recuperar").hasAttribute("apagado")){
                this.shadowRoot.querySelector("#btn-recuperar").removeAttribute("apagado","");
            }
        }else{
            if(!this.shadowRoot.getElementById("btn-recuperar").hasAttribute("apagado")){
                this.shadowRoot.querySelector("#btn-recuperar").setAttribute("apagado","");
            }
        }  
    }


    clickBoton1(){
        let valida = true;
        if(this.shadowRoot.getElementById("txtMail").value.length < 4){
            valida = false
            if (this.shadowRoot.getElementById("lblErrorMail").hasAttribute("oculto")){
                this.shadowRoot.getElementById("lblErrorMail").removeAttribute("oculto","");
                this.shadowRoot.getElementById("lblErrorMail").innerHTML=idiomas[this.idioma].recuperaclave.errorMail.err1 ;
            }
        }else{
            if (!this.shadowRoot.getElementById("lblErrorMail").hasAttribute("oculto")){
                this.shadowRoot.getElementById("lblErrorMail").setAttribute("oculto","");
            }
        }
        if(this.shadowRoot.getElementById("txtDocumento").value.length < 4){
            valida = false
            if (this.shadowRoot.getElementById("lblErrorDocumento").hasAttribute("oculto")){
                this.shadowRoot.getElementById("lblErrorDocumento").removeAttribute("oculto","");
                this.shadowRoot.getElementById("lblErrorDocumento").innerHTML=idiomas[this.idioma].recuperaclave.errorDocumento.err1 ;
            }
        }else{
            if (!this.shadowRoot.getElementById("lblErrorDocumento").hasAttribute("oculto")){
                this.shadowRoot.getElementById("lblErrorDocumento").setAttribute("oculto","");
            }
        }
        if (valida){
            this.clickBtn1()
        }
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
            }
        }
    }
}

window.customElements.define("recuperaclave-componente", recuperaClaveComponente);