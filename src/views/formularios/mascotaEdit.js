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
export class pantallaMascotaEdit extends connect(store)(LitElement) {
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
        this.itemVacunas = [{ vacuna: "Perro Quíntuple Refuerzo", para: "Tos de las perreras - Hepatitis - Moquillo - Parvovirus", edad: "Cachorros", Obligatoria: "Obligatoria" },
        { vacuna: "Rabia", para: "Rabia", edad: "Cachorros", obligatoria: "Obligatoria" },
        { vacuna: "Quíntuple", para: "Tos de las perreras - Hepatitis - Moquillo - Parvovirus", edad: "Cachorros", Obligatoria: "Obligatoria" },
        { vacuna: "Tetano", para: "Tetano", edad: "Cachorros", obligatoria: "Obligatoria" },
        { vacuna: " Gato Quíntuple Refuerzo", para: "Tos de las perreras - Hepatitis - Moquillo - Parvovirus", edad: "Cachorros", Obligatoria: "Obligatoria" },
        { vacuna: "Rabia", para: "Rabia", edad: "Cachorros", obligatoria: "Obligatoria" }
        ]
    }

    static get styles() {
        return css`
        ${button}
        ${cabecera1}
        ${cardCalendario}
        ${cardMascotaHorizontal}
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
            grid-gap:.2rem;
            overflow-y: auto; 
            overflow-x: hidden; 
        }
        #cuerpo::-webkit-scrollbar {
            display: none;
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
        `
    }
    render() {
        return html`
        <div id="header">        
            <div id="bar">
                <div @click=${this.clickAtras}>${ATRAS}</div>
                <div id="lblTitulo">${this.mascota.nombre}</div>
            </div>
            <div id="lblLeyenda">${idiomas[this.idioma].mascotaedit.leyenda}</div>
        </div>
        <div id="cuerpo">
            <div id="foto" style="background-image:var(--imagen-perro1)">
            </div>
            <label class="subTitulo">${idiomas[this.idioma].mascotaedit.informacion}</label>
            <label class="informacion">${idiomas[this.idioma].mascotaedit.tipo + this.mascota.tipo}</label>
            <label class="informacion">${idiomas[this.idioma].mascotaedit.raza + this.mascota.raza}</label>
            <label class="informacion">${idiomas[this.idioma].mascotaedit.edad + this.mascota.edad}</label>
            <button id="btn-edit" btn1 @click=${ this.clickEdit}>
                ${ idiomas[this.idioma].mascotaedit.btn1}
            </button >
            <label class="subTitulo">${idiomas[this.idioma].mascotaedit.consulta}</label>
            ${this.consulta.map(dato => html`
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
            `)
            }
            <button id="btn-edit" btn3 @click=${ this.clickConsultas}>
                ${ idiomas[this.idioma].mascotaedit.btn2}
            </button >
            <label class="subTitulo">${idiomas[this.idioma].mascotaedit.vacuna}</label>
            <div id="cuerpoVacuna" style="display:grid;grid-gap:.8rem;justify-self: center;"></div>
            <button id="btn-edit" btn3 @click=${ this.clickVacunas}>
                ${ idiomas[this.idioma].mascotaedit.btn3}
            </button >

            <div style="height:1rem"></div>
        </div >
    `
    }
    clickEdit() {
    }
    clickAtras() {
        store.dispatch(modoPantalla("iniciosesion"))
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
        this.llenar()
    }
    llenar() {
        let cuerpo = this.shadowRoot.getElementById("cuerpoVacuna")
        cuerpo.innerHTML = ""
        let filtro = this.animal;
        this.itemVacunas.forEach(function (entry) {
            if (entry.animal == filtro) {
                let animal = document.createElement("div");
                animal.id = "ccDivEtiqueta";
                let divVacuna = document.createElement("div");
                divVacuna.id = "ccDivVacuna";
                divVacuna.innerHTML = entry.vacuna
                animal.appendChild(divVacuna)
                let divPara = document.createElement("div");
                divPara.id = "ccDivPara";
                divPara.innerHTML = entry.para
                let divCachorro = document.createElement("div");
                divCachorro.id = "ccDivCachorro";
                divCachorro.innerHTML = entry.edad
                let divObligatorio = document.createElement("div");
                divObligatorio.id = "ccDivObligatorio";
                divObligatorio.innerHTML = entry.obligatorio
                animal.appendChild(divVacuna);
                animal.appendChild(divPara);
                animal.appendChild(divCachorro);
                animal.appendChild(divObligatorio);

                cuerpo.appendChild(animal);
            }
        });

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

window.customElements.define("pantalla-mascotaedit", pantallaMascotaEdit);