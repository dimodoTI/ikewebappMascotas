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
    button
} from "../css/button"
import {
    ikeInput
} from "../css/ikeInput"
import {
    cabecera1
} from "../css/cabecera1"
import {
    select
} from "../css/select"
import {
    modoPantalla
} from "../../redux/actions/ui";
import {
    ATRAS
} from "../../../assets/icons/icons"
import {
    mediaConMenu01
} from "../css/mediaConMenu01"
import {
    validaMail
} from "../../libs/funciones";

import {
    add as addMascotasvacunas
} from "../../redux/actions/mascotasvacunas"

const MASCOTAS_TIMESTAMP = "mascotas.timeStamp"

const VACUNAS_TIMESTAMP = "vacunas.timeStamp"
const MASCOTASEDIT_TIMESTAMP = "mascotas.editTimeStamp"

export class pantallaVacuna extends connect(store, MASCOTAS_TIMESTAMP, VACUNAS_TIMESTAMP, MASCOTASEDIT_TIMESTAMP)(LitElement) {
    constructor() {
        super();
        this.hidden = true
        this.idioma = "ES"
        this.vacunas = []
        this.mascotasTipo = []
        this.mascotas = []
        this.mascota = 0

        this.item = {
            Id: 0,
            MascotaId: 0,
            VacunaId: 0,
            Fecha: "",
            Realizada: true,
            Activo: true
        }

        this.label = ""
    }

    static get styles() {
        return css `
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
        return html `
        <div id="gridContenedor">
            <div id="header">        
                <div id="bar">
                    <div @click=${this.clickBoton1}>${ATRAS}</div>
                    <div id="lblTitulo">${idiomas[this.idioma].vacuna.titulo}</div>
                </div>
                <div id="lblLeyenda">${idiomas[this.idioma].vacuna.leyenda}</div>
            </div>
            <div id="cuerpo">
                <div id="selectMascota" class="select" style="width:100%;height:3.4rem"> 
                    <label >${idiomas[this.idioma].vacuna.mascota}</label>
                    <select style="width:100%;height:1.7rem;" id="mascota" @change="${this.cambioMascota}">   
                        <option  selected="true"value=0>${idiomas[this.idioma].vacuna.elegimascota}</option>
                        ${this.mascotas.map(mascota => html `<option .selected="${this.mascotas.Id==mascota.Id}" value=${mascota.Id}>${mascota.Nombre}</option>`)}
                    </select>
                    <label id="mascotaEror" oculto>${idiomas[this.idioma].vacuna.mascotaerror}</label>
                </div>  

                <div id="selectVacuna" class="select" style="width:100%;height:3.4rem"> 
                    <label >${idiomas[this.idioma].vacuna.vacuna}</label>
                    <select style="width:100%;height:1.7rem;" id="vacuna">  
                    <option  value=0>${idiomas[this.idioma].vacuna.elegivacuna}</option>
                        ${this.vacunas.map((p)=>{
                            return html `
                            <option value=${p.Id}>${p.Descripcion}</option>
                             `}
                                )}
                    </select>
                    <label id="vacunaEror" oculto style="display:none">${idiomas[this.idioma].vacuna.mascotaerror}</label>
                </div>  

                 
                <div class="ikeInput" style="width:100%;height:3.4rem">
                    <label id="lblFecha">${idiomas[this.idioma].vacuna.fecha}</label>
                    <input id="txtFecha"  type="date" placeholder=${idiomas[this.idioma].vacuna.fecha_ph}  >
                    <label id="lblErrorFecha" error oculto>${idiomas[this.idioma].vacuna.fechaerror}</label>
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


    cambioMascota(e) {


        const tipomascota = this.mascotas.filter(u => u.Id == parseInt(e.currentTarget.value, 10))[0].Raza.MascotasTipo.Id
        this.vacunas = store.getState().vacunas.entities.filter(r => r.MascotaTipoId == tipomascota)
        this.update()
    }

    activar() {

    }


    valido() {
        [].forEach.call(this.shadowRoot.querySelectorAll("[error]"), element => {
            element.setAttribute("oculto", "")
        })
        let valido = true
        const mascota = this.shadowRoot.querySelector("#mascota")
        const vacuna = this.shadowRoot.querySelector("#vacuna")
        const fecha = this.shadowRoot.querySelector("#txtFecha")


        if (mascota.value == 0) {
            valido = false
            this.shadowRoot.querySelector("#mascotaEror").removeAttribute("oculto");
        }

        if (vacuna.value == 0) {
            valido = false
            this.shadowRoot.querySelector("#vacunaEror").removeAttribute("oculto");
        }

        this.update()
        return valido
    }

    asignarValores(olditem) {
        let item = {
            ...olditem
        }

        item.MascotaId = parseInt(this.shadowRoot.querySelector("#mascota").value, 10)
        item.VacunaId = parseInt(this.shadowRoot.querySelector("#vacuna").value, 10)
        item.Fecha = this.shadowRoot.querySelector("#txtFecha").value
        item.Realizada = true
        item.Activo = true


        return item
    }
    clickBoton1() {
        store.dispatch(modoPantalla(store.getState().ui.pantallaQueLLamo, store.getState().ui.quePantalla))
    }
    clickBoton2() {
        if (this.valido()) {
            store.dispatch(addMascotasvacunas(this.asignarValores(this.item), store.getState().cliente.datos.token))
        }
        store.dispatch(modoPantalla("vacunamsg", "vacuna"));

    }
    stateChanged(state, name) {
        if (name == MASCOTAS_TIMESTAMP) {
            this.mascotas = state.mascotas.entities
        }

        if (name == VACUNAS_TIMESTAMP) {
            this.vacunas = state.vacunas.entities
        }

        if (name == MASCOTASEDIT_TIMESTAMP) {
            /*    const mascota = state.mascotas.entities.currentTarget
               if (mascota.length > 0) { */
            const comboMascota = this.shadowRoot.querySelector("#mascota")
            comboMascota.value = state.mascotas.entities.currentEdit[0].Id.toString()
            this.vacunas = state.vacunas.entities.filter(u => u.MascotaTipoId == state.mascotas.entities.currentEdit[0].Raza.idMascotasTipo)
            comboMascota.disable
            this.update()


        }
    }
    firstUpdated() {}

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