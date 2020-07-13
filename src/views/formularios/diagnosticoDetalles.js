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
    modoPantalla,
    cancelarTimer
} from "../../redux/actions/ui";
import {
    idiomas
} from "../../redux/datos/idiomas"

import {
    mediaConMenu01
} from "../css/mediaConMenu01"

import {
    ATRAS,
    ARCHIVO,
    TRASH
} from "../../../assets/icons/icons"

import {
    cabecera1
} from "../css/cabecera1"

import {
    pieComponente
} from "../componentes/pie"
import {
    cardArchivo
} from "../css/cardArchivo"
import {
    enAtencion
} from "../../redux/actions/reservas";


const MODO_PANTALLA = "ui.timeStampPantalla"
const RESERVASENATENCION_TIMESTAMP = "reservas.enAtencionTimeStamp"

export class pantallaDiagnosticosDetalles extends connect(store, MODO_PANTALLA, RESERVASENATENCION_TIMESTAMP)(LitElement) {
    constructor() {
        super();
        this.idioma = "ES"
        this.reservas = null
        this.reservaEnAtencion = {
            Id: 0,
            Atencion: {
                Diagnostico: ""
            },
            Mascota: {
                Nombre: ""
            }
        }

        this.archivo = [{
                nombre: "Documento.jpg"
            },
            {
                nombre: "Estudio.pdf"
            },
            {
                nombre: "Estudio.pdf"
            },
            {
                nombre: "Estudio.pdf"
            },
            {
                nombre: "Estudio.pdf"
            },
            {
                nombre: "Estudio.pdf"
            },
            {
                nombre: "Estudio.pdf"
            }
        ]
    }

    static get styles() {
        return css `
        ${cabecera1}
        ${mediaConMenu01}
        ${cardArchivo}

        :host{
            display: grid;
            background-color:var(--color-gris-fondo);
            width: 100%;   
            padding:0;
            margin:0;
        }

        :host([hidden]){
            display: none; 
        }
        :host(:not([media-size="small"])){
            grid-template-rows: 100%;
        }
        :host([media-size="small"]){
            grid-template-rows: 9fr 1fr;
        }
        #gridContenedor{
            display:grid;
            grid-template-rows:18fr 82fr;           
        }
        #cuerpo{           
            display:grid;
            position:relative;
          
            padding: 0 1rem 0 1rem;
            grid-template-rows: 2rem 8rem 6rem 1rem auto;
            overflow-x:none;
            overflow-y:auto;

        }
        #cuerpo::-webkit-scrollbar {
            display: none;
        }
        #footer{
            grid-area: Pie; 
            display:grid;
            overflow-x: none; 
        }
        :host([media-size="small"]) #control{
            height:calc((100vh * .82) * .9);
        }
        :host(:not([media-size="small"])) #control{
            height:calc(100vh * .82);
        }
        #divTitulo{
            font-size: var(--font-bajada-size);
            font-weight: var(--font-bajada-weight);   
            align-self:center;
        }
        #txtDiagnostico{
            width: 100%;
            height:95%;
            font-family:var(--font-label-family);
            font-size:var(--font-label-size);
            font-weight:var(--font-label-weight);
        }
        #divRecetas{
            display:grid;
            position:relative;
            grid-gap:2vh;
            overflow-x:none;
            overflow-y:auto;
            margin : 1vh 0 1vh 0;
            align-content: baseline;
        }
        #divRecetas::-webkit-scrollbar {
            display: none;
        }
        #divTituloConsulta{
            font-size: var(--font-bajada-size);
            font-weight: var(--font-bajada-weight);   
            align-self:flex-end;    

        }
        #divDetalle{
            display:grid;
            padding: .5rem 1rem .5rem 1rem;
            font-size: var(--font-label-size);
            font-weight: var(--font-label-weight);
            background-color: var(--color-gris-claro);
            grid-gap: .2rem;
            border-radius: .4rem;
        }
        `
    }

    render() {
        return html `
            <div id="gridContenedor">
                <div id="header">
                    <div id="bar">
                        <div @click=${this.clickAtras}>${ATRAS}</div>
                        <div id="lblTitulo">${idiomas[this.idioma].diagnosticosdetalle.titulo}</div>
                    </div>
                    <div id="lblLeyenda">${idiomas[this.idioma].diagnosticosdetalle.leyenda}</div>
                </div>       
                <div id="cuerpo">
                    <div id="divTitulo">
                        ${idiomas[this.idioma].diagnosticosdetalle.lblDiagnostico}
                    </div>
                    <div id="divDiagnostico">
                        <textarea id="txtDiagnostico" rows="8" readonly>${this.reservaEnAtencion.Atencion?this.reservaEnAtencion.Atencion.Diagnostico:""}</textarea>
                    </div>
                    <div id="divRecetas">
                        ${this.archivo.map(dato => html`
                            <div id="ciDivEtiqueta">
                                <div id="ciDivContenido" style="grid-column-start:1;grid-column-end:3">
                                    <div id="ciDivIcomo">${ARCHIVO}</div>
                                    <div id="ciDivNombre">${dato.nombre}</div>
                                </div>
                            </div>
                        `)} 
                    </div>
                    <div id="divTituloConsulta">
                        ${idiomas[this.idioma].diagnosticosdetalle.tituloconsulta}
                    </div>
                    <div id="divDetalle">
                        <label id="lblExpediente">${idiomas[this.idioma].diagnosticosdetalle.expediente + " " + this.reservaEnAtencion.Id}</label>
                        <label id="lblPaciente">${idiomas[this.idioma].diagnosticosdetalle.paciente + " " + this.reservaEnAtencion.Mascota.Nombre}</label>           
                        <label id="lblMotivo">${idiomas[this.idioma].diagnosticosdetalle.motivo + " " + this.reservaEnAtencion.Motivo}</label>           
                        <label id="lblFecha">${idiomas[this.idioma].diagnosticosdetalle.fecha + " " + this.verFecha(this.reservaEnAtencion.FechaAtencion)}</label>           
                        <label id="lblHora">${idiomas[this.idioma].diagnosticosdetalle.hora + " " + this.reservaEnAtencion.HoraAtencion}</label>           
                        <label id="lblVeterinario">${idiomas[this.idioma].diagnosticosdetalle.veterinario + " " + this.verVeterinario()}</label>           
                        <div style="padding-top:.5rem;display:grid;grid-gap:.5rem">
                        ${this.archivo.map(dato => html`
                            <div id="ciDivEtiqueta">
                                <div id="ciDivContenido" style="grid-column-start:1;grid-column-end:3">
                                    <div id="ciDivIcomo">${ARCHIVO}</div>
                                    <div id="ciDivNombre">${dato.nombre}</div>
                                </div>
                            </div>
                        `)}   
                    </div>
                </div>
                </div>
            </div>
            <pie-componente  id="footer" opcion="cero" media-size="${this.mediaSize}"></pie-componente>

        `
    }


    stateChanged(state, name) {
        this.style.height = window.innerHeight + "px"

        if (name == MODO_PANTALLA && state.ui.quePantalla == "diagnosticosdetalle") {
            // let miToken = store.getState().cliente.datos.token
            // this.reservasJson.token = miToken
            // let d = new Date()
            // let filtroFecha = d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate()
            // this.reservasJson.filter = "FechaAtencion ge " + filtroFecha
            // store.dispatch(getReservas(this.reservasJson))
            // if (state.puestos.entities) {
            //     this.puestos = state.puestos.entities
            //     this.puestoSeleccionado = this.puestos[0].Id
            // } else {
            //     store.dispatch(getPuesto({}))
            // }
        }
        if (name == RESERVASENATENCION_TIMESTAMP) {
            if (state.reservas.entities.enAtencion) {
                this.reservaEnAtencion = state.reservas.entities.enAtencion;
                this.update()
            }
        }
        // if (name == RESERVAS_TIMESTAMP && state.ui.quePantalla == "diagnosticos") {
        //     if (state.reservas.entities) {
        //         this.reservas = state.reservas.entities
        //         this.update()
        //     }
        // }
    }
    verFecha(fecha) {
        let d = new Date(fecha)
        return d.getUTCDate() + "-" + (d.getUTCMonth() + 1) + "-" + d.getUTCFullYear()
    }
    verVeterinario() {
        return store.getState().cliente.datos.apellido + ", " + store.getState().cliente.datos.nombre
    }
    clickAtras() {
        store.dispatch(modoPantalla("misconsultas"))
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
window.customElements.define("pantalla-diagnosticosdetalles", pantallaDiagnosticosDetalles);