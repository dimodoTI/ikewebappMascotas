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
    btnFlotanteRedondo
} from "../css/btnFlotanteRedondo"
import {
    btnNuevaConsulta
} from "../componentes/btnNuevaConsulta"
import {
    mediaConMenu01
} from "../css/mediaConMenu01"
import {
    modoPantalla
} from "../../redux/actions/ui";
import {
    flierPortadaComponente
} from "../componentes/flierPortada";
import {
    marquesinaFijaComponente
} from "../componentes/marquesinaFija";
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

const RESERVA_TIMESTAMP = "reserva.timeStamp"
const CLIENTE_TIMESTAMP = "cliente.timestamp"

export class pantallaPrincipal extends connect(store, RESERVA_TIMESTAMP, CLIENTE_TIMESTAMP)(LitElement) {
    constructor() {
        super();
        this.hidden = true
        this.idioma = "ES"
        this.hayReserva = "N";
    }

    static get styles() {
        return css `
        ${label}
        ${button}
        ${cabecera1}
        ${btnFlotanteRedondo}
        ${mediaConMenu01}
        :host{
            position: absolute;
            top: 0;
            left: 0;  
            height:100%;
            width:100%;
            background-color:var(--color-gris-fondo);
            display:grid;
            overflow-x: auto; 
        }
        :host([hidden]){
            display: none; 
        } 
        #gridPie{
            grid-area: Pie; 
            display:grid;
            overflow-x: none; 
        }
        #detalle{
            height: 90%;
            width: 2rem;
            background-image: var(--icon-flecha-abajo-sin-bordes);
            background-color: transparent;
            background-repeat: no-repeat;
            background-position: left bottom;
            background-size: 1rem 1rem;
            opacity:.4;
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
            position: relative;
            display: grid;
            background-color: transparent;
            grid-template-columns : 60% 40%;
            grid-row-gap : .5rem;
            grid-column-gap:.2rem;    
            align-items: center;
            justify-items: center;
            justify-content: center;
            overflow-x: hidden; 
        }
        #cuerpo::-webkit-scrollbar {
            display: none;
        }
        :host(:not([media-size="small"])) #cuerpo{
            grid-template-rows : 1% 7% 55% 7% 25% 1%;
            grid-row-gap : .4rem;
        }
        #avisoConsulta{
            width:95%;
            height:2rem;
            grid-column-start:1;
            grid-column-end:3;
        }
        :host(:not([media-size="small"])) #avisoConsulta{
            width:95%;
            grid-column-start:1;
            grid-column-end:3;
            height:100%;
        }
        #flier{
            grid-column-start:1;
            grid-column-end:3;
            width:95%;
            height:10rem;
        }
        :host(:not([media-size="small"])) #flier{
            width:92%;
            grid-column-start:1;
            grid-column-end:1;
            height:100%;
        }
        #marqFija{
            display:none;
            height:100%;
            justify-self: left;
        }
        :host(:not([media-size="small"])) #marqFija{
            display:grid;
            width:89%;
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
        #carro{
            position: relative;
            display:grid;
            border-radius:.4rem;
            height:8.5rem;
            width:95vw;
            overflow-x: scroll;
            grid-column-start:1;
            grid-column-end:3;
        }
        #carro::-webkit-scrollbar {
            display: none;
        }
        :host(:not([media-size="small"])) #carro{
            grid-column-start:1;
            grid-column-end:1;
            width:5vw;
            display:none;
        }
        #lbl-novedades{
            font-size: var(--font-header-h1-menos-family);
            font-weight: var(--font-header-h1-menos-weight);
            align-items:center;
            justify-items:left;
            grid-column-start:1;
            grid-column-end:3;  
            margin-bottom: -.8rem;         
        }
        #carroNovedades{
            position: relative;
            display:grid;
            overflow-x: scroll; 
            border-radius:.4rem;
            height:9.5rem;
            width:95vw;
            overflow-x: scroll; 
            grid-column-start:1;
            grid-column-end:3;
        }
        #carroNovedades::-webkit-scrollbar {
            display: none;
        }
        :host(:not([media-size="small"])) #carroNovedades{
            width:95%;
            height:100%;
         }
        #divAyuda{
            display:grid;
            width:100%;
            grid-gap:0;
            justify-items:center;
            grid-column-start:1;
            grid-column-end:3;
        }
        :host(:not([media-size="small"])) #divAyuda{
            display:none;
        }
        .lblayuda{
            font-size: var(--font-header-h2-size);
            font-weight: var(--font-header-h2-weight);
            text-align:center;
        }
    `
    }
    render() {
        return html `
            <div id="gridContenedor">
                <div id="header">
                    <div style="display:grid;width:100%;grid-template-columns:90% 10%;">
                        <div id="bar">
                            <div id="lblTitulo">${idiomas[this.idioma].principal.tituloCabecera+" "+ store.getState().cliente.datos.nombre}</div>
                            <div id="detalle" 
                                @click=${this.clickBotonUsuario} style="display:${store.getState().cliente.logueado?"":"none"}">
                            </div>
                        </div>
                        <div id="campana" @click=${this.clickBotonNotificacion}></div>
                    </div>    
                    <div id="lblLeyenda">${idiomas[this.idioma].principal.leyendaCabecera}</div>
                </div>
                <div id="cuerpo">
                    <div id="espacio" style="height:.5rem;width:1%;grid-column-start:1;grid-column-end:3;"></div>
                    <btn-nueva-consulta id="avisoConsulta" media-size="${this.mediaSize}">
                    </btn-nueva-consulta>

                    <flierportada-componente id="flier" media-size="${this.mediaSize}" tipo="C">
                    </flierportada-componente>
                    <marquesinafija-componente id="marqFija"  media-size="${this.mediaSize}"
                        tipo="A" etiqueta-ancho="3rem">
                    </marquesinafija-componente>

                    <div id="carro">
                        <marquesina-componente id="marq"  media-size="${this.mediaSize}"
                        tipo="A" etiqueta-ancho="8rem">
                        </marquesina-componente>
                    </div>
                    <label id="lbl-novedades">${idiomas[this.idioma].principal.lblNovedades}</label>

                    <div id="carroNovedades">
                        <marquesina-componente id="marqNovedades" media-size="${this.mediaSize}"
                        tipo="B" etiqueta-ancho="${this.mediaSize == "small" ? '9rem' : '6.5rem'}">
                        </marquesina-componente>
                    </div>

                    <div id="divAyuda">
                        <label class="lblayuda">${idiomas[this.idioma].principal.lblAyuda01}</label>
                        <label class="lblayuda">${idiomas[this.idioma].principal.lblAyuda02}</label>
                        <button btn3 id="btn-ayuda" @click=${this.clickAyuda}>${idiomas[this.idioma].principal.btnAyuda}</button>
                    </div>
                    <div id="espacio" style="height:.5rem;width:1%"></div>
                </div>        
            </div>
            <pie-componente id="gridPie" opcion="uno" media-size="${this.mediaSize}">
            </pie-componente>
            <div id="bfrDivMas">${MAS}</div>

`
    }


    clickBotonUsuario() {
        store.dispatch(modoPantalla("usuariodetalle", "principal"))
    }
    clickBotonNotificacion() {
        store.dispatch(modoPantalla("notificacion", "principal"))
    }
    clickConsulta() {
        store.dispatch(modoPantalla("video", "principal"))
    }
    clickAgenda() {
        store.dispatch(modoPantalla("plancontrata", "principal"))
    }
    clickAyuda() {
        store.dispatch(modoPantalla("vercobertura", "principal"))
    }
    clickBoton1() {
        store.dispatch(modoPantalla("iniciosesion", "principal"))
    }
    clickBoton2() {
        store.dispatch(modoPantalla("iniciosesion", "principal"))
    }
    stateChanged(state, name) {
        if (name == RESERVA_TIMESTAMP) {
            let reserva = state.reserva.entities;
            if (reserva) {
                if (reserva[0].tiene == "S") {
                    this.hayReserva = "S";
                }
            }
            this.update();
        }
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

window.customElements.define("pantalla-principal", pantallaPrincipal);