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
import { mediaConMenu01 } from "../css/mediaConMenu01"

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
            padding:2rem;
            grid-auto-flow:row;
            grid-gap:.8rem;
            align-content:start;
            overflow-y: auto; 
            overflow-x: hidden; 
            grid-template-rows: 2fr 2fr 2fr 4fr;
        }
        #cuerpo::-webkit-scrollbar {
            display: none;
        }
        :host(:not([media-size="small"])) #cuerpo{
            width: 65%;
            justify-self:center;
        }
        #selectMascota{
            font-size: var(--font-label-size);
            font-weight: var(--font-bajada-weight);
           
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
                <button style="width:95%;height:2rem;justify-self: center;align-self: end;" id="btn-recuperar" btn1 @click=${this.clickBoton2}>
                    ${idiomas[this.idioma].vacuna.btn1}
                </button>
            </div>
        </div>
        <pie-componente id="pie" opcion="cuatro" media-size="${this.mediaSize}">
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
    clickBoton1() {
        store.dispatch(modoPantalla(store.getState().ui.pantallaQueLLamo, store.getState().ui.quePantalla))
    }
    clickBoton2() {
        //        if (this.activo ) {
        //            if (this.valido() ) {
        store.dispatch(modoPantalla("vacunamsg", "vacuna"));
        //            }
        //        }
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
            },
            mediaSize: {
                type: String,
                reflect: true,
                attribute: 'media-size'
            }
        }
    }
}

window.customElements.define("pantalla-vacuna", pantallaVacuna);