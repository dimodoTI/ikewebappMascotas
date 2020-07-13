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

import {
    edit as mascotasEdit
} from "../../redux/actions/mascotas"

import {
    edit as mascotasvacunasEdit
} from "../../redux/actions/mascotasvacunas"

const MASCOTASGETEDIT_TIMESTAMP = "mascotas.getEditTimeStamp"
export class pantallaMascotaVer extends connect(store, MASCOTASGETEDIT_TIMESTAMP)(LitElement) {
    constructor() {
        super();
        this.hidden = true
        this.idioma = "ES"

        this.calendario = []

        this.items = {
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
                    "Activo": true,
                    "Calendarios": {
                        "Id": 0,
                        "MascotasTipoId": 0,
                        "VacunaId": 0,
                        "Enfermedades": "",
                        "Edad": "",
                        "Optativa": true,
                        "Periodicidad": "",
                        "Activo": true
                    }
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
            },
            "Reservas": [{
                "Id": 0,
                "TramoId": 0,
                "MascotaId": 0,
                "UsuarioId": 0,
                "FechaAtencion": "",
                "HoraAtencion": "",
                "FechaGenerarion": "",
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
            }]


        }
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

        :host([hidden]){
            display: none; 
        } 
        #cuerpo{
            background-color: transparent;
            display:grid;
            padding:1rem;
            grid-auto-flow:row;
            grid-gap:.1rem;
            overflow-y: auto; 
            overflow-x: hidden; 
           
        }
        #cuerpo::-webkit-scrollbar {
            display: none;
        }
        :host(:not([media-size="small"])) #cuerpo{
/*             width:70%;
            justify-self:center; */
            grid-template-columns: repeat(auto-fit,minmax(10rem,1fr));
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

        }


        .labelRedondeado{
            font-size: var(--font-bajada-size);
            font-weight: var(--font-bajada-weight);  
            background-color: var(--color-celeste-claro);          
            color: var(--color-azul-oscuro);
            padding:0 .5rem 0 .5rem;
            justify-self: center;
            border-radius:1rem ;    
        }
        `
    }
    render() {
        return html `
        <div id="gridContenedor">
            <div id="header">        
                <div id="bar">
                    <div @click=${this.clickAtras}>${ATRAS}</div>
                    <div id="lblTitulo">${this.items.Nombre}</div>
                </div>
                <div id="lblLeyenda">${idiomas[this.idioma].mascotaver.leyenda}</div>
            </div>
            <div id="cuerpo">
                <div id="foto" style="background-image:url(${this.items.Foto})">
                </div>
                <label class="subTitulo">${idiomas[this.idioma].mascotaver.informacion}</label>
                <label class="informacion">${idiomas[this.idioma].mascotaver.tipo + this.items.Raza.MascotasTipo.Descripcion}</label>
                <label class="informacion">${idiomas[this.idioma].mascotaver.edad + this.calculaEdad(this.items.FechaNacimiento)}</label>
                <button id="btn-edit" btn1 @click=${ this.clickEdit}>
                    ${ idiomas[this.idioma].mascotaver.btn1}
                </button >
                <label class="subTitulo">${idiomas[this.idioma].mascotaver.consulta}</label>
                <div style="display:grid;grid-gap:.8rem;justify-self: center;">
                    ${this.items.Reservas.map(dato => html`
                        <div id="cmhDivEtiqueta">
                            <div id="cmhDivImagen" style="background-image:url(${this.items.Foto});grid-row-start:1;grid-row-end:4;"></div>
                            <div id="cmhDivNombre">${this.items.Nombre}</div>
                            <div id="cmhDivFecha">${dato.FechaAtencion.substring(8,10)+"/"+dato.FechaAtencion.substring(5,7)+"/"+dato.FechaAtencion.substring(0,4)}</div>
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
                <div style="display:grid;grid-gap:.8rem;">
                    ${this.items.MascotasVacuna.map(dato => this.renderVacuna(dato) )}       
                </div>
                <button id="btn-edit" btn3 @click=${ this.clickVacunas}>
                    ${ idiomas[this.idioma].mascotaver.btn3}
                </button >

            </div>
        </div>
        <pie-componente id="pie" opcion="dos" media-size="${this.mediaSize}">
        </pie-componente>`
    }


    renderVacuna(dato) {


        const calendario = this.calendario.filter(u => u.VacunaId == dato.VacunaId)

        return html `
        
        <div id="ccDivEtiqueta">
            <div id="ccDivVacuna">${dato.Vacuna.Descripcion}</div>
            <div id="ccDivPara">
                ${calendario.length>0?calendario[0].Enfermedades:""}
            </div>
            <div class="labelRedondeado" id="ccDivCachorro">
                ${calendario.length>0?calendario[0].Edad:""}
            </div>
            <div class="labelRedondeado" id="ccDivObligatorio">${calendario.length>0?calendario[0].Optativa?idiomas[this.idioma].calendario.optativa:idiomas[this.idioma].calendario.obligatoria:""}</div>
            <div class="labelRedondeado" id="ccDivPeriodicidad">${calendario.length>0?calendario[0].Periodicidad:""}</div>
        </div>`

        this.update()
    }
    clickAtras() {
        store.dispatch(modoPantalla("mascota", "principal"))
    }
    clickEdit() {
        store.dispatch(mascotasEdit("M", this.items))
        store.dispatch(modoPantalla("mascotaedit", "mascotaver"))
    }
    clickConsulta() {
        store.dispatch(modoPantalla("consulta", "mascotaver"))
    }
    clickVacunas() {
        store.dispatch(mascotasEdit("M", this.items))
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

        if (name == MASCOTASGETEDIT_TIMESTAMP) {
            this.items = state.mascotas.entities.currentEdit[0]
            this.calendario = state.calendario.entities
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

window.customElements.define("pantalla-mascotaver", pantallaMascotaVer);