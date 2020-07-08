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
    cabecera1
} from "../css/cabecera1"
import {
    btnCalendario
} from "../css/btnCalendario"
import {
    cardCalendario
} from "../css/cardCalendario"
import {
    btnFlotanteAlargado
} from "../css/btnFlotanteAlargado"
import {
    modoPantalla
} from "../../redux/actions/ui";
import {
    VACUNA,
    CONSULTA,
    MAS
} from "../../../assets/icons/icons"
import {
    mediaConMenu01
} from "../css/mediaConMenu01"

const MODO_PANTALLA = "ui.timeStampPantalla"

const MASCOTASTIPO_TIMESTAMP = "mascotastipo.timeStamp"
const CALENDARIO_TIMESTAMP = "calendario.timeStamp"
export class pantallaCalendario extends connect(store, MODO_PANTALLA, MASCOTASTIPO_TIMESTAMP, CALENDARIO_TIMESTAMP)(LitElement) {
    constructor() {
        super();
        this.hidden = true
        this.idioma = "ES"

        this.animal = 1


        this.items = []
        this.tipo = []


    }

    static get styles() {
        return css `
        ${label}
        ${cabecera1}
        ${cardCalendario}
        ${btnCalendario}
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
        #cuerpo{
            display:grid;
            grid-template-rows:10% 90%;           
        }
        :host(:not([media-size="small"])) #cuerpo{
            width:70%;
            justify-self:center;
        }
        #campana{
            position:relative;
            background-image: var(--icon-campana-con-marca);
            background-color: transparent;
            background-repeat: no-repeat;
            background-position: right center;
            background-size: 1rem 1rem;
        }
        #cuerpoVacuna{
            background-color: transparent;
            display: grid;
            width: 100%;
            grid-template-columns: 100%;
            justify-items: center;
            overflow-y: auto; 
            overflow-x: hidden; 
            grid-gap:1rem;
            align-content:flex-start
        }
        #cuerpoVacuna::-webkit-scrollbar {
            display: none;
        }
        label {
            position: relative;
            width: 95%;
            color: var(--color-negro);
            background-color:transparent;
            border-radius:0;
            font-size: var(--font-bajada-size);
            font-weight: var(--font-bajada-weight);
        }      
        #animales{
            display:grid;
            padding: 0 1rem 0 1rem;
            grid-template-columns:50% 50%;
            height:1.5rem;
            align-items:top;
        }
        #pie{
            position:relative;
            grid-area: Pie; 
            display:grid;
            overflow-x: none; 
        }

        .botonMarcado{
            cursor: not-allowed;
            pointer-events: none;
            border-color: var(--color-celeste);
            color: var(--color-celeste);
            border-width: thick;
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
                <div style="display:grid;width:100%;grid-template-columns:90% 10%;">
                    <div id="bar">
                        <div id="lblTitulo">${idiomas[this.idioma].calendario.titulo}</div>
                    </div>
                    <div id="campana" @click=${this.clickBotonNotificacion}></div>
                </div>    
                <div id="lblLeyenda">${idiomas[this.idioma].calendario.leyenda}</div>
            </div>
            <div id="cuerpo">
                <div id="animales" style="padding-top:.4rem;">
                    ${this.tipo.map(tipo => html `<div  class="btnCalendario ${tipo.Id==this.animal?"botonMarcado":""}" .item=${tipo} @click="${this.seleccionTipo}">
                        ${tipo.Descripcion}</div>`)}
                </div>

                <div id="cuerpoVacuna" style="width:95%;justify-self:center;">
                ${this.items
                    .filter(item =>{
                        return item.MascotasTipoId==this.animal
                    })
                    .map(dato => this.renderItemVacuna(dato))}
                </div>        
            </div>        
        </div>        
        <pie-componente id="pie" opcion="cuatro" media-size="${this.mediaSize}">
        </pie-componente>
        <div id="bfaDivMas"  @click=${this.clickBotonVacuna}>
            ${VACUNA}
            <label>${idiomas[this.idioma].calendario.btn}</label>
        </div>
        `
    }



    desmarcarBotones() {
        const botones = this.shadowRoot.querySelectorAll(".btnCalendario")
        botones.forEach((button) => {
            button.classList.remove("botonMarcado")
        });
    }

    seleccionTipo(e) {
        this.desmarcarBotones()
        e.currentTarget.classList.add("botonMarcado")
        this.animal = e.currentTarget.item.Id
        this.update()
    }

    renderItemVacuna(dato) {
        return html `                
        <div id="ccDivEtiqueta">
            <div id="ccDivVacuna">${dato.Vacuna.Descripcion}</div>
            <div id="ccDivPara">${dato.Enfermedades}</div>
            <div class="labelRedondeado" id="ccDivCachorro">${dato.Edad}</div>
            <div class="labelRedondeado" id="ccDivObligatorio">${dato.Optativa?idiomas[this.idioma].calendario.optativa:idiomas[this.idioma].calendario.obligatoria}</div>
            <div class="labelRedondeado" id="ccDivPeriodicidad">${dato.Periodicidad}</div>
        </div>`
        this.update()
    }


    clickBotonNotificacion() {
        store.dispatch(modoPantalla("notificacion", "calendario"))
    }
    clickBotonVacuna() {

        store.dispatch(modoPantalla("vacuna", "calendario"))
    }
    stateChanged(state, name) {
        if (name == MODO_PANTALLA && state.ui.quePantalla == "calendario") {}

        if (name == MASCOTASTIPO_TIMESTAMP) {
            let tipo = [
                ...state.mascotastipo.entities
            ]
            this.tipo = tipo.filter(u => (u.Descripcion.toLowerCase().includes("perro") || u.Descripcion.toLowerCase().includes("gato")))
            this.animal = this.tipo[0].Id
            this.update()
        }
        if (name == CALENDARIO_TIMESTAMP) {
            this.items = state.calendario.entities
            this.update()
        }

    }
    firstUpdated() {
        // this.llenar()
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
            animal: {
                type: String,
                reflect: true
            }
        }
    }
}

window.customElements.define("pantalla-calendario", pantallaCalendario);