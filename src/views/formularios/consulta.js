import { html, LitElement, css } from "lit-element";
import { store } from "../../redux/store";
import { connect } from "@brunomon/helpers";
import { idiomas } from "../../redux/datos/idiomas"
import { button } from "../css/button"
import { cabecera1 } from "../css/cabecera1"
import { mediaConMenu01 } from "../css/mediaConMenu01"
import { select } from "../css/select"
import { cardArchivo } from "../css/cardArchivo"
import { modoPantalla } from "../../redux/actions/ui";
import { ATRAS, TRASH, ARCHIVO, BASURA } from "../../../assets/icons/icons"
export class pantallaConsulta extends connect(store)(LitElement) {
    constructor() {
        super();
        this.hidden = true
        this.idioma = "ES"
        this.item = { para: "", motivo: "", sintoma: "" }
        this.archivo = [{ nombre: "Documento.jpg" }, { nombre: "Estudio.pdf" }]
    }

    static get styles() {
        return css`
        ${button}
        ${cabecera1}
        ${select}
        ${cardArchivo}
        ${mediaConMenu01}
        :host{
            position: absolute;
            top: 0rem;
            left: 0rem;  
            height:100%;
            width: 100%;
            background-color:var(--color-gris-claro);
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
            grid-gap:.8rem;
            align-content:start;
            overflow-y: auto; 
            overflow-x: hidden; 
        }
        #cuerpo::-webkit-scrollbar {
            display: none;
        }
        :host(:not([media-size="small"])) #cuerpo{
            width: 50%;
            justify-self: center;
        }
        #selectMascota{
            font-size: var(--font-label-size);
            font-weight: var(--font-bajada-weight);   
        }
        #lblSintoma{
            font-size: var(--font-label-size);
            font-weight: var(--font-label-weight);
            justify-self: left;
            align-self: end;
        }
        #txtSintoma{
            width:100%;
            height:5rem;
            font-size: var(--font-bajada-size);
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
                    <div id="lblTitulo">${idiomas[this.idioma].consulta.titulo}</div>
                </div>
                <div id="lblLeyenda">${idiomas[this.idioma].consulta.leyenda}</div>
            </div>
            <div id="cuerpo">

                <div id="selectPara" class="select" style="width:100%;height:3.4rem"> 
                    <label >${idiomas[this.idioma].consulta.para}</label>
                    <select style="width:100%;height:1.7rem;" id="txtMascota">          
                        <option  value="Coco" .selected="${this.item.para == "Coco"}">Coco</option>
                        <option value="Mafalda" .selected="${this.item.para == "Mafalda"}">Mafalda</option>
                    </select>
                </div>  

                <div id="selectMotivo" class="select" style="width:100%;height:3.4rem"> 
                    <label >${idiomas[this.idioma].consulta.motivo}</label>
                    <select style="width:100%;height:1.7rem;" id="txtVacuna">          
                        <option  value="Diarrea" .selected="${this.item.motivo == "Diarrea"}">Diarrea</option>
                        <option value="Tos" .selected="${this.item.motivo == "Tos"}">Tos</option>
                    </select>
                </div>  
                <div id="lblSintoma">${idiomas[this.idioma].consulta.sintoma}</div>
                <textarea id="txtSintoma" style="width:100%;height:5rem;" @input=${this.activar}></textarea>
                ${this.archivo.map(dato => html`
                    <div id="ciDivEtiqueta">
                        <div id="ciDivContenido">
                            <div id="ciDivIcomo">${ARCHIVO}</div>
                            <div id="ciDivNombre">${dato.nombre}</div>
                        </div>
                        <div id="ciDivDelete">${BASURA}</div>
                    </div>
                `)}              
                <button id="btn-recuperar" btn3 @click=${this.clickBoton2}>
                    ${idiomas[this.idioma].consulta.btn1}
                </button>
                <button id="btnSeleccionar" btn1 apagado @click=${this.clickBoton2}>
                    ${idiomas[this.idioma].consulta.btn2}
                </button>
                <div style="height:1rem"></div>
            </div>
        </div>
        <pie-componente id="pie" opcion="tres" media-size="${this.mediaSize}">
        </pie-componente>
    `
    }
    activar() {
        this.activo = true
        const mascota = this.shadowRoot.querySelector("#txtMascota")
        const vacuna = this.shadowRoot.querySelector("#txtVacuna")
        const sintoma = this.shadowRoot.querySelector("#txtSintoma")
        if (mascota.value.length < 1) {
            this.activo = false
        }
        if (vacuna.value.length < 1) {
            this.activo = false
        }
        if (sintoma.value.length < 4) {
            this.activo = false
        }
        if (this.activo) {
            this.shadowRoot.querySelector("#btnSeleccionar").removeAttribute("apagado")
        } else {
            this.shadowRoot.querySelector("#btnSeleccionar").setAttribute("apagado", "")
        }
        this.update()
    }
    valido() {
        [].forEach.call(this.shadowRoot.querySelectorAll("[error]"), element => {
            element.setAttribute("oculto", "")
        })
        let valido = true
        const mascota = this.shadowRoot.querySelector("#txtMascota")
        const vacuna = this.shadowRoot.querySelector("#txtVacuna")
        const sintoma = this.shadowRoot.querySelector("#txtSintoma")
        if (mascota.value.length < 8) {
            valido = false
        }
        if (vacuna.value.length < 8) {
            valido = false
        }
        if (sintoma.value.length < 8) {
            valido = false
        }
        this.update()
        return valido
    }
    clickBoton1() {
        store.dispatch(modoPantalla(store.getState().ui.pantallaQueLLamo, "consulta"))
    }
    clickBoton2() {
        //        if (this.activo) {
        //            if (this.valido()) {
        store.dispatch(modoPantalla("consultaturnos", "consulta"));
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
            mediaSize: {
                type: String,
                reflect: true,
                attribute: 'media-size'
            }
        }
    }
}

window.customElements.define("pantalla-consulta", pantallaConsulta);