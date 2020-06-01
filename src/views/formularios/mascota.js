import { html, LitElement, css } from "lit-element";
import { store } from "../../redux/store";
import { connect } from "@brunomon/helpers";
import { idiomas } from "../../redux/datos/idiomas"
import { label } from "../css/label"
import { button } from "../css/button"
import { cabecera1 } from "../css/cabecera1"
import { cardMascotaVertical } from "../css/cardMascotaVertical"
import { btnFlotanteAlargado } from "../css/btnFlotanteAlargado"
import { modoPantalla } from "../../redux/actions/ui";
import { REGALO, CARRITO, RELOJ, NOVEDADES1, NOVEDADES2, NOVEDADES3, HOME, MASCOTA, CONSULTA, VACUNA, FOTO, MAS } from "../../../assets/icons/icons"
export class pantallaMascota extends connect(store)(LitElement) {
    constructor() {
        super();
        this.hidden = true
        this.idioma = "ES"
        this.item = [{ imagen: "--imagen-perro1", tipo: "Perro", nombre: "Coqui", raza: "Calle", edad: "4", consultas: "6" },
        { imagen: "--imagen-perro1", tipo: "Perro", nombre: "Ringo", raza: "Callejera", edad: "5", consultas: "7" },
        { imagen: "--imagen-perro1", tipo: "Perro", nombre: "Ringo", raza: "Callejera", edad: "5", consultas: "7" },
        { imagen: "--imagen-perro1", tipo: "Perro", nombre: "Ringo", raza: "Callejera", edad: "5", consultas: "7" },
        { imagen: "--imagen-perro1", tipo: "Perro", nombre: "Ringo", raza: "Callejera", edad: "5", consultas: "7" }]
    }

    static get styles() {
        return css`
        ${label}
        ${button}
        ${cabecera1}
        ${cardMascotaVertical}
        ${btnFlotanteAlargado}
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
            width: 100%;
            grid-template-columns: repeat(auto-fit,minmax(8.5rem,1fr));
            justify-items: center;
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
                    <div id="lblTitulo">${idiomas[this.idioma].mascota.titulo}</div>
                </div>
                <div id="campana" @click=${this.clickBotonNotificacion}></div>
            </div>    
            <div id="lblLeyenda">${idiomas[this.idioma].mascota.leyenda}</div>
        </div>

        <div id="cuerpo">
            ${this.item.map(dato => html`
                <div id="cmhDivEtiqueta">
                    <div id="cmhDivImagen" style="background-image:var(${dato.imagen});"></div>
                    <div id="cmhDivTipo">${dato.tipo}</div>
                    <div id="cmhDivNombre">${dato.nombre}</div>
                    <div id="cmhDivRaza">${idiomas[this.idioma].mascota.raza + dato.raza}</div>
                    <div id="cmhDivEdad">${idiomas[this.idioma].mascota.edad + dato.edad}</div>
                    <div id="cmhDivConsultas">${dato.consultas + idiomas[this.idioma].mascota.consultas}</div>              
                </div>
            `)}
        </div>        
        <pie-componente id="pie" opcion="dos">
        </pie-componente>
        <div id="bfaDivMas"  @click=${this.clickAgregarMascota}>
            ${MASCOTA}
            <label>${idiomas[this.idioma].mascota.btn}</label>
        </div>
        `
    }
    clickBotonNotificacion() {
        store.dispatch(modoPantalla("notificacion", "mascota"))
    }
    clickAgregarMascota() {
        store.dispatch(modoPantalla("mascotaalta", "mascota"))
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

window.customElements.define("pantalla-mascota", pantallaMascota);