import {html,LitElement,css} from "lit-element";
import {store} from "../../redux/store";
import {connect} from "@brunomon/helpers";
import {idiomas } from "../../redux/datos/idiomas"
import {label} from "../css/label"
import {input} from "../css/input"
import {button} from "../css/button"
import {modoPantalla} from "../../redux/actions/ui";
const MODO_PANTALLA = "ui.timeStampPantalla"
export class pantallaUsuarioRegistro extends connect(store, MODO_PANTALLA)(LitElement) {
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
            display: flex;;
            top: 0px;
            left: 0px;
            height: 20%;
            width: 100%;
            background-color: var(--color-blanco);
            align-items:center; 
            justify-content:center;  
        }
        #cabeceraTit{
            position:relative;
            display:grid;
            width: 80%;
        }
        #cuerpo{
            position: absolute;
            padding-left:10%;
            height: 80%;
            display:grid;
            grid-auto-flow:row;
            grid-gap: .7rem;
            top: 20%;
            width: 80%;
            background-color: transparent;
            align-items:center; 
            justify-items:center;
            overflow-y: auto; 
        }
        #cuerpo::-webkit-scrollbar {
            display: none;
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
            <cabecera1-componente id="cabeceraTit"
            titulo="${idiomas[this.idioma].usuarioregistro.titulo}" 
            leyenda="${idiomas[this.idioma].usuarioregistro.leyenda}"
            .btn1=${function () {store.dispatch(modoPantalla("accesoplan","usuarioregistro"))}}
            ></cabecera1-componente>   
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
        if (name == MODO_PANTALLA && state.ui.quePantalla == "usuarioregistro") {
        }
    }
    firstUpdated() {
    }
    

    clickBoton1(){
        let ok=false
        if(this.shadowRoot.getElementById("txtNombre").value.length < 4){
            if (this.shadowRoot.getElementById("lblErrorNombre").hasAttribute("oculto")){
                this.shadowRoot.getElementById("lblErrorNombre").removeAttribute("oculto","");
                this.shadowRoot.getElementById("lblErrorNombre").innerHTML=idiomas[this.idioma].accesoplan.errorDocumento.err1 ;
            }
        }else{
            ok=true
            if (!this.shadowRoot.getElementById("lblErrorNombre").hasAttribute("oculto")){
                this.shadowRoot.getElementById("lblErrorNombre").setAttribute("oculto","");
            }
        }
        if (ok){
            store.dispatch(modoPantalla("principal","usuarioregistro"))

        }
 
    }
    clickBoton2(){
        store.dispatch(modoPantalla("plandetalle","usuarioregistro"))
    }
    clickBoton3(){
        store.dispatch(modoPantalla("principal","usuarioregistro"))
    }
    clickBoton4(){
        store.dispatch(modoPantalla("iniciosesion","usuarioregistro"))
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