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
    cabecera1
} from "../css/cabecera1"
import {
    mediaConMenu01
} from "../css/mediaConMenu01"
import {
    cardMascotaVertical
} from "../css/cardMascotaVertical"
import {
    btnFlotanteAlargado
} from "../css/btnFlotanteAlargado"
import {
    modoPantalla
} from "../../redux/actions/ui";
import {
    REGALO,
    CARRITO,
    RELOJ,
    NOVEDADES1,
    NOVEDADES2,
    NOVEDADES3,
    HOME,
    MASCOTA,
    CONSULTA,
    VACUNA,
    FOTO,
    MAS
} from "../../../assets/icons/icons"

import {
    edit as editMascotas,
    get as getMascotas
} from "../../redux/actions/mascotas"

const MASCOTAS_TIMESTAMP = "mascotas.timeStamp"
const MASCOTAS_ADDTIMESTAMP = "mascotas.addTimeStamp"
const MASCOTAS_UPDATETIMESTAMP = "mascotas.updateTimeStamp"
const MASCOTAS_REMOVETIMESTAMP = "mascotas.removeTimeStamp"



export class pantallaMascota extends connect(store, MASCOTAS_ADDTIMESTAMP, MASCOTAS_REMOVETIMESTAMP, MASCOTAS_TIMESTAMP, MASCOTAS_UPDATETIMESTAMP)(LitElement) {
    constructor() {
        super();
        this.hidden = true
        this.idioma = "ES"

        this.items = []
    }

    static get styles() {
        return css `
        ${label}
        ${button}
        ${cabecera1}
        ${cardMascotaVertical}
        ${btnFlotanteAlargado}
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
        #campana{
            position:relative;
            background-image: var(--icon-campana-con-marca);
            background-color: transparent;
            background-repeat: no-repeat;
            background-position: right center;
            background-size: 1rem 1rem;
        }
        #cuerpo{
            background-color: transparent;
            display: grid;
            width: 100%;
            grid-template-columns: repeat(auto-fit,minmax(8.5rem,1fr));
            justify-items: center;
            overflow-y: auto; 
            overflow-x: hidden; 
            grid-gap:1rem;
            padding-top: .5rem;
        }
        #cuerpo::-webkit-scrollbar {
            display: none;
        }
        :host(:not([media-size="small"])) #cuerpo{
            grid-template-columns: repeat(auto-fit,minmax(10rem,1fr));
        }
        label,button {
            position: relative;
            width: 95%;
            color: var(--color-negro);
            background-color:transparent;
            border-radius:0;
            font-size: var(--font-bajada-size);
            font-weight: var(--font-bajada-weight);
        }      
        #pie{
            position:relative;
        }
    `
    }
    render() {
        return html `
        <div id="gridContenedor">
            <div id="header">
                <div style="display:grid;width:100%;grid-template-columns:90% 10%;">
                    <div id="bar">
                        <div id="lblTitulo">${idiomas[this.idioma].mascota.titulo}</div>
                    </div>
                    <div id="campana" @click=${this.clickBotonNotificacion}></div>
                </div>    
                <div id="lblLeyenda">${idiomas[this.idioma].mascota.leyenda}</div>
            </div>

            <div id="cuerpo">
                ${this.items.map(dato => html`
                    <div id="cmhDivEtiqueta" .item=${dato} @click="${this.editar}">
                        <div id="cmhDivImagen" style="background-image:var(${dato.Foto})"></div>
                        <div id="cmhDivTipo">${dato.Raza.MascotasTipo.Descripcion}</div>
                        <div id="cmhDivNombre">${dato.Nombre}</div>
                        <div id="cmhDivRaza">${idiomas[this.idioma].mascota.raza + dato.Raza.Descripcion}</div>
                        <div id="cmhDivEdad">${idiomas[this.idioma].mascota.edad + this.calculaEdad(dato.FechaNacimiento)}</div>
                        <div id="cmhDivConsultas">${"1" + idiomas[this.idioma].mascota.consultas}</div>              
                    </div>
                `)}
            </div>        
        </div>
        <pie-componente id="pie" opcion="dos" media-size="${this.mediaSize}">
        </pie-componente>
        <div id="bfaDivMas"  @click=${this.clickAgregarMascota}>
            ${MASCOTA}
            <label>${idiomas[this.idioma].mascota.btn}</label>
        </div>
        `
    }
    clickBotonNotificacion() {
        store.dispatch(modoPantalla("notificacion", "mascota"))
    }
    clickAgregarMascota() {
        store.dispatch(editMascotas("A"))
        store.dispatch(modoPantalla("mascotaalta", "mascota"))
    }

    editar(e) {

        store.dispatch(editMascotas("M", e.currentTarget.item))
        store.dispatch(modoPantalla("mascotaalta", "mascota"))
    }

    stateChanged(state, name) {
        if (name == MASCOTAS_ADDTIMESTAMP || name == MASCOTAS_REMOVETIMESTAMP || name == MASCOTAS_UPDATETIMESTAMP) {
            store.dispatch(getMascotas({
                token: state.cliente.datos.token,
                expand: "Raza($expand=MascotasTipo)"
            }))



        }
        if (name == MASCOTAS_TIMESTAMP) {

            this.items = state.mascotas.entities
            this.update()
        }

    }



    calculaEdad(nacimiento) {


        const hoy = new Date()
        const fecNac = new Date(nacimiento)
        const dif = ((((hoy.getTime() - fecNac.getTime()) / 1000) / 60) / 60) / 24
        return Math.floor((dif / 365.2425))

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
                reflect: false
            },
            mediaSize: {
                type: String,
                reflect: true,
                attribute: 'media-size'
            }
        }
    }
}

window.customElements.define("pantalla-mascota", pantallaMascota);