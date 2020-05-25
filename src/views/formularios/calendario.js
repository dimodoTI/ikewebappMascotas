import {html,LitElement,css} from "lit-element";
import {store} from "../../redux/store";
import {connect} from "@brunomon/helpers";
import {idiomas } from "../../redux/datos/idiomas"
import {label} from "../css/label"
import {cabecera1} from "../css/cabecera1"
import {btnCalendario} from "../css/btnCalendario"
import {cardCalendario} from "../css/cardCalendario"
import {btnFlotanteAlargado} from "../css/btnFlotanteAlargado"
import {btnConsultaNueva} from "../css/btnConsultaNueva"
import {modoPantalla} from "../../redux/actions/ui";
import {VACUNA,CONSULTA} from "../../../assets/icons/icons"
const MODO_PANTALLA = "ui.timeStampPantalla"
export class pantallaCalendario extends connect(store, MODO_PANTALLA)(LitElement) {
    constructor() {
        super();
        this.hidden = true
        this.idioma = "ES"
        this.animal = "perro"
        this.item = [{animal:"perro",vacuna: "Perro Quíntuple Refuerzo", para:"Tos de las perreras - Hepatitis - Moquillo - Parvovirus",edad:"Cachorros",Obligatoria:"Obligatoria"},
        {animal:"perro",vacuna: "Rabia", para:"Rabia",edad:"Cachorros",obligatoria:"Obligatoria"},
        {animal:"perro",vacuna: "Quíntuple", para:"Tos de las perreras - Hepatitis - Moquillo - Parvovirus",edad:"Cachorros",Obligatoria:"Obligatoria"},
        {animal:"perro",vacuna: "Tetano", para:"Tetano",edad:"Cachorros",obligatoria:"Obligatoria"},
        {animal:"gato",vacuna: " Gato Quíntuple Refuerzo", para:"Tos de las perreras - Hepatitis - Moquillo - Parvovirus",edad:"Cachorros",Obligatoria:"Obligatoria"},
        {animal:"gato",vacuna: "Rabia", para:"Rabia",edad:"Cachorros",obligatoria:"Obligatoria"},
        {animal:"gato",vacuna: "Quíntuple", para:"Tos de las perreras - Hepatitis - Moquillo - Parvovirus",edad:"Cachorros",Obligatoria:"Obligatoria"},
        {animal:"gato",vacuna: "Tetano", para:"Tetano",edad:"Cachorros",obligatoria:"Obligatoria"}
        ]
    }

    static get styles() {
        return css`
        ${label}
        ${cabecera1}
        ${cardCalendario}
        ${btnCalendario}
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
            grid-template-rows:20% 10% 60% 10%;
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
            grid-template-columns: 100%;
            justify-items: center;
            overflow-y: auto; 
            overflow-x: hidden; 
            grid-gap:1rem;
        }
        #cuerpo::-webkit-scrollbar {
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
        #pie{
            position:relative;
        }
        #animales{
            display:grid;
            padding: 0 1rem 0 1rem;
            grid-template-columns:50% 50%;
            height:1.5rem;
            align-items:top;
        }
    `
    } 
    render() {
        return html `
        <div id="header">
            <div style="display:grid;width:100%;grid-template-columns:90% 10%;">
                <div id="bar">
                    <div id="lblTitulo">${idiomas[this.idioma].calendario.titulo}</div>
                </div>
                <div id="campana"></div>
            </div>    
            <div id="lblLeyenda">${idiomas[this.idioma].calendario.leyenda}</div>
        </div>
        <div id="animales" style="padding-top: .4rem;">
            <div id="btnPerro" class="btnCalendario" pres @click="${this.perro}">
                ${idiomas[this.idioma].calendario.perro}
            </div>
            <div id="btnGato" class="btnCalendario" nopres @click="${this.gato}">
                ${idiomas[this.idioma].calendario.gato}
            </div>
        </div>
        <div id="cuerpo">

        </div>        
        <pie-componente id="pie" opcion="cuatro">
        </pie-componente>
        <div id="bfaDivMas">
            ${VACUNA}
            <label>${idiomas[this.idioma].calendario.btn}</label>
        </div>
        `
    }
    perro(){
        this.shadowRoot.getElementById("btnPerro").setAttribute("pres","") 
        this.shadowRoot.getElementById("btnPerro").removeAttribute("nopres") 
        this.shadowRoot.getElementById("btnGato").setAttribute("nopres","") 
        this.shadowRoot.getElementById("btnGato").removeAttribute("pres") 
        this.animal = "perro"
        this.llenar();
    }
    gato(){
        this.shadowRoot.getElementById("btnPerro").setAttribute("nopres","") 
        this.shadowRoot.getElementById("btnPerro").removeAttribute("pres") 
        this.shadowRoot.getElementById("btnGato").setAttribute("pres","") 
        this.shadowRoot.getElementById("btnGato").removeAttribute("nopres") 
        this.animal = "gato"
        this.llenar();
    }
    llenar(){
        let cuerpo = this.shadowRoot.getElementById("cuerpo")
        cuerpo.innerHTML=""
        let filtro = this.animal;
        this.item.forEach(function(entry) {
            if (entry.animal == filtro){
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

    stateChanged(state, name) {
        if (name == MODO_PANTALLA && state.ui.quePantalla == "calendario") {
        }

    }
    firstUpdated() {
        this.llenar()
    }

    static get properties() {
        return {
            hidden: {
                type: Boolean,
                reflect: true
            }
        }
    }
}

window.customElements.define("pantalla-calendario", pantallaCalendario);