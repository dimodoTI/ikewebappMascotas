import {html,LitElement,css} from "lit-element";
import {store} from "../../redux/store";
import {connect} from "@brunomon/helpers";
import {idiomas } from "../../redux/datos/idiomas"
import {label} from "../css/label"
import {button} from "../css/button"
import {modoPantalla} from "../../redux/actions/ui";
import {REGALO,CARRITO,RELOJ,NOVEDADES1,NOVEDADES2,NOVEDADES3,HOME,MASCOTA,CONSULTA,VACUNA,FOTO,MAS} from "../../../assets/icons/icons"
import {cabecera1Componente} from "../componentes/cabecera1Componente"
export class pantallaPrincipal extends connect(store)(LitElement) {
    constructor() {
        super();
        this.hidden = true
        this.idioma = "ES"
        this.marque1 = [{imagen:REGALO,texto:idiomas[this.idioma].principal.carro1[0].lbl, color:"--color-celeste"},{imagen:CARRITO,texto:idiomas[this.idioma].principal.carro1[1].lbl, color:"--color-amarillo"},{imagen:RELOJ,texto:idiomas[this.idioma].principal.carro1[2].lbl, color:"--color-rosa"}]
        this.marque2 = [{imagen:NOVEDADES1, texto:idiomas[this.idioma].principal.carro2[0].lbl, color:"--color-celeste"},{imagen:NOVEDADES2,texto:idiomas[this.idioma].principal.carro2[1].lbl, color:"--color-celeste"},{imagen:NOVEDADES3,texto:idiomas[this.idioma].principal.carro2[2].lbl, color:"--color-celeste"}]
    }

    static get styles() {
        return css`
        ${label}
        ${button}
        :host{
            position: absolute;
            top: 0rem;
            left: 0rem;  
            height:100%;
            width: 100%;
            background-color:var(--color-gris-fondo);
        }
        :host([hidden]){
            display: none; 
        } 
        #header{
            position: absolute;
            display: grid;
            grid-template-columns:100%;
            grid-template-rows: 45% auto;
            top: 0px;
            left: 0px;
            height: 20%;
            width: 100vw;
            background-color: var(--color-blanco);
            border-radius:0rem 0rem 1rem 1rem;
        }
        #cuerpo{
            position: absolute;
            top: 20%;
            left: 0px;
            width: 100vw;
            height: 72%;
            background-color: transparent;
            display: grid;
            grid-auto-flow: row;
            grid-gap: .8rem;
            align-items: center;
            justify-items: center;
            overflow-y: auto; 
            overflow-x: hidden; 
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
        #div-consultaNueva{
            position: relative;
            width: 95%;
            height: 2.5rem;
            background-color:var(--color-azul-oscuro);
            border-radius:.5rem;          
            display: grid;
            align-items:center;
            justify-items:center;
            grid-template-columns:75% auto;
            grid-template-rows: 100%;
            grid-gap:0rem;
        }
        #lbl-consultaNueva{
            color: var(--color-blanco);
            position: relative;
            display:flex;
        }
        #btn-consultaNueva:hover {    
            color: var(--color-blanco);
        }
        #div-agenda{
            position: relative;
            width: 95%;
            height: 10rem;
            background-color:var(--color-amarillo-claro);
            border-radius:.5rem;          
            display: grid;
            align-items:top; 
            justify-content:flex-start;
            grid-template-columns:75%;
            grid-template-rows: 70% 30%;
            grid-gap:0rem;
            background-image:var(--imagen-fondo-agenda);
            background-repeat: no-repeat;
            background-position: top right;
            background-size: 120%;
        }
        #lbl-agenda{
            width: 80%;
            color: var(--color-negro);
            position: relative;
            display:flex;
            align-items:top; 
            justify-content: flex-start;
            font-size: var(--font-header-h1-size);
            font-weight: var(--font-header-h1-weight);
            padding-top:1rem;
            padding-left:.6rem;
        }
        #btn-agenda{    
            position: relative;
            display:flex;
            width:8rem;
        }
        #btn-poliza{
            position: relative;
        }
        #btn-planes{
            position: relative;
        }
        #carro{
            position: relative;
            display:flex;
            flow:left;
            overflow-x: scroll; 
            width: 95%;
            border-radius:.4rem;
            height:8rem;
        }
        #carro::-webkit-scrollbar {
            display: none;
        }
        #lbl-novedades{
            position: relative;
            display:flex;
            font-size: var(--font-header-h2-size);
            font-weight: var(--font-header-h2-weight);
            align-items:center;
            justify-items:left;
        }
        #carroNovedades{
            position: relative;
            display:grid;
            flow:left;
            overflow-x: scroll; 
            width: 95%;
            border-radius:.4rem;
            height:8rem;
        }
        #carroNovedades::-webkit-scrollbar {
            display: none;
        }
        #pie{
            position:absolute;
            left:0;
            bottom:0;
            width:100%;
            height:8%;
            background-color:trasparent;
        }
        #mas{
            position:absolute;
            height: 2.5rem;
            width: 2.5rem;
            right: 2rem;
            bottom:5rem;
            background-color: var(--color-azul-oscuro); 
            border-radius:50%;
            display: grid;
            align-items:center; 
            justify-content:center;
            box-shadow: var(--shadow-elevation-4-box);
            cursor:pointer;
       }
        #mas svg{
            display:flex;
            stroke:var(--color-blanco);
            fill:var(--color-celeste);    
            height: 1.5rem;
            width: 1.5rem;
        }
        #lbl-ayuda{
            position: relative;
            display:flex;
            font-size: var(--font-header-h2-size);
            font-weight: var(--font-header-h2-weight);
            align-items:center;
            justify-content:center;
        }
    `
    } 
    render() {
        return html `
        <div id="header">
            <cabecera3-componente 
            titulo="${idiomas[this.idioma].principal.tituloCabecera}" 
            leyenda="${idiomas[this.idioma].principal.leyendaCabecera}"
            .btn1=${function () {store.dispatch(modoPantalla("usuarioregistro"))}}
            ></cabecera3-componente>
        </div>
        <div id="cuerpo">
            <div id="div-consultaNueva">
                <label id="lbl-consultaNueva">${idiomas[this.idioma].principal.lblConsulta}</label>
                <button id="btn-consultaNueva" btn2>${idiomas[this.idioma].principal.btnConsulta}</button>
            </div>  
            <div id="div-agenda" >
               <label id="lbl-agenda">${idiomas[this.idioma].principal.lblFlier}</label>
               <button id="btn-agenda" btn2>${idiomas[this.idioma].principal.btnFlier}</button>
            </div>  

            <div id="carro">
                <marquesina-componente id="marq" style="height:7.8rem;"
                .item=${this.marque1}>
                </marquesina-componente>
            </div>

            <label id="lbl-novedades">${idiomas[this.idioma].principal.lblNovedades}</label>

            <div id="carroNovedades">
                <marquesina-componente id="marqNovedades" style="height:7.8rem;"
                .item=${this.marque2}>
                </marquesina-componente>
            </div>

            <label id="lbl-ayuda">${idiomas[this.idioma].principal.lblAyuda}</label>
            <button btn3 id="btn-ayuda">${idiomas[this.idioma].principal.btnAyuda}</button>

        </div>        
        <pie-componente id="pie" opcion="dos">
        </pie-componente>
        <div id="mas">${MAS}</div>
        `
    }
    
    clickBoton1(){
        store.dispatch(modoPantalla("iniciosesion"))
    }
    clickBoton2(){
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

window.customElements.define("pantalla-principal", pantallaPrincipal);