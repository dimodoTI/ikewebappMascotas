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
            overflow-y: hidden; 
            overflow-y: auto; 
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
            grid-gap: .7rem;
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
            <label id="lblTitulo">${idiomas[this.idioma].usuarioregistro.titulo}</label>
            <label id="lblLeyenda">${idiomas[this.idioma].usuarioregistro.leyenda}</label>
        </div>
        <div id="cuerpo">
            <label id="lblNombre" style="top:1.5rem">${idiomas[this.idioma].usuarioregistro.lblNombre}
            </label>
            <input id="txtNombre" style="margin-top:1.5rem" @input=${this.activaIngreso}>
            <label id="lblErrorNombre" error oculto></label>
 
            <label id="lblMail" style="top:1.5rem">${idiomas[this.idioma].usuarioregistro.lblMail}
            </label>
            <input id="txtMail" style="margin-top:1.5rem" @input=${this.activaIngreso}>
            <label id="lblErrorMail" error oculto></label>
 
            <label id="lblCelular" style="top:1.5rem">${idiomas[this.idioma].usuarioregistro.lblCelu}
            </label>
            <input id="txtCelular" style="margin-top:1.5rem" @input=${this.activaIngreso}>
            <label id="lblErrorCelular" error oculto></label>

            <label id="lblClave1" style="top:1.5rem">${idiomas[this.idioma].usuarioregistro.lblClave1}
            </label>
            <input id="txtClave1" style="margin-top:1.5rem" @input=${this.activaIngreso}>
            <label id="lblErrorClave1" error oculto></label>

            <label id="lblClave2" style="top:1.5rem">${idiomas[this.idioma].usuarioregistro.lblClave2}
            </label>
            <input id="txtClave2" style="margin-top:1.5rem" @input=${this.activaIngreso}>
            <label id="lblErrorClave2" error oculto></label>

            <button id="btnIngresar" btn1 apagado style="margin-top:1.5rem" @click=${this.clickBoton1}>
            ${idiomas[this.idioma].usuarioregistro.btn1}</button>
            <button id="btnPlan" btn3 @click=${this.clickBoton2}>${idiomas[this.idioma].usuarioregistro.btn2}
            </button>
            <button id="btnInvitado" btn2 @click=${this.clickBoton3} style="padding-bottom:1rem;">${idiomas[this.idioma].usuarioregistro.btn3}</button>
        </div>
        `
    }

    activaIngreso(){
        let nom = this.shadowRoot.getElementById("txtNombre");
        let mail = this.shadowRoot.getElementById("txtMail");
        let cel =this.shadowRoot.getElementById("txtCelular");
        let c1 =this.shadowRoot.getElementById("txtClave1");
        let c2 =this.shadowRoot.getElementById("txtClave2");
        if (nom.value != "" && mail.value != "" && cel.value != "" && c1.value != "" && c2.value != ""){
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
        this.shadowRoot.getElementById("cuerpo").scroll(1000.1000)
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