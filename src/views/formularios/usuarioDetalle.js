import { html, LitElement, css } from "lit-element";
import { store } from "../../redux/store";
import { connect } from "@brunomon/helpers";
import { idiomas } from "../../redux/datos/idiomas"
import { ikeInput } from "../css/ikeInput"
import { button } from "../css/button"
import { modoPantalla } from "../../redux/actions/ui";
import { cabecera1 } from "../css/cabecera1"
import { media01 } from "../css/media01"
import { ATRAS } from "../../../assets/icons/icons"
const MODO_PANTALLA = "ui.timeStampPantalla"
export class pantallaUsuarioDetalle extends connect(store, MODO_PANTALLA)(LitElement) {
    constructor() {
        super();
        this.hidden = true
        this.idioma = "ES"
        this.item = {
            foto: "--imagen-foto", nombre: "Lucia Lopez", plan: "Plan Iké 110",
            creada: "Cuenta creada el 02/03/19", mascotas: "3", consultas: "12", vacunas: "14",
            mail: "1141953476", mail: "lucia@gmail.com"
        }
        this.label = ""
    }

    static get styles() {
        return css`
        ${ikeInput}
        ${button}
        ${cabecera1}
        ${media01}
        :host{
            position: absolute;
            top: 0rem;
            left: 0rem;  
            height:100vh;
            width: 100vw;
            background-color:var(--color-gris-fondo);
            justify-content:stretch;
            align-content:stretch; 
            display:grid;
            grid-template-rows:2fr 8fr
        }
        :host([hidden]){
            display: none; 
        } 
        #cabeceraTit{
            position:relative;
            display:grid;
            width: 80%;
        }
        #cuerpo{
            position: relative;
            display:grid;
            padding:1rem;
            grid-auto-flow:row;
            grid-gap:.8rem;
            align-content:start;
            overflow-y: auto; 
            overflow-x: hidden; 
            height:90%;
        }
        #cuerpo::-webkit-scrollbar {
            display: none;
        }
        #marco{
            position: relative;
            display:grid;
            grid-auto-flow:row;
            grid-gap:.5rem;
            background-color: var(--color-blanco);
            box-shadow: var(--shadow-elevation-2-box);
            border-radius:1rem;
            justify-items:center;
        }
        #foto{
            position: absolute;
            top:-2.5rem;
            width: 5rem;
            height: 5rem;
            border-radius:50%;              
            background-repeat: no-repeat;
            background-position: center;
            background-size: 100%;
            display: grid;
            align-content: end;
            justify-content: center;
            padding-bottom: 1rem;
            z-index:10;
        }
        #fotoEdit{ 
            position: relative;
            width: 1.5rem;
            height: 1.5rem;
            background-image:var(--icon-foto-edit);
            background-repeat: no-repeat;
            background-position: center;
            background-size: 100%;
            z-index:10;
        }
        #lblTitNombre{
            padding-top: 3rem;
            font-size: var(--font-header-h1-size);
            font-weight: var(--font-header-h1-weight);
        }
        #lblPlan,#lblCreada{
            font-size: var(--font-header-h1-menos-size);
            font-weight: var(--font-header-h1-menos-weight);
        }
        #lblPlan{
            align-self: end;
        }
        #divLinea{
            width:90%;
            height:.1rem;
            background-color:var(--color-gris);
            align-self: start;
        }
        #divDatos{
            display:grid;
            width:90%;
            grid-template-columns:30% 40% 30%;
            grid-template-rows:50% 50%;
            justify-items: center;
            grid-gap:.5rem;
            padding-bottom:1rem;           
        }
        #divMascotaTitulo,#divConsultaTitulo,#divVacunaTitulo{
            font-size: var(--font-header-h1-menos-size);
            font-weight: var(--font-header-h1-menos-weight);
        }
        #divMascotaCan,#divConsultaCan,#divVacunaCan{
            font-size: var(--font-header-h1-size);
            font-weight: var(--font-header-h1-weight);      
        }
        #divInformacion{
            font-size: var(--font-header-h1-menos-size);
            font-weight: var(--font-header-h1-weight);
            justify-self: start;
        }
        button {
            font-size: var(--font-bajada-size);
            font-weight: var(--font-bajada-weight);
        }
        #divAyuda{
            font-size: var(--font-header-h1-menos-size);
            font-weight: var(--font-header-h1-weight);
            text-align:center;
        }        
        `
    }
    render() {
        return html`
        <div id="header">        
            <div id="bar">
                <div @click=${this.clickAtras}>${ATRAS}</div>
                <div id="lblTitulo">${idiomas[this.idioma].usuariodetalle.titulo}</div>
            </div>
            <div id="lblLeyenda">${idiomas[this.idioma].usuariodetalle.leyenda}</div>
        </div>
        <div id="cuerpo">
            <div style="height:1rem;width:100%"></div>
            <div id="marco">
                <div id="foto" style="background-image:var(${this.item.foto});">
                    <div id="fotoEdit"></div>
                </div>
                <div id="lblTitNombre">${this.item.nombre}</div>
                <div id="lblPlan">${this.item.plan}</div>
                <div id="lblCreada">${this.item.creada}</div>
                <div id="divLinea"></div>
                <div id="divDatos">
                    <div id="divMascotaCan">${this.item.mascotas}</div>
                    <div id="divConsultaCan">${this.item.consultas}</div>
                    <div id="divVacunaCan">${this.item.vacunas}</div>
                    <div id="divMascotaTitulo">${idiomas[this.idioma].usuariodetalle.mascota}</div>
                    <div id="divConsultaTitulo">${idiomas[this.idioma].usuariodetalle.consulta}</div>
                    <div id="divVacunaTitulo">${idiomas[this.idioma].usuariodetalle.vacuna}</div>
                </div>
            </div>
            <div id="divInformacion">${idiomas[this.idioma].usuariodetalle.informacion}</div>

            <div class="ikeInput">
                <label id="lblNombre">${idiomas[this.idioma].usuariodetalle.lblNombre}</label>
                <input id="txtNombre"  @input=${this.activar} placeholder=${idiomas[this.idioma].usuariodetalle.lblNombre_ph}>
                <label id="lblErrorNombre" error oculto>Nombre Incorrecto</label>
            </div>

            <div class="ikeInput">
                <label id="lblMail">${idiomas[this.idioma].usuariodetalle.lblMail}</label>
                <input id="txtMail"  @input=${this.activar} type="email" placeholder=${idiomas[this.idioma].usuariodetalle.lblMail_ph}>
                <label id="lblErrorMail" error oculto>Mail Incorrecto</label>
            </div>

            <div class="ikeInput">
                <label id="lblCelular">${idiomas[this.idioma].usuariodetalle.lblCelu}</label>
                <input id="txtCelular"  @input=${this.activar} type="phone" placeholder=${idiomas[this.idioma].usuariodetalle.lblCelu_ph}>
                <label id="lblErrorCelular" error oculto>Celular Incorrecto</label>
            </div> 

            <button id="btnClave" btn2 style="justify-self:end" @click=${this.clickClave}>
            ${idiomas[this.idioma].usuariodetalle.btnClave}</button>
            <button id="btnEdit" btn1 apagado @click=${this.clickEdit}>
            ${idiomas[this.idioma].usuariodetalle.btnEdit}</button>
            <button id="btnCobertura" btn3 @click=${this.clickCobertura}>
            ${idiomas[this.idioma].usuariodetalle.btnCobertura}</button>
            <button id="btnDelete" btn2 @click=${this.clickDelete}>
            ${idiomas[this.idioma].usuariodetalle.btnDelete}</button>

            <div id="divAyuda">${idiomas[this.idioma].usuariodetalle.lblAyuda}</div>

            <button id="btnAsistencia" btn3 @click=${this.clickAsistencia}>
            ${idiomas[this.idioma].usuariodetalle.btnAsistencia}</button>
            <div style="height:1rem;width:100%"></div>

        </div>
        `
    }
    valido() {
        [].forEach.call(this.shadowRoot.querySelectorAll("[error]"), element => {
            element.setAttribute("oculto", "")
        })
        let valido = true
        const nombre = this.shadowRoot.getElementById("txtNombre");
        const mail = this.shadowRoot.getElementById("txtMail");
        const celular = this.shadowRoot.getElementById("txtCelular");
        if (nombre.value.length < 8) {
            valido = false
            this.shadowRoot.querySelector("#lblErrorNombre").removeAttribute("oculto");
        }
        if (mail.value.indexOf("@") == -1) {
            valido = false
            this.shadowRoot.querySelector("#lblErrorMail").removeAttribute("oculto");
        }
        if (celular.value.length < 8) {
            valido = false
            this.shadowRoot.querySelector("#lblErrorCelular").removeAttribute("oculto");
        }
        this.update()
        return valido
    }
    activar() {
        let nom = this.shadowRoot.getElementById("txtNombre");
        let mail = this.shadowRoot.getElementById("txtMail");
        let cel = this.shadowRoot.getElementById("txtCelular");
        if (nom.value != "" && mail.value != "" && cel.value != "") {
            if (this.shadowRoot.getElementById("btnEdit").hasAttribute("apagado")) {
                this.shadowRoot.querySelector("#btnEdit").removeAttribute("apagado", "");
            }
        } else {
            if (!this.shadowRoot.getElementById("btnEdit").hasAttribute("apagado")) {
                this.shadowRoot.querySelector("#btnEdit").setAttribute("apagado", "");
            }
        }
    }
    stateChanged(state, name) {
        if (name == MODO_PANTALLA && state.ui.quePantalla == "usuariodetalle") {
        }
    }
    firstUpdated() {
    }

    clickAtras() {
        store.dispatch(modoPantalla(store.getState().ui.pantallaQueLLamo, "usuariodetalle"))
    }
    clickClave() {
        store.dispatch(modoPantalla("clavemodificar", "usuariodetalle"))
    }
    clickEdit() {
        if (this.activar) {
            if (this.valido()) {
                store.dispatch(modoPantalla("principal", "usuariodetalle"))
            }
        }
    }
    clickCobertura() {
        store.dispatch(modoPantalla("plandetalle", "usuariodetalle"))
    }
    clickDelete() {
    }
    clickAsistencia() {
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

window.customElements.define("pantalla-usuariodetalle", pantallaUsuarioDetalle);