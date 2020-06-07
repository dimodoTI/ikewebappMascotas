import { html, LitElement, css } from "lit-element";
import { store } from "../../redux/store";
import { connect } from "@brunomon/helpers";
import { idiomas } from "../../redux/datos/idiomas"
import { button } from "../css/button"
import { cabecera1 } from "../css/cabecera1"
import { cardMascotaHorizontal } from "../css/cardMascotaHorizontal"
import { cardCalendario } from "../css/cardCalendario"
import { modoPantalla } from "../../redux/actions/ui";
import { ATRAS, CHAT } from "../../../assets/icons/icons"
import { mediaConMenu01 } from "../css/mediaConMenu01"
export class pantallaMascotaVer extends connect(store)(LitElement) {
    constructor() {
        super();
        this.hidden = true
        this.idioma = "ES"
        this.mascota = { tipo: "Perro", nombre: "Coqui", edad: "4 años", raza: "callejero" }
        this.consulta = [{ imagen: "--imagen-perro1", nombre: "Coqui", fecha: "Hoy", diagnostico: "Tos con mocos" },
        { imagen: "--imagen-perro1", nombre: "Collie", fecha: "Ayer", diagnostico: "Tos con mocos" },
        { imagen: "--imagen-perro1", nombre: "Poquito", fecha: "11/2/2020", diagnostico: "Tos con mocos" },
        { imagen: "--imagen-perro1", nombre: "Mafalda", fecha: "11/1/2020", diagnostico: "Tos con mocos" },
        { imagen: "--imagen-perro1", nombre: "Mafalda", fecha: "11/1/2020", diagnostico: "Tos con mocos" },
        { imagen: "--imagen-perro1", nombre: "Mafalda", fecha: "11/1/2020", diagnostico: "Tos con mocos" }
        ]
        this.itemVacunas = [{ vacuna: "Perro Quíntuple Refuerzo", para: "Tos de las perreras - Hepatitis - Moquillo - Parvovirus", edad: "Cachorros", obligatoria: "Obligatoria" },
        { vacuna: "Rabia", para: "Rabia", edad: "Cachorros", obligatoria: "Obligatoria" },
        { vacuna: "Quíntuple", para: "Tos de las perreras - Hepatitis - Moquillo - Parvovirus", edad: "Cachorros", obligatoria: "Obligatoria" },
        { vacuna: "Tetano", para: "Tetano", edad: "Cachorros", obligatoria: "Obligatoria" },
        { vacuna: " Gato Quíntuple Refuerzo", para: "Tos de las perreras - Hepatitis - Moquillo - Parvovirus", edad: "Cachorros", obligatoria: "Obligatoria" },
        { vacuna: "Rabia", para: "Rabia", edad: "Cachorros", obligatoria: "Obligatoria" }
        ]
    }

    static get styles() {
        return css`
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
        :host([media-size="small"]) #gridContenedor{
            grid-row-start:1;
            grid-row-end:3;
        }
        :host([hidden]){
            display: none; 
        } 
        #cuerpo{
            background-color: transparent;
            display:grid;
            padding:1rem;
            grid-auto-flow:row;
            grid-gap:.2rem;
            overflow-y: auto; 
            overflow-x: hidden; 
        }
        #cuerpo::-webkit-scrollbar {
            display: none;
        }
        :host(:not([media-size="small"])) #cuerpo{
            width:70%;
            justify-self:center;
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
                    <div @click=${this.clickAtras}>${ATRAS}</div>
                    <div id="lblTitulo">${this.mascota.nombre}</div>
                </div>
                <div id="lblLeyenda">${idiomas[this.idioma].mascotaver.leyenda}</div>
            </div>
            <div id="cuerpo">
                <div id="foto" style="background-image:var(--imagen-perro1)">
                </div>
                <label class="subTitulo">${idiomas[this.idioma].mascotaver.informacion}</label>
                <label class="informacion">${idiomas[this.idioma].mascotaver.tipo + this.mascota.tipo}</label>
                <label class="informacion">${idiomas[this.idioma].mascotaver.raza + this.mascota.raza}</label>
                <label class="informacion">${idiomas[this.idioma].mascotaver.edad + this.mascota.edad}</label>
                <button id="btn-edit" btn1 @click=${ this.clickEdit}>
                    ${ idiomas[this.idioma].mascotaver.btn1}
                </button >
                <label class="subTitulo">${idiomas[this.idioma].mascotaver.consulta}</label>
                <div style="display:grid;grid-gap:.8rem;justify-self: center;">
                    ${this.consulta.map(dato => html`
                        <div id="cmhDivEtiqueta">
                            <div id="cmhDivImagen" style="background-image:var(${dato.imagen});grid-row-start:1;grid-row-end:4;"></div>
                            <div id="cmhDivNombre">${dato.nombre}</div>
                            <div id="cmhDivFecha">${dato.fecha}</div>
                            <div id="cmhDivDiagnostico">${dato.diagnostico}</div>
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
                <div style="display:grid;grid-gap:.8rem;justify-self: center;">
                    ${this.itemVacunas.filter(itemVacuna => { return itemVacuna.animal == this.animal }).map(dato => html`
                        <div id="ccDivEtiqueta">
                            <div id="ccDivVacuna">${dato.vacuna}</div>
                            <div id="ccDivPara">${dato.para}</div>
                            <div id="ccDivCachorro">${dato.edad}</div>
                            <div id="ccDivObligatorio">${dato.obligatoria}</div>
                        </div>
                    `)}       
                </div>
                <button id="btn-edit" btn3 @click=${ this.clickVacunas}>
                    ${ idiomas[this.idioma].mascotaver.btn3}
                </button >

                <div style="height:1rem"></div>
            </div >
        </div>
        <pie-componente id="pie" opcion="cinco" media-size="${this.mediaSize}">
        </pie-componente>
    `
    }
    clickAtras() {
        store.dispatch(modoPantalla(store.getState().ui.pantallaQueLLamo, "principal"))
    }
    clickEdit() {
        store.dispatch(modoPantalla("mascotaedit", "mascotaver"))
    }
    clickConsulta() {
        store.dispatch(modoPantalla("consulta", "mascotaver"))
    }
    clickVacunas() {
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