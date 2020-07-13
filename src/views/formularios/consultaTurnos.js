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
    cardTurnosPaciente
} from "../css/cardTurnosPaciente"
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
    get as getReservas,
    reservarFecha,
    add as addReservas

} from "../../redux/actions/reservas"


const TURNOSDISPONIBLES_TIMESTAMP = "turnosdisponibles.timeStamp"


const RESERVASADD_TIMESTAMP = "reservas.addTimeStamp"

export class pantallaConsultaTurnos extends connect(store, TURNOSDISPONIBLES_TIMESTAMP, RESERVASADD_TIMESTAMP)(LitElement) {
    constructor() {
        super();
        this.hidden = true
        this.idioma = "ES"
        this.libres = []
        this.item = []
        //this.boton
        this.reserva = []


    }
    static get styles() {
        return css `
        ${button}
        ${cabecera1}
        ${cardTurnosPaciente}
        ${mediaConMenu01}
        :host{
            position: absolute;
            top: 0rem;
            left: 0rem;  
            height:100%;
            width: 100%;
            background-color:var(--color-gris-fondo);
            display:grid;
            grid-template-rows:100%;
        }
        :host([hidden]){
            display: none; 
        } 
        #gridContenedor{
            grid-template-rows:2fr .5fr 6.2fr 1.3fr;
        }
        :host([media-size="small"]) #gridContenedor{
            grid-row-start:1;
            grid-row-end:3;
        }
        :host(:not([media-size="small"])) #gridContenedor{
            grid-template-rows:2fr .5fr 6.5fr 1fr;
        }
        #cuerpo{
            background-color: transparent;
            display:grid;
            padding:1rem;
            grid-template-columns: repeat(auto-fit,minmax(3.5rem,1fr));
            grid-gap:.8rem;
            align-content:start;
            overflow-y: auto; 
            overflow-x: hidden; 
        }
        #cuerpo::-webkit-scrollbar {
            display: none;
        }
        #lblProximo{
            font-size: var(--font-header-h1-menos-size);
            font-weight: bold;   
            padding:0 0 0 1rem;
            border-bottom: solid 1px var(--color-gris-claro);
            align-self: center;
        }
        #btnSeleccionar{
            width:90%;
            height:2rem;
            justify-self:center;
            align-self:center;
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

        .etiqueta{
            position:relative;
            display: grid; 
            height:3.5rem;
            width:100%;
            grid-template-columns: 50% 50%;
            grid-gap:0rem;
            align-items: center;
            border-radius:.4rem ; 
            box-shadow: var(--shadow-elevation-2-box);
            background-color:transparent;
        }
        .seleccionado{
            box-shadow: var(--shadow-elevation-4-box);
            background-color:var(--color-gris-claro);
        }
        `
    }
    render() {
        return html `
        <div id="gridContenedor">
            <div id="header">        
                <div id="bar">
                    <div @click=${this.clickBoton1}>${ATRAS}</div>
                    <div id="lblTitulo">${idiomas[this.idioma].consultaturnos.titulo}</div>
                </div>
                <div id="lblLeyenda">${idiomas[this.idioma].consultaturnos.leyenda}</div>
            </div>
            <label id="lblProximo">${idiomas[this.idioma].consultaturnos.proximo}</label>
            <div id="cuerpo">
                ${this.libres.map((item) => { 
                    
                    const dia = this.nroDia(item.fecha)
                    const mes = this.mes(item.fecha)
                    const fecha = item.fecha
                   
                    return item.horarios.map(horario=>{
                    return  html`
                        <div   class="etiqueta" .item="${item}" .horario="${horario}"  @click=${this.clickSeleccionar}>
                            <div id="atDivDia">
                                <label id="atLblDiaNumero">${dia}</label>
                                <label id="atLblMes">${mes}</label>
                            </div>
                            <div id="atDivHora">
                                <label id="atLblDiaTexto">${this.dow(fecha)}</label>
                                <label id="atLblHora" value="${horario.hora}">${this.formateoHora(horario.hora)}</label>
                            </div>
                        </div>`
            })
        })}    
            </div>
            <button id="btnSeleccionar" btn1 apagado @click=${this.clickBoton2}>
                ${idiomas[this.idioma].consultaturnos.btn1}
            </button>
        </div>
        <pie-componente id="pie" opcion="cinco" media-size="${this.mediaSize}">
        </pie-componente>
    `
    }

    clickSeleccionar(e) {
        const botones = this.shadowRoot.querySelectorAll(".etiqueta")
        botones.forEach((button) => {
            button.classList.remove("seleccionado")
        });
        e.currentTarget.classList.add("seleccionado")
        this.shadowRoot.querySelector("#btnSeleccionar").removeAttribute("apagado", "")
        const fecha = e.currentTarget.item.fecha
        const hora = e.currentTarget.horario.hora
        const tramo = e.currentTarget.horario.tramos[0]
        store.dispatch(reservarFecha(fecha, hora, tramo))

        /*         if (e.currentTarget.hasAttribute("no")) {
                    [].forEach.call(this.shadowRoot.querySelectorAll("#atDivHora"), element => {
                        element.setAttribute("no", "")
                        element.removeAttribute("si")
                    });
                    [].forEach.call(this.shadowRoot.querySelectorAll("#atDivEtiqueta"), element => {
                        element.setAttribute("no", "")
                        element.removeAttribute("si")
                    });
                    e.currentTarget.setAttribute("si", "")
                    e.currentTarget.removeAttribute("no")
                    e.currentTarget.querySelector("#atDivHora").setAttribute("si", "")
                    e.currentTarget.querySelector("#atDivHora").removeAttribute("no")
                    this.shadowRoot.querySelector("#btnSeleccionar").removeAttribute("apagado")
                } else {
                    e.currentTarget.setAttribute("no", "")
                    e.currentTarget.removeAttribute("si")
                    e.currentTarget.querySelector("#atDivHora").setAttribute("no", "")
                    e.currentTarget.querySelector("#atDivHora").removeAttribute("si")
                    this.shadowRoot.querySelector("#btnSeleccionar").setAttribute("apagado", "")

                } */

    }
    clickBoton1() {
        store.dispatch(modoPantalla(store.getState().ui.pantallaQueLLamo, "principal"))
    }


    clickBoton2() {
        //store.dispatch(modoPantalla("consultadetalle", "consultaturnos"))

        let reserva = store.getState().reservas.reserva

        reserva.UsuarioId = store.getState().cliente.datos.id
        reserva.FechaGeneracion = new Date()
        store.dispatch(addReservas(reserva, store.getState().cliente.datos.token))
    }

    stateChanged(state, name) {
        if (name == TURNOSDISPONIBLES_TIMESTAMP) {
            this.libres = state.turnosdisponibles.entities._retorno
            this.update()
        }
        if (name == RESERVASADD_TIMESTAMP) {
            store.dispatch(getReservas({
                token: state.cliente.datos.token,
                expand: "Mascota($expand=MascotasVacuna,Raza($expand=MascotasTipo)),Atencion",
                orderby: "FechaAtencion desc"
            }))
            store.dispatch(modoPantalla("misconsultas", "consultaturnos"))
        }
    }
    firstUpdated() {}

    formateoHora(hora) {
        let horaRetorno = "0000" + hora.toString()
        horaRetorno = horaRetorno.substring(horaRetorno.length - 4)
        return horaRetorno.substr(0, 2) + ":" + horaRetorno.substr(2, 2)

    }
    nroDia(fecha) {
        let d = new Date(fecha)
        return d.getDate() + 1
    }
    dow(fecha) {
        let d = new Date(fecha);
        let dia = d.getDay() + 1
        return idiomas[this.idioma].diasCortos[dia]
    }
    mes(fecha) {
        let d = new Date(fecha);
        let m = d.getMonth()
        return idiomas[this.idioma].mesCortos[m]
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
            },
            seleccionado: {
                type: Boolean,
                reflect: true,

            }

        }
    }
}

window.customElements.define("pantalla-consultaturnos", pantallaConsultaTurnos);