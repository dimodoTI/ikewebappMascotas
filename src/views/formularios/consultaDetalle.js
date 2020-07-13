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
    cardArchivoSolo
} from "../css/cardArchivoSolo"
import {
    modoPantalla
} from "../../redux/actions/ui";
import {
    ATRAS,
    ARCHIVO
} from "../../../assets/icons/icons"
import {
    mediaConMenu01
} from "../css/mediaConMenu01"

export class pantallaConsultaDetalle extends connect(store)(LitElement) {
    constructor() {
        super();
        this.hidden = true
        this.idioma = "ES"
        this.archivo = [{
            nombre: "Documento.jpg"
        }, {
            nombre: "Estudio.pdf"
        }]
        this.expediente = "#1234"
        this.recomienda = "Tomar jarabe para la tos CanTos 200ml. 1 tapita cada 8hs durante 7 días.     Si el cuadro se prolonga volver a consultar."
        this.datos = {
            paciente: "Ringo",
            motivo: "Tos convulsa",
            fecha: "01/5/2020",
            hora: "12:40",
            sintoma: "Tose repetidamente con flema."
        }
    }

    static get styles() {
        return css `
        ${button}
        ${cabecera1}
        ${cardArchivoSolo}
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
        #gridContenedor{
            display:grid
        };
        :host([media-size="small"]) #gridContenedor{
            grid-row-start:1;
            grid-row-end:3;
        }
        #cuerpo{
            background-color: transparent;
            display:grid;
            padding:1rem;
            grid-auto-flow:row;
            grid-gap:.1rem;
            overflow-y: auto; 
            overflow-x: hidden; 
            border-radius: .5rem;
            overflow-y: auto; 
            overflow-x: hidden; 
        }
        #cuerpo::-webkit-scrollbar {
            display: none;
        }
        :host(:not([media-size="small"])) #cuerpo{
            width: 65%;
            justify-self: center;
        }
        #lblDetalle{
            font-size: var(--font-bajada-size);
            font-weight: var(--font-bajada-weight);        
        }
        #divDetalle{
            display:grid;
            padding: .5rem 1rem .5rem 1rem;
            font-size: var(--font-bajada-size);
            font-weight: var(--font-header-h1-weight);
            background-color: var(--color-gris-claro);
            grid-gap: .2rem;
            border-radius: .4rem;
        }
        #lblExpediente{
            font-size: var(--font-header-h1-menos-size);
            font-weight: bolder;
        }
        #txtDetalle{
            font-size: var(--font-bajada-size);
            font-weight: var(--font-header-h1-weight);
        }
        #btnConfirmar{
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
                    <div id="lblTitulo">${idiomas[this.idioma].consultadetalle.titulo}</div>
                </div>
                <div id="lblLeyenda">${idiomas[this.idioma].consultadetalle.leyenda}</div>
            </div>
            <div id="cuerpo">
                <label id="lblDetalle">${idiomas[this.idioma].consultadetalle.detalle}</label>
                <div id="divDetalle">
                    <label id="lblExpediente">${idiomas[this.idioma].consultadetalle.expediente + this.expediente}</label>
                    <label class="detalle">${idiomas[this.idioma].consultadetalle.paciente + this.datos.paciente}</label>           
                    <label class="detalle">${idiomas[this.idioma].consultadetalle.motivo + this.datos.motivo}</label>           
                    <label class="detalle">${idiomas[this.idioma].consultadetalle.fecha + this.datos.fecha}</label>           
                    <label class="detalle">${idiomas[this.idioma].consultadetalle.hora + this.datos.hora}</label>           
                    <label class="detalle">${idiomas[this.idioma].consultadetalle.sintoma + this.datos.sintoma}</label>           
                    <div style="padding-top:.5rem;display:grid;grid-gap:.5rem">
                    ${this.archivo.map(dato => html`
                        <div id="cisDivEtiqueta">
                            <div id="cisDivContenido">
                                <div id="cisDivIcomo">${ARCHIVO}</div>
                                <div id="cisDivNombre">${dato.nombre}</div>
                            </div>
                        </div>
                    `)}   
                    </div>
                    <div style="height:.5rem"></div>
                </div>
                <div style="height:.5rem"></div>
                <button id="btnConfirmar" btn1  @click=${this.clickConfirmar}>${idiomas[this.idioma].consultadetalle.btn1}</button>
                <div style="height:1rem"></div>
            </div >
        </div>
        <pie-componente id="pie" opcion="cinco" media-size="${this.mediaSize}">
        </pie-componente>
    `
    }
    clickConfirmar() {
        store.dispatch(modoPantalla("consultadetallemsg", "principal"))
    }
    clickAtras() {
        store.dispatch(modoPantalla("consultaturnos", "consulta"))
    }
    clickFoto() {
        this.shadowRoot.querySelector("#divTapa").style.display = "grid";
        this.shadowRoot.querySelector("#divMensaje").style.display = "grid";
    }
    clickCancelar() {
        this.shadowRoot.querySelector("#divTapa").style.display = "none";
        this.shadowRoot.querySelector("#divMensaje").style.display = "none";
    }

    stateChanged(state, name) {}
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

window.customElements.define("pantalla-consultadetalle", pantallaConsultaDetalle);