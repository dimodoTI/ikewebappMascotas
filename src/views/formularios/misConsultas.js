import { html, LitElement, css } from "lit-element";
import { store } from "../../redux/store";
import { connect } from "@brunomon/helpers";
import { idiomas } from "../../redux/datos/idiomas"
import { label } from "../css/label"
import { button } from "../css/button"
import { cabecera1 } from "../css/cabecera1"
import { cardMascotaHorizontal } from "../css/cardMascotaHorizontal"
import { btnFlotanteAlargado } from "../css/btnFlotanteAlargado"
import { btnConsultaNueva } from "../css/btnConsultaNueva"
import { modoPantalla } from "../../redux/actions/ui";
import { CHAT, CONSULTA } from "../../../assets/icons/icons"
export class pantallaMisConsultas extends connect(store)(LitElement) {
    constructor() {
        super();
        this.hidden = true
        this.idioma = "ES"
        this.item = [{ imagen: "--imagen-perro1", nombre: "Coqui", fecha: "Hoy", diagnostico: "Tos con mocos" },
        { imagen: "--imagen-perro1", nombre: "Collie", fecha: "Ayer", diagnostico: "Tos con mocos" },
        { imagen: "--imagen-perro1", nombre: "Poquito", fecha: "11/2/2020", diagnostico: "Tos con mocos" },
        { imagen: "--imagen-perro1", nombre: "Mafalda", fecha: "11/1/2020", diagnostico: "Tos con mocos" },
        { imagen: "--imagen-perro1", nombre: "Mafalda", fecha: "11/1/2020", diagnostico: "Tos con mocos" },
        { imagen: "--imagen-perro1", nombre: "Mafalda", fecha: "11/1/2020", diagnostico: "Tos con mocos" }
        ]
    }

    static get styles() {
        return css`
        ${label}
        ${button}
        ${cabecera1}
        ${cardMascotaHorizontal}
        ${btnFlotanteAlargado}
        ${btnConsultaNueva}
        :host{
            position: absolute;
            top: 0rem;
            left: 0rem;  
            height:100%;
            width: 100%;
            background-color:var(--color-gris-fondo);
            display:grid;
            grid-template-rows:20% 70% 10%;
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
        }
        #cuerpo::-webkit-scrollbar {
            display: none;
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
        #pie{
            position:relative;
        }
    `
    }
    render() {
        return html`
        <div id="header">
            <div style="display:grid;width:100%;grid-template-columns:90% 10%;">
                <div id="bar">
                    <div id="lblTitulo">${idiomas[this.idioma].misconsultas.titulo}</div>
                </div>
                <div id="campana"></div>
            </div>    
            <div id="lblLeyenda">${idiomas[this.idioma].misconsultas.leyenda}</div>
        </div>
        <div id="cuerpo">
            ${this.item.map(dato => html`
                <div id="cmhDivEtiqueta">
                    <div id="cmhDivImagen" style="background-image:var(${dato.imagen});grid-row-start:1;grid-row-end:4;"></div>
                    <div id="cmhDivNombre">${dato.nombre}</div>
                    <div id="cmhDivFecha">${dato.fecha}</div>
                    <div id="cmhDivDiagnostico">${dato.diagnostico}</div>
                    <div id="cmhDivVerDetalle">
                        <button btn2 style="width:4rem;padding:0;text-align:left;font-size: var(--font-label-size);font-weight: var(--font-label-weight);">${idiomas[this.idioma].misconsultas.verDetalle}</button>                    
                    </div>
                    <div id="cmhDivChat">${CHAT}</div>              
                </div>
            `)}
        </div>        
        <pie-componente id="pie" opcion="tres">
        </pie-componente>
        <div id="bfaDivMas">
            ${CONSULTA}
            <label>${idiomas[this.idioma].misconsultas.btn}</label>
        </div>
        `
    }

    clickBotonUsuario() {
        store.dispatch(modoPantalla("usuariodetalle"))
    }
    clickBoton1() {
        store.dispatch(modoPantalla("iniciosesion"))
    }
    clickBoton2() {
        store.dispatch(modoPantalla("iniciosesion"))
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
                reflect: false
            }
        }
    }
}

window.customElements.define("pantalla-misconsultas", pantallaMisConsultas);