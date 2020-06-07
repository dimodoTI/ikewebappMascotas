import { html, LitElement, css } from "lit-element";
import { store } from "../../redux/store";
import { connect } from "@brunomon/helpers";
import { idiomas } from "../../redux/datos/idiomas"
import { button } from "../css/button"
import { ikeInput } from "../css/ikeInput"
import { cabecera1 } from "../css/cabecera1"
import { select } from "../css/select"
import { modoPantalla } from "../../redux/actions/ui";
import { ATRAS, CAMARA, CAMARAROLLO } from "../../../assets/icons/icons"
import { mediaConMenu01 } from "../css/mediaConMenu01"

export class pantallaMascotaAlta extends connect(store)(LitElement) {
    constructor() {
        super();
        this.hidden = true
        this.idioma = "ES"
        this.item = { tipo: "", nombre: "", fecha: "", raza: "" }
        this.accion = ""  // ALTA o UPDATE
    }

    static get styles() {
        return css`
        ${ikeInput}
        ${button}
        ${cabecera1}
        ${select}
        ${mediaConMenu01}
        :host{
            position: absolute;
            top: 0rem;
            left: 0rem;  
            height:100%;
            width: 100%;
            background-color:var(--color-gris-fondo);
            display:grid;
        }
        :host([hidden]){
            display: none; 
        } 
        :host([media-size="small"]) #gridContenedor{
            grid-row-start:1;
            grid-row-end:3;
        }
        #cuerpo{
            background-color: transparent;
            display:grid;
            padding:1rem;
            grid-auto-flow:row;
            grid-gap:.5rem;
            overflow-y: auto; 
            overflow-x: hidden; 
        }
        #cuerpo::-webkit-scrollbar {
            display: none;
        }
        :host(:not([media-size="small"])) #cuerpo{
            width:65%;
            justify-self:center;
        }
        #foto{
            display:grid;
            height: calc(60vw - 2rem);
            width: 100%;
            background-color: var(--color-gris-claro);
            border-radius: .5rem;
        }
        #fotoBoton{
            width: 6rem;
            align-self: flex-end;
            justify-self: end;
            margin-right:.5rem;
            margin-bottom:.5rem;
        }
        #divTapa{
            display:none;
            position:absolute;
            height:100vh;
            width: 100vw;
            background-color:var(--color-negro);
            opacity:.6;
            z-index:10;
        }
        #divMensaje{
            position:absolute;
            display:none;
            bottom:1rem;
            grid-template-rows: 70% 30%;
            grid-gap: .5rem;
            height:30%;
            width: 100%;
            background-color:transparent;
            font-size: var(--font-header-h1-size);
            font-weight: var(--font-header-h1-weight);
            z-index:12;
        }
        #divMensaje1{
            position:relative;
            display:grid;
            grid-template-rows: 49.5% 1% 49.5%;
            grid-template-columns: 20% 80%;
            border: 2px solid var(--color-gris-oscuro);
            grid-gap: 0;
            height:100%;
            width:95%;
            justify-self: center;
            background-color:var(--color-gris-claro);
            border-radius: 1rem;
            opacity:1;
            cursor: pointer;
        }        
        #divMensaje2{
            position:relative;
            display:grid;
            border: 2px solid var(--color-gris-oscuro);
            grid-gap: .5rem;
            height:100%;
            width:95%;
            justify-self: center;
            background-color:var(--color-blanco);
            border-radius: 1rem;
            justify-content: center;
            align-content: center;
            color: var(--color-azul);
            cursor: pointer;
        }
        #divMsj1Linea1Col1{
            display:grid;
        }
        #divMsj1Linea1Col1 svg{
            fill: var(--color-azul);
            stroke: var(--color-azul);
            width: 40%;
            justify-self: center;
        }
        #divMsj1Linea1Col2{
            display:grid;
            color: var(--color-gris-oscuro);
            align-items: center;
        }
        #divMsj1Linea2{
            grid-column-start:1;
            grid-column-end:3;
            background-color:var(--color-gris);
            opacity:.6;
        }
        #divMsj1Linea3Col1{
            display:grid;
        }
        #divMsj1Linea3Col1 svg{
            fill: var(--color-azul);
            width: 40%;
            justify-self: center;
        }
        #divMsj1Linea3Col2{
            display:grid;
            color: var(--color-gris-oscuro);
            align-items: center;
        }
        #pie{
            position:relative;
            grid-area: Pie; 
            display:grid;
            overflow-x: none; 
        }
        :host([media-size="small"]) #pie{
            display:none;
        }
        `
    }
    render() {
        return html`
        <div id="gridContenedor">
            <div id="header">        
                <div id="bar">
                    <div @click=${this.clickAtras}>${ATRAS}</div>
                    <div id="lblTitulo">${this.accion == "ALTA"
                ? idiomas[this.idioma].mascotaalta.titulo : idiomas[this.idioma].mascotaedit.titulo}
                    </div>
                </div>
                <div id="lblLeyenda">${this.accion == "ALTA"
                ? idiomas[this.idioma].mascotaalta.leyenda : idiomas[this.idioma].mascotaedit.leyenda}
                </div>
            </div>
            <div id="cuerpo">
                <div id="foto">
                    <button id="fotoBoton" btn3 @click=${this.clickFoto}>${this.accion == "ALTA"
                ? idiomas[this.idioma].mascotaalta.btn1 : idiomas[this.idioma].mascotaedit.btn1}
                    </button>
                </div>
                <div id="selectMascota" class="select" style="width:100%;height:3.4rem"> 
                    <label >${idiomas[this.idioma].mascotaalta.mascota}</label>
                    <select style="width:100%;height:1.7rem;" id="mascota">          
                        <option  value="Perro" .selected="${this.item.tipo == "Perro"}">Perro</option>
                        <option value="Gato" .selected="${this.item.tipo == "Gato"}">Gato</option>
                    </select>
                </div>

                <div class="ikeInput">
                    <label id="lblNombre">${idiomas[this.idioma].mascotaalta.nombre}</label>
                    <input id="txtNombre"  @input=${this.activar} placeholder=${idiomas[this.idioma].mascotaalta.nombre_ph}>
                    <label id="lblErrorNombre" error oculto>"Nombre Erroneo"</label>
                </div>

                <div id="selectFecha" class="select" style="width:100%;height:3.4rem"> 
                    <label >${idiomas[this.idioma].mascotaalta.fecha}</label>
                    <select style="width:100%;height:1.7rem;" id="nombre">          
                        <option  value="Rabia" .selected="${this.item.mascota == "Rabia"}">Rabia</option>
                        <option value="Corona virus" .selected="${this.item.mascota == "Corona virus"}">Corona virus</option>
                    </select>
                </div>  

                <div id="selectFecha" class="select" style="width:100%;height:3.4rem"> 
                    <label >${idiomas[this.idioma].mascotaalta.raza}</label>
                    <select style="width:100%;height:1.7rem;" id="fecha">          
                        <option  value="Salchicha" .selected="${this.item.raza == "Salchicha"}">Salchicha</option>
                        <option value="Calle" .selected="${this.item.raza == "Calle"}">Calle</option>
                    </select>
                </div>  
                <button style="width:95%;height:2rem;justify-self: center;" id="btn-recuperar" btn1 @click=${this.clickGrabar}>
                    ${this.accion == "ALTA"
                ? idiomas[this.idioma].mascotaalta.btn2 : idiomas[this.idioma].mascotaedit.btn2}
                </button>
                <div style="height:1rem"></div>
            </div>
            <div id="divTapa">
            </div>
            <div id="divMensaje">
                <div id=divMensaje1>
                    <div id="divMsj1Linea1Col1">
                        ${CAMARA}
                    </div>
                    <div id="divMsj1Linea1Col2">
                        ${idiomas[this.idioma].mascotaalta.btnCamara}
                    </div>
                    <div id="divMsj1Linea2">
                    </div>
                    <div id="divMsj1Linea3Col1">
                        ${CAMARAROLLO}
                    </div>
                    <div id="divMsj1Linea3Col2">
                    ${idiomas[this.idioma].mascotaalta.btnImagen}
                </div>
                </div>
                <div id=divMensaje2 @click=${this.clickCancelar}>
                    ${idiomas[this.idioma].mascotaalta.btnCancelar}
                </div>
            </div>
        </div>
        <pie-componente id="pie" opcion="cinco" media-size="${this.mediaSize}">
        </pie-componente>
    `
    }
    activar() {
        this.activo = true
        const clave1 = this.shadowRoot.querySelector("#txtClave1")
        const clave2 = this.shadowRoot.querySelector("#txtClave2")
        if (clave1.value.length < 4) {
            this.activo = false
        }
        if (clave2.value.length < 4) {
            this.activo = false
        }
        if (this.activo) {
            this.shadowRoot.querySelector("#btn-recuperar").removeAttribute("apagado")
        } else {
            this.shadowRoot.querySelector("#btn-recuperar").setAttribute("apagado", "")
        }
        this.update()
    }
    valido() {
        [].forEach.call(this.shadowRoot.querySelectorAll("[error]"), element => {
            element.setAttribute("oculto", "")
        })
        let valido = true
        const clave1 = this.shadowRoot.querySelector("#txtClave1")
        const clave2 = this.shadowRoot.querySelector("#txtClave2")
        if (clave1.value.length < 8) {
            valido = false
            this.shadowRoot.querySelector("#lblErrorClave1").removeAttribute("oculto");
        }
        if (clave2.value.length < 8) {
            valido = false
            this.shadowRoot.querySelector("#lblErrorClave2").removeAttribute("oculto");
        }
        this.update()
        return valido
    }
    clickAtras() {
        store.dispatch(modoPantalla(store.getState().ui.pantallaQueLLamo, store.getState().ui.quePantalla))
    }
    clickFoto() {
        this.shadowRoot.querySelector("#divTapa").style.display = "grid";
        this.shadowRoot.querySelector("#divMensaje").style.display = "grid";
    }
    clickCancelar() {
        this.shadowRoot.querySelector("#divTapa").style.display = "none";
        this.shadowRoot.querySelector("#divMensaje").style.display = "none";
    }
    clickGrabar() {
        //        if (this.activo) {
        //            if (this.valido()) {
        store.dispatch(modoPantalla("mascotaaltamsg"));
        //            }
        //       }
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
            accion: {
                type: String,
                reflect: true
            },
            mediaSize: {
                type: String,
                reflect: true,
                attribute: 'media-size'
            }
        }
    }
}

window.customElements.define("pantalla-mascotaalta", pantallaMascotaAlta);