import {html,LitElement,css} from "lit-element";
import {store} from "../../redux/store";
import {connect} from "@brunomon/helpers";
import {idiomas } from "../../redux/datos/idiomas"
import {label} from "../css/label"
import {input} from "../css/input"
import {button} from "../css/button"
import {modoPantalla} from "../../redux/actions/ui";
export class pantallaUsuarioRegistro extends connect(store)(LitElement) {
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
        ${input}
        ${button}
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
            display:grid;
            grid-auto-flow:row;
            grid-gap:.5rem;
            padding-left:1.5rem;
            top: 0px;
            left: 0px;
            height: 20%;
            width: 100%;
            background-color: var(--color-blanco);
            align-items:center; 
            justify-content:left;  
        }
        #lblTitulo{
            position: relative;
            top: 1.2rem;
            background-color: transparent;
            font-size: var(--font-header-h1-size);
            font-weight: var(--font-header-h1-weight);
        }
        #lblLeyenda{
            position: relative;
            background-color: transparent;
            font-size: var(--font-header-h2-size);
            font-weight: var(--font-header-h2-weight);
        }
        #cuerpo{
            position: absolute;
            display:grid;
            grid-auto-flow:row;
            grid-gap: 1rem;
            padding-left:1rem;
            top: 20%;
            left: 0px;
            width: 100%;
            background-color: transparent;
            justify-items:left;
        }
        label, input, button {
            position: relative;
            color: var(--color-negro);
            background-color:transparent;
            border-radius:0;
            width: 80%;
            font-size: var(--font-bajada-size);
            font-weight: var(--font-bajada-weight);
        }
        `
    } 
    render() {
        return html `
        <div id="header">
            <label id="lblTitulo">${idiomas[this.idioma].accesoplan.titulo}</label>
            <label id="lblLeyenda">${idiomas[this.idioma].accesoplan.leyenda}</label>
        </div>
        <div id="cuerpo">
            <label id="lblDocumento" style="top:1.5rem">${idiomas[this.idioma].accesoplan.documento}
            </label>
            <input id="txtDocumento" style="margin-top:1.5rem" @input=${this.activaIngreso}>
            <label id="lblErrorDocumento" error oculto></label>
            <button id="btnIngresar" btn1 apagado style="margin-top:1.5rem" @click=${this.clickBoton1}>
            ${idiomas[this.idioma].accesoplan.btn1}</button>
            <button id="btnPlan" btn3 @click=${this.clickBoton2}>${idiomas[this.idioma].accesoplan.btn2}
            </button>
            <button id="btnInvitado" btn2 @click=${this.clickBoton3}>${idiomas[this.idioma].accesoplan.btn3}</button>
            <button id="btnTengoCuenta" btn2 style="margin-top:1.5rem" @click=${this.clickBoton4}>${idiomas[this.idioma].accesoplan.btn4}</button>

        </div>
        `
    }

    activaIngreso(){
        if (this.shadowRoot.getElementById("txtDocumento").value != ""){
            if(this.shadowRoot.getElementById("btnIngresar").hasAttribute("apagado")){
                this.shadowRoot.querySelector("#btnIngresar").removeAttribute("apagado","");
            }
        }else{
            if(!this.shadowRoot.getElementById("btnIngresar").hasAttribute("apagado")){
                this.shadowRoot.querySelector("#btnIngresar").setAttribute("apagado","");
            }
        }
    }
    stateChanged(state, name) {
    }
    firstUpdated() {
    }

    clickBoton1(){
        let ok=false
        if(this.shadowRoot.getElementById("txtDocumento").value.length < 4){
            if (this.shadowRoot.getElementById("lblErrorDocumento").hasAttribute("oculto")){
                this.shadowRoot.getElementById("lblErrorDocumento").removeAttribute("oculto","");
                this.shadowRoot.getElementById("lblErrorDocumento").innerHTML=idiomas[this.idioma].accesoplan.errorDocumento.err1 ;
            }
        }else{
            ok=true
            if (!this.shadowRoot.getElementById("lblErrorDocumento").hasAttribute("oculto")){
                this.shadowRoot.getElementById("lblErrorDocumento").setAttribute("oculto","");
            }
        }
        if (ok){
            store.dispatch(modoPantalla("vercobertura"))
        }
 
    }
    clickBoton2(){
        store.dispatch(modoPantalla("vercobertura"))
    }
    clickBoton3(){
        store.dispatch(modoPantalla("iniciosesion"))
    }
    clickBoton4(){
        store.dispatch(modoPantalla("iniciosesion"))
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

window.customElements.define("pantalla-usuarioregistro", pantallaUsuarioRegistro);