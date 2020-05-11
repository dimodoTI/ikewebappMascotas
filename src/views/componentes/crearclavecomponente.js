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
export class crearClaveComponente extends connect(store)(LitElement) {
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
            top: 0px;
            left: 0px;
            height: 100%;
            width: 100%;
            background-color: transparent;
            display:grid;
            grid-auto-flow:row;
            grid-gap:0rem;
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
            <label id="lblClave1">${idiomas[this.idioma].crearclave.clave1}</label>
            <input id="txtClave1"  @input=${this.activaInicioSesion}>
            <label id="lblErrorClave1" error oculto></label>
            <label id="lblClave2">${idiomas[this.idioma].crearclave.clave2}</label>
            <input id="txtClave2" @input=${this.activaInicioSesion}>
            <label id="lblErrorClave2" error oculto></label>
            <button id="btn-recuperar" btn1 apagado @click=${this.clickBoton1}>
            ${idiomas[this.idioma].crearclave.btn1}
            </button>
        `
    }
    activaInicioSesion(){
        if (this.shadowRoot.getElementById("txtClave1").value != "" && this.shadowRoot.getElementById("txtClave2").value != ""){
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
        if(this.shadowRoot.getElementById("txtClave1").value.length < 4){
            valida = false
            if (this.shadowRoot.getElementById("lblErrorClave1").hasAttribute("oculto")){
                this.shadowRoot.getElementById("lblErrorClave1").removeAttribute("oculto","");
                this.shadowRoot.getElementById("lblErrorClave1").innerHTML=idiomas[this.idioma].crearclave.errorClave1.err1 ;
            }
        }else{
            if (!this.shadowRoot.getElementById("lblErrorClave1").hasAttribute("oculto")){
                this.shadowRoot.getElementById("lblErrorClave1").setAttribute("oculto","");
            }
        }
        if(this.shadowRoot.getElementById("txtClave2").value.length < 4){
            valida = false
            if (this.shadowRoot.getElementById("lblErrorClave2").hasAttribute("oculto")){
                this.shadowRoot.getElementById("lblErrorClave2").removeAttribute("oculto","");
                this.shadowRoot.getElementById("lblErrorClave2").innerHTML=idiomas[this.idioma].crearclave.errorClave2.err1 ;
            }
        }else{
            if (!this.shadowRoot.getElementById("lblErrorClave2").hasAttribute("oculto")){
                this.shadowRoot.getElementById("lblErrorClave2").setAttribute("oculto","");
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

window.customElements.define("crearclave-componente", crearClaveComponente);