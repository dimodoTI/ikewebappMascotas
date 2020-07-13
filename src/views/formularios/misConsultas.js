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
    cardMascotaHorizontal
} from "../css/cardMascotaHorizontal"
import {
    btnFlotanteAlargado
} from "../css/btnFlotanteAlargado"
import {
    btnNuevaConsulta
} from "../componentes/btnNuevaConsulta"
import {
    modoPantalla
} from "../../redux/actions/ui";
import {
    CHAT,
    CONSULTA,
    VIDEO,
    ARCHIVO
} from "../../../assets/icons/icons"
import {
    mediaConMenu01
} from "../css/mediaConMenu01"

import {
    edit as editReservas,
    reservar,
    enAtencion as getEnAtencion
} from "../../redux/actions/reservas"

import {
    get as getMascotas
} from "../../redux/actions/mascotas"





const RESERVAS_TIMESTAMP = "reservas.timeStamp"

const RESERVASADD_TIMESTAMP = "reservas.addTimeStamp"
const RESERVASENATENCION_TIMESTAMP = "reservas.enAtencionTimeStamp"

export class pantallaMisConsultas extends connect(store, RESERVAS_TIMESTAMP, RESERVASADD_TIMESTAMP, RESERVASENATENCION_TIMESTAMP)(LitElement) {
    constructor() {
        super();
        this.hidden = true
        this.idioma = "ES"
        this.items = []
        this.hayReserva = "N";
    }

    static get styles() {
        return css `
        ${label}
        ${button}
        ${cabecera1}
        ${cardMascotaHorizontal}
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
        label,button {
            position: relative;
            width: 95%;
            color: var(--color-negro);
            background-color:transparent;
            border-radius:0;
            font-size: var(--font-bajada-size);
            font-weight: var(--font-bajada-weight);
        } 
        #cuerpo{
            background-color: transparent;
            display: grid;
            width: 95%;
            grid-template-columns: 100%;
            justify-self: center;
            overflow-y: auto; 
            overflow-x: hidden; 
            grid-gap:1rem;
            padding-top: .5rem;
            align-content:flex-start
        }
        #cuerpo::-webkit-scrollbar {
            display: none;
        }
        #avisoConsulta{
            width:95%;
            height:2rem;
        }
        #div-Titulo-02{
            justify-self:center;         
            font-size: var(--font-header-h1-size);
            font-weight: var(--font-header-h1-weight);  
        }
        :host(:not([media-size="small"])) #cmhDivEtiqueta{
            width: 65%;
            justify-self:center;
            align-items:stretch
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
                        <div id="lblTitulo">${idiomas[this.idioma].misconsultas.titulo}</div>
                    </div>
                    <div id="campana" @click=${this.clickBotonNotificacion}></div>
                </div>    
                <div id="lblLeyenda">${idiomas[this.idioma].misconsultas.leyenda}</div>
            </div>
            <div id="cuerpo">
     
                <btn-nueva-consulta id="avisoConsulta" media-size="${this.mediaSize}">
                </btn-nueva-consulta>

                <div id="div-Titulo-02" >
                    ${idiomas[this.idioma].misconsultas.titulo02}
                </div> 

                ${this.items.map(dato => html`
                <div id="cmhDivEtiqueta" >
                    <div id="cmhDivImagen" style="background-position:center;background:url(${dato.Mascota.Foto});background-repeat: no-repeat;background-position: center center;"></div>
                        <div id="cmhDivNombre">
                            ${dato.Mascota.Nombre}
                        </div>
                        <div id="cmhDivFecha">
                            ${dato.FechaAtencion.substring(8,10)+"/"+dato.FechaAtencion.substring(5,7)+"/"+dato.FechaAtencion.substring(0,4)+" "+ this.formateoHora( dato.HoraAtencion)}
                        </div>
                        <div id="cmhDivDiagnostico">
                            ${dato.Motivo}
                        </div>

                        <div></div>
                        <div id="cmhDivVerDetalle">
                            <button btn2 .item=${dato} @click=${this.clickBoton1} style="width:4rem;padding:0;text-align:left;font-size: var(--font-label-size);font-weight: var(--font-label-weight);">${idiomas[this.idioma].misconsultas.verDetalle}</button>                    
                        </div>
                        <div id="cmhDivChat">${this.verReserva(dato.FechaAtencion)?VIDEO:ARCHIVO}</div>              
                    </div>
                </div>
                `)}
            </div>
        </div>        
        <pie-componente id="pie" opcion="tres" media-size="${this.mediaSize}">
        </pie-componente>
        <div id="bfaDivMas"  @click=${this.clickBoton2}>
            ${CONSULTA}
            <label>${idiomas[this.idioma].misconsultas.btn}</label>
        </div>
        `
    }

    verReserva(fecha) {


        let hoy = new Date();
        let atencion = new Date(fecha);
        return hoy.getTime() === atencion.getTime();

    }
    clickBotonNotificacion() {
        store.dispatch(modoPantalla("notificacion", "misconsultas"))
    }
    clickBoton1(e) {

        store.dispatch(getEnAtencion({
            filter: "Id eq " + e.currentTarget.item.Id,
            expand: "Atencion,Mascota",
            token: store.getState().cliente.datos.token
        }))

    }

    formateoHora(hora) {
        let horaRetorno = "0000" + hora.toString()
        horaRetorno = horaRetorno.substring(horaRetorno.length - 4)
        return horaRetorno.substr(0, 2) + ":" + horaRetorno.substr(2, 2)

    }

    clickBoton2() {

        //store.dispatch(modoPantalla("consulta", "misconsultas"))
    }

    stateChanged(state, name) {

        if (name == RESERVAS_TIMESTAMP || RESERVASADD_TIMESTAMP) {
            this.items = state.reservas.entities
            this.update()
        }

        if (name == RESERVASENATENCION_TIMESTAMP) {
            store.dispatch(modoPantalla("diagnosticodetalles", "misconsultas"))
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

window.customElements.define("pantalla-misconsultas", pantallaMisConsultas);