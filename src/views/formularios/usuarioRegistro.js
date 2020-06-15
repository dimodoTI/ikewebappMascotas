import {
    html,
    LitElement,
    css
} from "lit-element";
import {
    store
} from "../../redux/store";
import {
    connect
} from "@brunomon/helpers";
import {
    idiomas
} from "../../redux/datos/idiomas"
import {
    ikeInput
} from "../css/ikeInput"
import {
    cabecera1
} from "../css/cabecera1"
import {
    button
} from "../css/button"
import {
    modoPantalla
} from "../../redux/actions/ui";
import {
    media01
} from "../css/media01"
import {
    ATRAS
} from "../../../assets/icons/icons"
import {
    logon
} from "../../redux/actions/autorizacion"
import {
    setDatos
} from "../../redux/actions/cliente";
import {
    validaMail
} from "../../libs/funciones"
const MODO_PANTALLA = "ui.timeStampPantalla"
const LOGON_OK = "autorizacion.logonTimeStamp"
export class pantallaUsuarioRegistro extends connect(store, MODO_PANTALLA, LOGON_OK)(LitElement) {
    constructor() {
        super();
        this.hidden = true
        this.idioma = "ES"
        this.item = {
            mail: "",
            clave: "",
            recordar: ""
        }
        this.label = ""
    }

    static get styles() {
        return css `
        ${cabecera1}
        ${ikeInput}
        ${button}
        ${media01}
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
            height:90%;
        }
        #cuerpo::-webkit-scrollbar {
            display: none;
        }
        button {
            position: relative;
        }
        `
    }
    render() {
        return html `
        <div id="header">
            <div id="bar">
                <div @click=${this.clickBoton4}>${ATRAS}</div>
                <div id="lblTitulo">${idiomas[this.idioma].usuarioregistro.titulo}</div>
            </div>
            <div id="lblLeyenda">${idiomas[this.idioma].usuarioregistro.leyenda}</div>
        </div>
        <div id="cuerpo">
            <div class="ikeInput">
                <label id="lblNombre">${idiomas[this.idioma].usuarioregistro.lblNombre}</label>
                <input id="txtNombre"  @input=${this.activar} placeholder=${idiomas[this.idioma].usuarioregistro.lblNombre_ph}>
                <label id="lblErrorNombre" error oculto>Nombre Incorrecto</label>
            </div>

            <div class="ikeInput">
                <label id="lblApellido">${idiomas[this.idioma].usuarioregistro.lblApellido}</label>
                <input id="txtApellido"  @input=${this.activar} placeholder=${idiomas[this.idioma].usuarioregistro.lblApellido_ph}>
                <label id="lblErrorApellido" error oculto>Apellido Incorrecto</label>
            </div>

            <div class="ikeInput">
                <label id="lblMail">${idiomas[this.idioma].usuarioregistro.lblMail}</label>
                <input id="txtMail"  @input=${this.activar} type="email" placeholder=${idiomas[this.idioma].usuarioregistro.lblMail_ph}>
                <label id="lblErrorMail" error oculto>Mail Incorrecto</label>
            </div>

            <div class="ikeInput">
                <label id="lblCelular">${idiomas[this.idioma].usuarioregistro.lblCelu}</label>
                <input id="txtCelular"  @input=${this.activar} type="tel" placeholder=${idiomas[this.idioma].usuarioregistro.lblCelu_ph}>
                <label id="lblErrorCelular" error oculto>Celular Incorrecto</label>
            </div> 

           <!--  <div class="ikeInput">
                <label id="lblClave1">${idiomas[this.idioma].usuarioregistro.lblClave1}</label>
                <input id="txtClave1"  @input=${this.activar} type="password"}>
                <label id="lblErrorClave1" error oculto>Clave1 Incorrecta</label>
            </div>

            <div class="ikeInput">
                <label id="lblClave2">${idiomas[this.idioma].usuarioregistro.lblClave2}</label>
                <input id="txtClave2" @input=${this.activar} type="password"}>
                <label id="lblErrorClave2" error oculto>Clave2 Incorrecta</label>
            </div>
 -->
            <button id="btnIngresar" btn1 apagado style="margin-top:1.5rem" @click=${this.clickBoton1}>
            ${idiomas[this.idioma].usuarioregistro.btn1}</button>
            <button id="btnPlan" btn3 @click=${this.clickBoton2}>${idiomas[this.idioma].usuarioregistro.btn2}
            </button>
            <button id="btnInvitado" btn2 @click=${this.clickBoton3} style="padding-bottom:1rem;">${idiomas[this.idioma].usuarioregistro.btn3}</button>
            <div style="height:2rem"></div>

        </div>
        `
    }
    activar() {
        this.activo = true
        const nombre = this.shadowRoot.getElementById("txtNombre");
        const apellido = this.shadowRoot.getElementById("txtApellido");
        const mail = this.shadowRoot.getElementById("txtMail");
        const celular = this.shadowRoot.getElementById("txtCelular");
        /* const clave1 = this.shadowRoot.querySelector("#txtClave1")
        const clave2 = this.shadowRoot.querySelector("#txtClave2") */
        if (nombre.value.length < 2) {
            this.activo = false
        }
        if (apellido.value.length < 2) {
            this.activo = false
        }
        if (mail.value.length < 4) {
            this.activo = false
        }
        if (celular.value.length < 4) {
            this.activo = false
        }
        /* if (clave1.value.length < 4) {
            this.activo = false
        }
        if (clave2.value.length < 4) {
            this.activo = false
        } */
        if (this.activo) {
            this.shadowRoot.querySelector("#btnIngresar").removeAttribute("apagado")
        } else {
            this.shadowRoot.querySelector("#btnIngresar").setAttribute("apagado", "")
        }
        this.update()
    }

    valido() {
        [].forEach.call(this.shadowRoot.querySelectorAll("[error]"), element => {
            element.setAttribute("oculto", "")
        })
        let valido = true
        const nombre = this.shadowRoot.getElementById("txtNombre");
        const apellido = this.shadowRoot.getElementById("txtApellido");
        const mail = this.shadowRoot.getElementById("txtMail");
        const celular = this.shadowRoot.getElementById("txtCelular");
        //const clave1 = this.shadowRoot.querySelector("#txtClave1")
        //const clave2 = this.shadowRoot.querySelector("#txtClave2")
        if (nombre.value.length < 2) {
            valido = false
            this.shadowRoot.querySelector("#lblErrorNombre").removeAttribute("oculto");
        }
        if (apellido.value.length < 2) {
            valido = false
            this.shadowRoot.querySelector("#lblErrorApellido").removeAttribute("oculto");
        }
        if (!validaMail(mail.value)) {
            valido = false
            this.shadowRoot.querySelector("#lblErrorMail").removeAttribute("oculto");
        }
        if (celular.value.length < 8) {
            valido = false
            this.shadowRoot.querySelector("#lblErrorCelular").removeAttribute("oculto");
        }
        /* if (clave1.value.length < 8) {
            valido = false
            this.shadowRoot.querySelector("#lblErrorClave1").removeAttribute("oculto");
        }
        if (clave2.value.length < 8) {
            valido = false
            this.shadowRoot.querySelector("#lblErrorClave2").removeAttribute("oculto");
        } */
        this.update()
        return valido
    }
    /*     activaIngreso() {
            let nom = this.shadowRoot.getElementById("txtNombre");
            let mail = this.shadowRoot.getElementById("txtMail");
            let cel = this.shadowRoot.getElementById("txtCelular");
            let c1 = this.shadowRoot.getElementById("txtClave1");
            let c2 = this.shadowRoot.getElementById("txtClave2");
            if (nom.value != "" && mail.value != "" && cel.value != "" && c1.value != "" && c2.value != "") {
                if (this.shadowRoot.getElementById("btnIngresar").hasAttribute("apagado")) {
                    this.shadowRoot.querySelector("#btnIngresar").removeAttribute("apagado", "");
                }
            } else {
                if (!this.shadowRoot.getElementById("btnIngresar").hasAttribute("apagado")) {
                    this.shadowRoot.querySelector("#btnIngresar").setAttribute("apagado", "");
                }
            }
        }
     */
    stateChanged(state, name) {
        if (name == MODO_PANTALLA && state.ui.quePantalla == "usuarioregistro") {}
        if (name == LOGON_OK) {
            store.dispatch(modoPantalla("recuperaclavemsg"))
        }
    }
    firstUpdated() {}

    clickBoton4() {
        store.dispatch(modoPantalla(store.getState().ui.pantallaQueLLamo, "usuarioregistro"))
    }
    clickBoton1() {
        if (this.activo) {
            if (this.valido()) {
                //store.dispatch(modoPantalla("principal", "usuarioregistro"))
                const nombre = this.shadowRoot.getElementById("txtNombre").value;
                const apellido = this.shadowRoot.getElementById("txtApellido").value;
                const mail = this.shadowRoot.getElementById("txtMail").value;
                store.dispatch(setDatos({
                    nombre: nombre,
                    apellido: apellido,
                    email: mail
                }))

                store.dispatch(logon(nombre, apellido, mail, store.getState().cliente.datos.documento))
            }
        }
    }
    clickBoton2() {
        store.dispatch(modoPantalla("plandetalle", "usuarioregistro"))
    }
    clickBoton3() {
        store.dispatch(modoPantalla("principal", "usuarioregistro"))
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