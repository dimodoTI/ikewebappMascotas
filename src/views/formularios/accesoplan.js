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
    label
} from "../css/label"
import {
    button
} from "../css/button"
import {
    ikeInput
} from "../css/ikeInput"
import {
    cabecera1
} from "../css/cabecera1"
import {
    media01
} from "../css/media01"
import {
    modoPantalla
} from "../../redux/actions/ui";
import {
    setDatos
} from "../../redux/actions/cliente"
export class pantallaAccesoPlan extends connect(store)(LitElement) {
    constructor() {
        super();
        this.hidden = true
        this.idioma = "ES"
        this.item = {
            mail: "",
            clave: "",
            recordar: ""
        }
    }

    static get styles() {
        return css `
        ${ikeInput}
        ${button}
        ${cabecera1}
        ${media01}
        :host{
            position: absolute;
            top: 0rem;
            left: 0rem;  
            height:100%;
            width: 100%;
            background-color:var(--color-gris-claro);
            display:grid;
            grid-template-rows:2fr 8fr
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
            align-content:start
        }
        #cuerpo::-webkit-scrollbar {
            display: none;
        }
        `
    }
    render() {
        return html `
        <div id="header">        
            <div id="bar">
                <div id="lblTitulo">${idiomas[this.idioma].crearclave.titulo}</div>
            </div>
            <div id="lblLeyenda">${idiomas[this.idioma].crearclave.leyenda}</div>
        </div>
        <div id="cuerpo">
            <div class="ikeInput">
                <label id="lblDocumento">${idiomas[this.idioma].accesoplan.documento}</label>
                <input id="txtDocumento" @input=${this.activar} type="number" placeholder=${idiomas[this.idioma].accesoplan.documento_ph}>
                <label id="lblErrorDocumento" error oculto>${idiomas[this.idioma].accesoplan.errorDocumento.err1}</label>
            </div> 
            <button id="btnIngresar" btn1 apagado  @click=${this.clickBoton1}>
            ${idiomas[this.idioma].accesoplan.btn1}</button>
            <button id="btnPlan" btn3 @click=${this.clickBoton2}>${idiomas[this.idioma].accesoplan.btn2}
            </button>
            <button id="btnInvitado" btn2 @click=${this.clickBoton3}>${idiomas[this.idioma].accesoplan.btn3}</button>
            <button id="btnTengoCuenta" btn2 @click=${this.clickBoton4}>${idiomas[this.idioma].accesoplan.btn4}</button>
            <button id="btnAyuda" btn2 @click=${this.clickBoton5}>${idiomas[this.idioma].accesoplan.btn5}</button>
        </div>
        `
    }

    activar() {
        this.activo = true
        const documento = this.shadowRoot.querySelector("#txtDocumento")
        if (documento.value.length < 6) {
            this.activo = false
        }
        if (this.activo) {
            this.shadowRoot.querySelector("#btnIngresar").removeAttribute("apagado")
        } else {
            this.shadowRoot.querySelector("#btnIngresar").setAttribute("apagado", "")
        }
        this.update()
    }
    stateChanged(state, name) {}
    firstUpdated() {}
    valido() {
        [].forEach.call(this.shadowRoot.querySelectorAll("[error]"), element => {
            element.setAttribute("oculto", "")
        })
        let valido = true
        const documento = this.shadowRoot.querySelector("#txtDocumento")
        if (documento.value.length < 8) {
            valido = false
            this.shadowRoot.querySelector("#lblErrorDocumento").removeAttribute("oculto");
        }
        this.update()
        return valido
    }
    clickBoton1() {
        if (this.activo) {
            if (this.valido()) {
                const documento = this.shadowRoot.querySelector("#txtDocumento").value
                store.dispatch(setDatos({
                    documento: documento
                }))
                store.dispatch(modoPantalla("usuarioregistro", "accesoplan"));
            }
        }
    }
    clickBoton2() {
        //store.dispatch(modoPantalla("usuarioregistro", "accesoplan"))
    }
    clickBoton3() {
        store.dispatch(modoPantalla("principal", "accesoplan"))
    }
    clickBoton4() {
        store.dispatch(modoPantalla("iniciosesion", "accesoplan"))
    }
    clickBoton5() {
        store.dispatch(modoPantalla("vercobertura", "accesoplan"))
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

window.customElements.define("pantalla-accesoplan", pantallaAccesoPlan);