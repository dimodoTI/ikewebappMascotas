import { html, LitElement, css } from "lit-element";
import { store } from "../../redux/store";
import { connect } from "@brunomon/helpers";
import { idiomas } from "../../redux/datos/idiomas"
import { button } from "../css/button"
import { cabecera1 } from "../css/cabecera1"
import { cardTurnosPaciente } from "../css/cardTurnosPaciente"
import { modoPantalla } from "../../redux/actions/ui";
import { ATRAS } from "../../../assets/icons/icons"
import { mediaConMenu01 } from "../css/mediaConMenu01"

export class pantallaConsultaTurnos extends connect(store)(LitElement) {
    constructor() {
        super();
        this.hidden = true
        this.idioma = "ES"
        this.libres = [{ fecha: "2020-05-24", libre: [{ hora: "16:00" }, { hora: "16:20" }, { hora: "16.40" }] },
        { fecha: "2020-05-26", libre: [{ hora: "9:00" }, { hora: "9:20" }, { hora: "12:40" }] },
        { fecha: "2020-05-27", libre: [{ hora: "12:00" }, { hora: "14:20" }, { hora: "16:40" }] },
        { fecha: "2020-05-29", libre: [{ hora: "9:20" }, { hora: "9:40" }, { hora: "10:40" }] },
        { fecha: "2020-05-29", libre: [{ hora: "11:20" }, { hora: "11:40" }, { hora: "12:40" }] },
        { fecha: "2020-05-29", libre: [{ hora: "13:20" }, { hora: "13:40" }, { hora: "14:40" }] },
        { fecha: "2020-05-30", libre: [{ hora: "9:00" }, { hora: "9:20" }, { hora: "12:40" }] },
        { fecha: "2020-06-1", libre: [{ hora: "9:00" }, { hora: "9:20" }, { hora: "12:40" }] }]
    }
    static get styles() {
        return css`
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
        `
    }
    render() {
        return html`
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
            return item.libre.map((queDia) => {
                return html`
                        <div id="atDivEtiqueta" no @click=${this.clickSeleccionar}>
                            <div id="atDivDia">
                                <label id="atLblDiaNumero">${this.nroDia(item.fecha)}</label>
                                <label id="atLblMes">${this.mes(item.fecha)}</label>
                            </div>
                            <div id="atDivHora" no>
                                <label id="atLblDiaTexto">${this.dow(item.fecha)}</label>
                                <label id="atLblHora">${queDia.hora}</label>
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
        if (e.currentTarget.hasAttribute("no")) {
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

        }
    }
    clickBoton1() {
        store.dispatch(modoPantalla(store.getState().ui.pantallaQueLLamo, "principal"))
    }
    clickBoton2() {
        store.dispatch(modoPantalla("consultadetalle", "consultaturnos"))
    }
    stateChanged(state, name) {
    }
    firstUpdated() {
    }
    nroDia(fecha) {
        let d = new Date(fecha + ":12:12:12")
        return d.getDate()
    }
    dow(fecha) {
        let d = new Date(fecha + ":12:12:12");
        let dia = d.getDay()
        return idiomas[this.idioma].diasCortos[dia]
    }
    mes(fecha) {
        let d = new Date(fecha + ":12:12:12");
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
            }
        }
    }
}

window.customElements.define("pantalla-consultaturnos", pantallaConsultaTurnos);