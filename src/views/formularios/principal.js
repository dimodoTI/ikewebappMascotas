import { html, LitElement, css } from "lit-element";
import { store } from "../../redux/store";
import { connect } from "@brunomon/helpers";
import { idiomas } from "../../redux/datos/idiomas"
import { label } from "../css/label"
import { button } from "../css/button"
import { cabecera1 } from "../css/cabecera1"
import { btnFlotanteRedondo } from "../css/btnFlotanteRedondo"
import { btnConsultaNueva } from "../css/btnConsultaNueva"
import { modoPantalla } from "../../redux/actions/ui";
import { REGALO, CARRITO, RELOJ, NOVEDADES1, NOVEDADES2, NOVEDADES3, HOME, MASCOTA, CONSULTA, VACUNA, FOTO, MAS } from "../../../assets/icons/icons"
export class pantallaPrincipal extends connect(store)(LitElement) {
    constructor() {
        super();
        this.hidden = true
        this.idioma = "ES"
        this.marque1 = [{ imagen: REGALO, texto: idiomas[this.idioma].principal.carro1[0].lbl, color: "--color-celeste" }, { imagen: CARRITO, texto: idiomas[this.idioma].principal.carro1[1].lbl, color: "--color-amarillo" }, { imagen: RELOJ, texto: idiomas[this.idioma].principal.carro1[2].lbl, color: "--color-rosa" }]
        this.marque2 = [{ imagen: NOVEDADES1, texto: idiomas[this.idioma].principal.carro2[0].lbl, color: "--color-celeste" }, { imagen: NOVEDADES2, texto: idiomas[this.idioma].principal.carro2[1].lbl, color: "--color-celeste" }, { imagen: NOVEDADES3, texto: idiomas[this.idioma].principal.carro2[2].lbl, color: "--color-celeste" }]
    }

    static get styles() {
        return css`
        ${label}
        ${button}
        ${cabecera1}
        ${btnFlotanteRedondo}
        ${btnConsultaNueva}
        :host{
            position: absolute;
            top: 0rem;
            left: 0rem;  
            height:100vh;
            width: 100vw;
            background-color:var(--color-gris-fondo);
            display:grid;
            grid-template-areas:
                'Contenedor'
                'Pie';   
            grid-template-rows: 9fr 1fr;      
        }
        :host([hidden]){
            display: none; 
        } 
        #gridContenedor{
            grid-area: Contenedor; 
            grid-template-rows:20% 80%;
            display:grid;
        }
        #gridPie{
            grid-area: Pie; 
            display:grid;
        }
        #detalle{
            height: 90%;
            width: 2rem;
            background-image: var(--icon-flecha-abajo-sin-bordes);
            background-color: transparent;
            background-repeat: no-repeat;
            background-position: left bottom;
            background-size: 1rem 1rem;
            opacity:.4;
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
            position: relative;
            width: 100vw;
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
        #carro{
            position: relative;
            display:grid;
            overflow-x: scroll; 
            border-radius:.4rem;
            height:8rem;
            width: 95vw;
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
            overflow-x: scroll; 
            border-radius:.4rem;
            height:7.5rem;
            width: 95vw;
        }
        #carroNovedades::-webkit-scrollbar {
            display: none;
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
        return html`
            <div id="gridContenedor">
                <div id="header">
                    <div style="display:grid;width:100%;grid-template-columns:90% 10%;">
                        <div id="bar">
                            <div id="lblTitulo">${idiomas[this.idioma].principal.tituloCabecera}</div>
                            <div id="detalle" 
                                @click=${this.clickBotonUsuario}>
                            </div>
                        </div>
                        <div id="campana" @click=${this.clickBotonNotificacion}></div>
                    </div>    
                    <div id="lblLeyenda">${idiomas[this.idioma].principal.leyendaCabecera}</div>
                </div>
                <div id="cuerpo">
                    <div id="espacio" style="position:relative;height:.5rem;width:100%"></div>
                    <div id="div-consultaNueva">
                        <label id="lbl-consultaNueva">${idiomas[this.idioma].principal.lblConsulta}</label>
                        <button id="btn-consultaNueva" btn2 @click=${this.clickConsulta}>${idiomas[this.idioma].principal.btnConsulta}</button>
                    </div>  
                    <div id="div-agenda" >
                        <label id="lbl-agenda">${idiomas[this.idioma].principal.lblFlier}</label>
                        <button id="btn-agenda" btn2 @click=${this.clickAgenda}>${idiomas[this.idioma].principal.btnFlier}</button>
                    </div>  

                    <div id="carro">
                        <marquesina-componente id="marq"
                        .item=${this.marque1}>
                        </marquesina-componente>
                    </div>

                    <label id="lbl-novedades">${idiomas[this.idioma].principal.lblNovedades}</label>

                    <div id="carroNovedades">
                        <marquesina-componente id="marqNovedades" 
                        .item=${this.marque2}>
                        </marquesina-componente>
                    </div>
                    <label id="lbl-ayuda">${idiomas[this.idioma].principal.lblAyuda}</label>
                    <button btn3 id="btn-ayuda" @click=${this.clickAyuda}>${idiomas[this.idioma].principal.btnAyuda}</button>
                    <div id="espacio" style="position:relative;height:.5rem;width:100%"></div>
                </div>        
            </div>
            <pie-componente id="gridPie" opcion="uno">
            </pie-componente>
            <div id="bfrDivMas">${MAS}</div>
`
    }


    clickBotonUsuario() {
        store.dispatch(modoPantalla("usuariodetalle", "principal"))
    }
    clickBotonNotificacion() {
        store.dispatch(modoPantalla("notificacion", "principal"))
    }
    clickConsulta() {
        store.dispatch(modoPantalla("video", "principal"))
    }
    clickAgenda() {
        store.dispatch(modoPantalla("plancontrata", "principal"))
    }
    clickAyuda() {
        store.dispatch(modoPantalla("vercobertura", "principal"))
    }
    clickBoton1() {
        store.dispatch(modoPantalla("iniciosesion", "principal"))
    }
    clickBoton2() {
        store.dispatch(modoPantalla("iniciosesion", "principal"))
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