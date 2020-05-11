import {
    html,
    LitElement,
    css
} from "lit-element";
import { repeat } from 'lit-html/directives/repeat.js';
import {
    store
} from "../../redux/store";
import {
    connect
} from "@brunomon/helpers";
import {button} from "../css/button";
export class onboardingComponente extends connect(store)(LitElement) {
    constructor() {
        super();
        this.lineas = {};
        this.txtBtn1 = "";
        this.txtBtn2 = "";
        this.txtBtn3 = "";
        this.clickBtn1 = {};  
        this.clickBtn2 = {};  
        this.clickBtn3 = {};  
        this.lienaActual = 0;
    }

    static get styles() {
        return css`
        ${button}
        :host{
            position: absolute;
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
            position: absolute;
            top: 0px;
            left: 0px;
            height: 45%;
            width: 100%;
            background-color: transparent;
            background-image:var(--imagen-fondo-onboarding);
            background-repeat: no-repeat;
            background-position: bottom;
            background-size: cover;
        }
        #cuerpo{
            position: absolute;
            top: 45%;
            left: 0px;
            height: 55%;
            width: 100%;
            background-color: transparent;
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
        }
        #titulo{
            position: absolute;
            top: 0px;
            left: 10%;
            height: 25%;
            width: 80%;
            background-color: transparent;
            display: flex;
            justify-content:center;
            align-items:center; 
            font-size: var(--font-header-h1-size);
            font-weight: var(--font-header-h1-weight);
            text-align: center;
        }

        #leyenda{
            position: absolute;
            top: 26%;
            left: 10%;
            height: 35%;
            width: 80%;
            background-color: transparent;
            display: flex;
            justify-content:center;
            align-items:center; 
            font-size: var(--font-header-h2-size);
            font-weight: var(--font-header-h2-weight);
            text-align: center;
        }
        #puntos{
            position: absolute;
            top: 62%;
            left: 10%;
            height: 8%;
            width: 80%;
            background-color: transparent;     
            display: flex;
            justify-content:center;
            align-items:center; 
            text-align: center;
        }
        #btn-siguiente{
            position: absolute;
            top: 72%;
            left: 10%;
            height: 12%;
            width: 80%;
        }
        #btn-cuenta{
            position: absolute;
            top: 86%;
            left: 10%;
            height: 12%;
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
            ${this.txtBtn1}
            </button>
            <button id="btn-cuenta" btn2 @click=${this.clickBoton2}>
            ${this.txtBtn2}
            </button>
        </div>
        `
    }
    stateChanged(state, name) {
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
            this.clickBtn3();            
        }else{
            this.clickBtn1();
        }
    }
    
    clickBoton2(){
        this.clickBtn2();
    }

    clickBoton3(){
        this.clickBtn3();
    }

    static get properties() {
        return {
            lineas: {
                type: Object,
                reflect: ""
            },
            txtBtn1: {
                type: String,
                reflect: ""
            },
            txtBtn2: {
                type: String,
                reflect: ""
            },
            txtBtn3: {
                type: String,
                reflect: ""
            },
            clickBtn1: {
                type: Object,
                reflect: ""
            },
            clickBtn2: {
                type: Object,
                reflect: ""
            },
            clickBtn3: {
                type: Object,
                reflect: ""
            }
        }
    }
}

window.customElements.define("onboarding-componente", onboardingComponente);