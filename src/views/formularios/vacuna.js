import { html, LitElement, css } from "lit-element";
import { store } from "../../redux/store";
import { connect } from "@brunomon/helpers";
import { idiomas } from "../../redux/datos/idiomas"
import { button } from "../css/button"
import { ikeInput } from "../css/ikeInput"
import { cabecera1 } from "../css/cabecera1"
import { select } from "../css/select"
import { modoPantalla } from "../../redux/actions/ui";
import { ATRAS } from "../../../assets/icons/icons"
export class pantallaVacuna extends connect(store)(LitElement) {
    constructor() {
        super();
        this.hidden = true
        this.idioma = "ES"
        this.item = { mascota: "", vacuna: "", fecha: "" }
        this.label = ""
    }

    static get styles() {
        return css`
        ${ikeInput}
        ${button}
        ${cabecera1}
        ${select}
        :host{
            position: absolute;
            top: 0rem;
            left: 0rem;  
            height:100%;
            width: 100%;
            background-color:var(--color-gris-claro);
            display:grid;
            grid-template-rows:2fr 6.5fr 1.5fr;
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
        #selectMascota{
            font-size: var(--font-label-size);
            font-weight: var(--font-bajada-weight);
           
        }
        `
    }
    render() {
        return html`
        <div id="header">        
            <div id="bar">
                <div @click=${this.clickBoton1}>${ATRAS}</div>
                <div id="lblTitulo">${idiomas[this.idioma].vacuna.titulo}</div>
            </div>
            <div id="lblLeyenda">${idiomas[this.idioma].vacuna.leyenda}</div>
        </div>
        <div id="cuerpo">

            <div id="selectMascoto" class="select" style="width:100%;height:3.4rem"> 
                <label >${idiomas[this.idioma].vacuna.vacuna}</label>
                <select style="width:100%;height:1.7rem;" id="mascota">          
                    <option  value="Coco" .selected="${this.item.mascota == "Coco"}">Coco</option>
                    <option value="Mafalda" .selected="${this.item.mascota == "Mafalda"}">Mafalda</option>
                </select>
            </div>  

            <div id="selectVacuna" class="select" style="width:100%;height:3.4rem"> 
                <label >${idiomas[this.idioma].vacuna.vacuna}</label>
                <select style="width:100%;height:1.7rem;" id="vacuna">          
                    <option  value="Rabia" .selected="${this.item.mascota == "Rabia"}">Rabia</option>
                    <option value="Corona virus" .selected="${this.item.mascota == "Corona virus"}">Corona virus</option>
                </select>
            </div>  

            <div id="selectFecha" class="select" style="width:100%;height:3.4rem"> 
                <label >${idiomas[this.idioma].vacuna.fecha}</label>
                <select style="width:100%;height:1.7rem;" id="fecha">          
                    <option  value="Rabia" .selected="${this.item.mascota == "Rabia"}">Rabia</option>
                    <option value="Corona virus" .selected="${this.item.mascota == "Corona virus"}">Corona virus</option>
                </select>
            </div>  

        </div>

            <button style="width:95%;height:2rem;justify-self: center;" id="btn-recuperar" btn1 apagado @click=${this.clickBoton2}>
                ${idiomas[this.idioma].vacuna.btn1}
            </button>
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
    clickBoton1() {
        store.dispatch(modoPantalla("iniciosesion"))
    }
    clickBoton2() {
        if (this.activo) {
            if (this.valido()) {
                store.dispatch(modoPantalla("clavemodificarmsg"));
            }
        }
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

window.customElements.define("pantalla-vacuna", pantallaVacuna);