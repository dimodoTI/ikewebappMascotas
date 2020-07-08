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
    cabecera1
} from "../css/cabecera1"
import {
    cardMascotaHorizontal
} from "../css/cardMascotaHorizontal"
import {
    cardCalendario
} from "../css/cardCalendario"
import {
    modoPantalla
} from "../../redux/actions/ui";
import {
    ATRAS,
    CHAT
} from "../../../assets/icons/icons"
import {
    mediaConMenu01
} from "../css/mediaConMenu01"

const RESERVASEDIT_TIMESTAMP = "reservas.editTimeStamp"
const MASCOTAS_TIMESTAMP = "mascotas.timeStamp"
export class pantallaMascotaVerN extends connect(store, RESERVASEDIT_TIMESTAMP)(LitElement) {
    constructor() {
        super();
        this.hidden = true
        this.idioma = "ES"
        //this.mascota = { tipo: "Perro", nombre: "Coqui", edad: "4 años", raza: "callejero" }
        /* this.consulta = [{ imagen: "--imagen-perro1", nombre: "Coqui", fecha: "Hoy", diagnostico: "Tos con mocos" },
        { imagen: "--imagen-perro1", nombre: "Collie", fecha: "Ayer", diagnostico: "Tos con mocos" },
        { imagen: "--imagen-perro1", nombre: "Poquito", fecha: "11/2/2020", diagnostico: "Tos con mocos" },
        { imagen: "--imagen-perro1", nombre: "Mafalda", fecha: "11/1/2020", diagnostico: "Tos con mocos" },
        { imagen: "--imagen-perro1", nombre: "Mafalda", fecha: "11/1/2020", diagnostico: "Tos con mocos" },
        { imagen: "--imagen-perro1", nombre: "Mafalda", fecha: "11/1/2020", diagnostico: "Tos con mocos" }
        ]
        this.itemVacunas = [{ vacuna: "Perro Quíntuple Refuerzo", para: "Tos de las perreras - Hepatitis - Moquillo - Parvovirus", edad: "Cachorros", obligatoria: "Obligatoria" },
        { vacuna: "Rabia", para: "Rabia", edad: "Cachorros", obligatoria: "Obligatoria" },
        { vacuna: "Quíntuple", para: "Tos de las perreras - Hepatitis - Moquillo - Parvovirus", edad: "Cachorros", obligatoria: "Obligatoria" },
        { vacuna: "Tetano", para: "Tetano", edad: "Cachorros", obligatoria: "Obligatoria" },
        { vacuna: " Gato Quíntuple Refuerzo", para: "Tos de las perreras - Hepatitis - Moquillo - Parvovirus", edad: "Cachorros", obligatoria: "Obligatoria" },
        { vacuna: "Rabia", para: "Rabia", edad: "Cachorros", obligatoria: "Obligatoria" }
        ] */

        this.mascota = []
        this.reservas = []
        this.atenciones = []
        this.mascotastipo = []
        this.vacunas = []

        /*  this.mascota = {
             "Id": 0,
             "idUsuario": 0,
             "idRaza": 0,
             "Nombre": "",
             "FechaNacimiento": "",
             "Foto": "",
             "Castrada": true,
             "Activo": true,
             "Reservas": [{
                 "Id": 0,
                 "TramoId": 0,
                 "MascotaId": 0,
                 "UsuarioId": 0,
                 "FechaAtencion": "",
                 "HoraAtencion": 0,
                 "FechaGeneracion": "",
                 "Motivo": "",
                 "Estado": 0,
                 "Activo": true,
                 "Atencion": {
                     "Id": 0,
                     "ReservaId": 0,
                     "VeterinarioId": 0,
                     "InicioAtencion": "",
                     "FinAtencion": "",
                     "Diagnostico": "",
                     "Observaciones": "",
                     "Estado": 0,
                     "Calificacion": 0,
                     "ComentarioCalificacion": "",
                     "Activo": true
                 }
             }],
             "MascotasVacuna": [{
                 "Id": 0,
                 "MascotaId": 0,
                 "VacunaId": 0,
                 "Fecha": "",
                 "Realizada": true,
                 "Activo": true
             }],
             "Raza": {
                 "Id": 0,
                 "idMascotasTipo": 0,
                 "Descripcion": "",
                 "Activo": true,
                 "MascotasTipo": {
                     "Id": 0,
                     "Descripcion": "",
                     "Activo": true
                 }
             }
         } */



        this.items = []
        /* {
            "Id": 0,
            "TramoId": 0,
            "MascotaId": 0,
            "UsuarioId": 0,
            "FechaAtencion": "",
            "HoraAtencion": 0,
            "FechaGeneracion": "",
            "Motivo": "",
            "Estado": 0,
            "Activo": true,
            "Mascota": {
                "Id": 0,
                "idUsuario": 0,
                "idRaza": 0,
                "Nombre": "",
                "FechaNacimiento": "",
                "Foto": "",
                "Castrada": true,
                "Activo": true,
                "MascotasVacuna": [{
                    "Id": 0,
                    "MascotaId": 0,
                    "VacunaId": 0,
                    "Fecha": "",
                    "Realizada": true,
                    "Activo": true,
                    "Vacuna": {
                        "Id": 0,
                        "MascotaTipoId": 0,
                        "Descripcion": "",
                        "Activo": true
                    }
                }],
                "Raza": {
                    "Id": 0,
                    "idMascotasTipo": 0,
                    "Descripcion": "",
                    "Activo": true,
                    "MascotasTipo": {
                        "Id": 0,
                        "Descripcion": "",
                        "Activo": true
                    }
                }
            },
            "Atencion": {
                "Id": 0,
                "ReservaId": 0,
                "VeterinarioId": 0,
                "InicioAtencion": "",
                "FinAtencion": "",
                "Diagnostico": "",
                "Observaciones": "",
                "Estado": 0,
                "Calificacion": 0,
                "ComentarioCalificacion": "",
                "Activo": true
            }

        } */
    }

    static get styles() {
        return css `
        ${button}
        ${cabecera1}
        ${cardCalendario}
        ${cardMascotaHorizontal}
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
        :host([media-size="small"]) #gridContenedor{
            grid-row-start:1;
            grid-row-end:3;
        }
        :host([hidden]){
            display: none; 
        } 
        #cuerpo{
            background-color: transparent;
            display:grid;
            padding:1rem;
            grid-auto-flow:row;
            grid-gap:.2rem;
            overflow-y: auto; 
            overflow-x: hidden; 
        }
        #cuerpo::-webkit-scrollbar {
            display: none;
        }
        :host(:not([media-size="small"])) #cuerpo{
            width:70%;
            justify-self:center;
        }
        #foto{
            display:grid;
            height: calc(60vw - 2rem);
            width: 100%;
            background-color: var(--color-gris-claro);
            border-radius: .5rem;
            background-repeat: no-repeat;
            background-position: center center;
            background-size: cover;
        }
        .subTitulo{
            font-size: var(--font-bajada--size);
            font-weight: bold;
            padding-bottom:.5rem;
        }
        .informacion{
            font-size: var(--font-bajada-size);
            font-weight: var(--font-header-h1-weight);
        }
        #btn-edit{
            width:100%;
            height:2rem;
            justify-self: center;
            margin-top: 1rem;
            margin-bottom: 1rem;
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
                    <div @click=${this.clickAtras}>${ATRAS}</div>
                    <div id="lblTitulo">${this.mascota.Nombre}</div>
                </div>
                <div id="lblLeyenda">${idiomas[this.idioma].mascotaver.leyenda}</div>
            </div>
            <div id="cuerpo">
                <div id="foto" style="background-image:url(${this.mascota.Foto})">
                </div>
                <label class="subTitulo">${idiomas[this.idioma].mascotaver.informacion}</label>
                <label class="informacion">${idiomas[this.idioma].mascotaver.tipo + this.mascota.Descripcion}</label>
                <label class="informacion">${idiomas[this.idioma].mascotaver.edad + this.calculaEdad(this.mascota.FechaNacimiento)}</label>
                <button id="btn-edit" btn1 @click=${ this.clickEdit}>
                    ${ idiomas[this.idioma].mascotaver.btn1}
                </button >
                <label class="subTitulo">${idiomas[this.idioma].mascotaver.consulta}</label>
                <div style="display:grid;grid-gap:.8rem;justify-self: center;">
                    ${this.reservas.map(dato => html`
                        <div id="cmhDivEtiqueta">
                            <div id="cmhDivImagen" style="background-image:url(${this.mascota.Foto});grid-row-start:1;grid-row-end:4;"></div>
                            <div id="cmhDivNombre">${this.mascota.Nombre}</div>
                            <div id="cmhDivFecha">${dato.FechaAtencion}</div>
                            <div id="cmhDivDiagnostico">${dato.Motivo}</div>
                            <div id="cmhDivVerDetalle">
                                <button btn2  @click=${ this.clickEdit} style="width:4rem;padding:0;text-align:left;font-size: var(--font-label-size);font-weight: var(--font-label-weight);">${idiomas[this.idioma].misconsultas.verDetalle}</button>                    
                            </div>
                            <div id="cmhDivChat">${CHAT}</div>              
                        </div>
                    `)}
                </div>
                <button id="btn-edit" btn3 @click=${ this.clickConsulta}>
                    ${ idiomas[this.idioma].mascotaver.btn2}
                </button >
                <label class="subTitulo">${idiomas[this.idioma].mascotaver.vacuna}</label>
                <div style="display:grid;grid-gap:.8rem;justify-self: center;">
                    ${this.vacunas.map(dato => this.renderVacuna(dato) )}       
                </div>
                <button id="btn-edit" btn3 @click=${ this.clickVacunas}>
                    ${ idiomas[this.idioma].mascotaver.btn3}
                </button >

                <div style="height:1rem"></div>
            </div >
        </div>
        <pie-componente id="pie" opcion="cinco" media-size="${this.mediaSize}">
        </pie-componente>`
    }


    renderVacuna(dato) {


        const calendario = store.getState().calendario.entities.filter(u => u.VacunaId = dato.VacunaId)
        return html `
        <div id="ccDivEtiqueta">
            <div id="ccDivVacuna">${dato.Vacuna.Descripcion}</div>
            <div id="ccDivPara">${calendario[0].Enfermedades}</div>
            <div id="ccDivCachorro">${calendario[0].Edad}</div>
            <div id="ccDivObligatorio">${Calendario.Optativa?"Optativa":"Obligatoria"}</div>
        </div>
    `
        this.update()
    }
    clickAtras() {
        store.dispatch(modoPantalla(store.getState().ui.pantallaQueLLamo, "principal"))
    }
    clickEdit() {
        store.dispatch(modoPantalla("mascotaedit", "mascotaver"))
    }
    clickConsulta() {
        store.dispatch(modoPantalla("consulta", "mascotaver"))
    }
    clickVacunas() {
        store.dispatch(modoPantalla("vacuna", "mascotaver"))
    }
    clickFoto() {
        this.shadowRoot.querySelector("#divTapa").style.display = "grid";
        this.shadowRoot.querySelector("#divMensaje").style.display = "grid";
    }
    clickCancelar() {
        this.shadowRoot.querySelector("#divTapa").style.display = "none";
        this.shadowRoot.querySelector("#divMensaje").style.display = "none";
    }
    calculaEdad(nacimiento) {

        const hoy = new Date()
        const fecNac = new Date(nacimiento)
        const dif = ((((hoy.getTime() - fecNac.getTime()) / 1000) / 60) / 60) / 24
        return Math.floor((dif / 365.2425))

    }

    stateChanged(state, name) {
        if (name == RESERVASEDIT_TIMESTAMP) {
            //this.mascota = state.reservas.entities.currentItem.Mascota
            this.reservas = state.mascotas.entities.Reservas
            this.mascota = state.mascotas.entities
            this.raza = state.mascotas.entities.Raza
            this.mascotastipo = state.mascotas.entities.Raza.MascotasTipo
            this.atenciones = state.mascotas.entities.Reservas.atenciones
            this.vacunas = state.mascotas.entities.MascotasVacunas




        }
        if (name == MASCOTAS_TIMESTAMP) {


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

window.customElements.define("pantalla-mascotavern", pantallaMascotaVerN);