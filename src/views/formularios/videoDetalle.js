import { html, LitElement, css } from "lit-element";
import { store } from "../../redux/store";
import { connect } from "@brunomon/helpers";
import { idiomas } from "../../redux/datos/idiomas"
import { button } from "../css/button"
import { cabecera1 } from "../css/cabecera1"
import { cardArchivoSolo } from "../css/cardArchivoSolo"
import { modoPantalla } from "../../redux/actions/ui";
import { ATRAS, ARCHIVO } from "../../../assets/icons/icons"
export class pantallaVideoDetalle extends connect(store)(LitElement) {
    constructor() {
        super();
        this.hidden = true
        this.idioma = "ES"
        this.archivo = [{ nombre: "Documento.jpg" }, { nombre: "Estudio.pdf" }]
        this.expediente = "#1234"
        this.recomienda = "Tomar jarabe para la tos CanTos 200ml. 1 tapita cada 8hs durante 7 días.     Si el cuadro se prolonga volver a consultar."
        this.datos = { paciente: "Ringo", motivo: "Tos convulsa", fecha: "01/5/2020", hora: "12:40", sintoma: "Tose repetidamente con flema." }
    }

    static get styles() {
        return css`
        ${button}
        ${cabecera1}
        ${cardArchivoSolo}
        :host{
            position: absolute;
            top: 0rem;
            left: 0rem;  
            height:100%;
            width: 100%;
            background-color:var(--color-gris-fondo);
            display:grid;
            grid-template-rows:2fr 8fr;
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
            border-radius: .5rem
        }
        #cuerpo::-webkit-scrollbar {
            display: none;
        }
        #divCalificar{
            display:grid;
            height: 2rem;
            width: 100%;
            background-color: var(--color-celeste);
            border-radius: .2rem;
            grid-template-columns: 60% 40%;
            align-items: center;
        }
        #lblCalificar{
            font-size: var(--font-bajada-size);
            font-weight: var(--font-bajada-weight);        
            padding-left:.5rem;
            color:var(--color-blanco);
        }
        #btnCalificar{
            color:var(--color-blanco);
            width: 3rem;
            margin-right:1rem;
            justify-self:right ;
        }
        #lblConclusion,#lblDetalle{
            font-size: var(--font-bajada-size);
            font-weight: var(--font-bajada-weight);        
             
        }
        #divRecomienda,#divDetalle{
            display:grid;
            padding: .5rem 1rem .5rem 1rem;
            font-size: var(--font-bajada-size);
            font-weight: var(--font-header-h1-weight);
            background-color: var(--color-gris-claro);
            grid-gap: .2rem;
            border-radius: .4rem;
        }
        #lblRecomienda,#lblExpediente{
            font-size: var(--font-header-h1-menos-size);
            font-weight: bolder;
        }
        #txtRecomienda,#txtDetalle{
            font-size: var(--font-bajada-size);
            font-weight: var(--font-header-h1-weight);
        }
        `
    }
    render() {
        return html`
        <div id="header">        
            <div id="bar">
                <div @click=${this.clickAtras}>${ATRAS}</div>
                <div id="lblTitulo">${idiomas[this.idioma].videodetalle.titulo}</div>
            </div>
            <div id="lblLeyenda">${idiomas[this.idioma].videodetalle.leyenda}</div>
        </div>
        <div id="cuerpo">
            <div id="divCalificar">
                <label id="lblCalificar">${idiomas[this.idioma].videodetalle.calificar}</label>
                <button id="btnCalificar" btn2 @click=${this.clickCalificar} style="height:2rem">
                    ${idiomas[this.idioma].videodetalle.btn1}
                </button>
            </div>
            <label id="lblConclusion">${idiomas[this.idioma].videodetalle.conclusion}</label>
            <div id="divRecomienda">
                <label id="lblRecomienda">${idiomas[this.idioma].videodetalle.recomienda}</label>
                <label id="txtRecomienda">${this.recomienda}</label>           
            </div>
            <div style="height:.5rem"></div>
            <label id="lblDetalle">${idiomas[this.idioma].videodetalle.detalle}</label>
            <div id="divDetalle">
                <label id="lblExpediente">${idiomas[this.idioma].videodetalle.expediente + this.expediente}</label>
                <label class="detalle">${idiomas[this.idioma].videodetalle.paciente + this.datos.paciente}</label>           
                <label class="detalle">${idiomas[this.idioma].videodetalle.motivo + this.datos.motivo}</label>           
                <label class="detalle">${idiomas[this.idioma].videodetalle.fecha + this.datos.fecha}</label>           
                <label class="detalle">${idiomas[this.idioma].videodetalle.hora + this.datos.hora}</label>           
                <label class="detalle">${idiomas[this.idioma].videodetalle.sintoma + this.datos.sintoma}</label>           
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
                <div style="height:1rem"></div>
             </div>
            <div style="height:1rem"></div>
        </div >
    `
    }
    clickAtras() {
        store.dispatch(modoPantalla("videocalificacion", "principal"))
    }
    clickCalificar() {
        store.dispatch(modoPantalla("videocalificacion", "principal"))
    }

    stateChanged(state, name) {
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
                reflect: ""
            }
        }
    }
}

window.customElements.define("pantalla-videodetalle", pantallaVideoDetalle);