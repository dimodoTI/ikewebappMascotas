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
import { repeat } from 'lit-html/directives/repeat.js';
import {modoPantalla,cancelarTimer} from "../../redux/actions/ui";
import {idiomas} from "../../redux/datos/idiomas"
import {button} from "../css/button";
const MODO_PANTALLA = "ui.timeStampPantalla"
export class pantallaOnboarding extends connect(store, MODO_PANTALLA)(LitElement) {
    constructor() {
        super();
        this.hidden = true
        this.idioma = "ES"
        this.lienaActual = 0;
        this.lineas = [{titulo: "Cuidalos. Sin salir de tu casa", mensaje: "Accedé a consultas online y chat personalizado con nuestros profesionales."},
            {titulo: "Lo que necesitas, al alcance de tu mano.", mensaje: "Consultá la historia clínica de tus mascotas en cualquier momento y lugar."},
            {titulo: "Te ayudamos a darles lo mejor", mensaje: "Chequeá el calendario de vacunación para estar siempre al día."},
            {titulo: "Bruno", mensaje: "Chequeá el calendario de vacunación para estar siempre al día."}
        ];
    }

    static get styles() {
        return css`
        ${button}        
        :host{
            position: absolute;
            display:grid;
            grid-template-rows:4.5fr 5.5fr
            top: 0rem;
            left: 0rem;  
            height:100%;
            width: 100%;
            background-color:var(--color-gris-claro);
        }
        :host([hidden]){
            display:none ;
        }
        #header{
            position: relative;
            height: 100%;
            width: 100%;
            background-color: transparent;
            background-image:var(--imagen-fondo-onboarding);
            background-repeat: no-repeat;
            background-position: bottom;
            background-size: cover;
        }
        #cuerpo{
            position: relative;
            display:grid;
            height: 100%;
            width: 100%;
            background-color: transparent;
            justify-items:center;
            align-items:center; 
        }
        #flecha-izq{
            position: absolute;
            top: 0px;
            left: 0px;
            height: 60%;
            width: 5%;
            background-color: transparent;
            background-image:var(--imagen-flecha-izq);
            background-repeat: no-repeat;
            background-position: right top;
            background-size: fixed;
            cursor:pointer;
            z-index:10;
        }
        #flecha-der{
            position: absolute;
            top: 0px;
            right: 0px;
            height: 60%;
            width: 5%;
            background-color: transparent;
            background-image:var(--imagen-flecha-der);
            background-repeat: no-repeat;
            background-position: let top;
            background-size: fixed;
            cursor:pointer;
            z-index:10;
        }
        #titulo{
            position: relative;
            display: flex;
            width:80%;
            height:3rem;
            background-color: transparent;
            justify-content:center;
            align-items:center; 
            font-size: var(--font-header-h1-size);
            font-weight: var(--font-header-h1-weight);
            text-align: center;
        }

        #leyenda{
            position: relative;
            width:80%;
            background-color: transparent;
            font-size: var(--font-header-h2-size);
            font-weight: var(--font-header-h2-weight);
        }
        #puntos{
            position: relative;
            display: flex;
            background-color: transparent;     
            height:2rem;
        }
        #btn-siguiente{
            position: relative;
            height: 2rem;
            width: 80%;
         }
        #btn-cuenta{
            position: relative;
            height: 2rem;
            width: 80%;
        }
        .puntoLLeno{
            height: 100%;
            width: 1.5rem;           
            position: relative;
            background-color: transparent;
            background-image:var(--imagen-punto-lleno);
            background-repeat: no-repeat;
            background-position: center;
            background-size: 1rem;  
        }
        .puntoVacio{
            height: 100%;
            width: 1.5rem;  
            position: relative;
            background-color: transparent;
            background-image:var(--imagen-punto-vacio);
            background-repeat: no-repeat;
            background-position: center;
            background-size: 1rem;  
        }
        `
    }

    render() {
        return html `
        <div id="header">
        </div>
        <div id="cuerpo">
            <div id="flecha-izq" @click="${this.atras}">
            </div>
            <div id="flecha-der" @click="${this.adelante}">
            </div>
            <div id="titulo">
            ${this.lineas[this.lienaActual].titulo}
            </div>
            <div id="leyenda">
            ${this.lineas[this.lienaActual].mensaje}
            </div>
            <div id="puntos">
            ${repeat(this.lineas, (item) => item.titulo, (item, index) => html`
                <div id="punto${index}" class="${index==0 ? 'puntoLLeno' : 'puntoVacio'}">
                </div>
            `)}
            </div>
            <button id="btn-siguiente" btn1 @click=${this.clickBoton1}>
            ${idiomas[this.idioma].onboarding.btn1}
            </button>
            <button id="btn-cuenta" btn2 @click=${this.clickBoton2}>
            ${idiomas[this.idioma].onboarding.btn2}
            </button>
        </div>
        `
    }
    stateChanged(state, name) {
        if (name == MODO_PANTALLA && state.ui.quePantalla == "onboarding") {
            store.dispatch(cancelarTimer())
        }
    }
    firstUpdated() {
        this.shadowRoot.querySelector("#flecha-izq").hidden = true
        if (this.lineas.length == 1){
           this.shadowRoot.querySelector("#flecha-der").hidden = true
        }
    }
    adelante(){
        if (this.lienaActual+1 < this.lineas.length){
            this.shadowRoot.querySelector("#flecha-izq").hidden = false
            this.shadowRoot.querySelector("#punto" + this.lienaActual).classList.add("puntoVacio");
            this.shadowRoot.querySelector("#punto" + this.lienaActual).classList.remove("puntoLLeno");           
            this.lienaActual = this.lienaActual + 1;
            this.shadowRoot.querySelector("#punto" + this.lienaActual).classList.add("puntoLLeno");
            this.shadowRoot.querySelector("#punto" + this.lienaActual).classList.remove("puntoVacio");           
            this.shadowRoot.querySelector("#titulo").innerHTML = this.lineas[this.lienaActual].titulo
            this.shadowRoot.querySelector("#leyenda").innerHTML = this.lineas[this.lienaActual].mensaje
            if (this.lienaActual+1 == this.lineas.length){
                this.shadowRoot.querySelector("#flecha-der").hidden = true
                 this.shadowRoot.querySelector("#btn-siguiente").innerText = this.txtBtn3
            }  
        }
    }
    atras(){
        if (this.lienaActual > 0){
            this.shadowRoot.querySelector("#flecha-der").hidden = false
            this.shadowRoot.querySelector("#punto" + this.lienaActual).classList.add("puntoVacio");
            this.shadowRoot.querySelector("#punto" + this.lienaActual).classList.remove("puntoLLeno");           
            this.lienaActual = this.lienaActual - 1;
            this.shadowRoot.querySelector("#punto" + this.lienaActual).classList.add("puntoLLeno");
            this.shadowRoot.querySelector("#punto" + this.lienaActual).classList.remove("puntoVacio");           
            this.shadowRoot.querySelector("#titulo").innerHTML = this.lineas[this.lienaActual].titulo
            this.shadowRoot.querySelector("#leyenda").innerHTML = this.lineas[this.lienaActual].mensaje
            this.shadowRoot.querySelector("#btn-siguiente").innerText = this.txtBtn1
            if (this.lienaActual == 0){
                this.shadowRoot.querySelector("#flecha-izq").hidden = true
            }             
        }
    }
    clickBoton1(){
        if (this.lienaActual+1 == this.lineas.length){
            store.dispatch(modoPantalla("accesoplan"));           
        }else{
            this.adelante();
        }
    }   
    clickBoton2(){
        store.dispatch(modoPantalla("iniciosesion"));  
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
window.customElements.define("pantalla-onboarding", pantallaOnboarding);