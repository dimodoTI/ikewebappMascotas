import {html,LitElement,css} from "lit-element";
import {store} from "../../redux/store";
import {connect} from "@brunomon/helpers";
import {idiomas } from "../../redux/datos/idiomas"
import {label} from "../css/label"
import {modoPantalla} from "../../redux/actions/ui";
import {recuperaClave} from "../componentes/recuperaclavecomponente"
export class pantallaRecuperaClave extends connect(store)(LitElement) {
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
        #titulo{
            position: absolute;
            display: flex;
            top: .1rem;
            left: 1.5rem;
            height: 40%;
            width: 90%;
            background-color: transparent;
            align-items:center; 
            justify-content:left;           
        }
        #atras{
            position: relative;
            height: 100%;
            width: 10%;
            background-color: transparent;
            background-image:var(--icon-flecha-izq);
            background-repeat: no-repeat;
            background-position: left center;
            background-size: 100%;
        }
        #lblTitulo{
            position: relative;
            left: 0rem;
            height: 100%;
            width: 90%;
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
            <div id="titulo">
                <div id="atras" @click=${this.clickBoton1}></div>
                <label id="lblTitulo">${idiomas[this.idioma].recuperaclave.titulo}</label>
            </div>
            <label id="lblLeyenda">${idiomas[this.idioma].recuperaclave.leyenda}</label>
        </div>
        <div id="cuerpo">
            <recuperaclave-componente 
            .clickBtn1=${function () {store.dispatch(modoPantalla("recuperaclavemsg"))
            }}>
            </recuperaclave-componente>
        </div>
        `
    }


    clickBoton2(){
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

window.customElements.define("pantalla-recuperaclave", pantallaRecuperaClave);