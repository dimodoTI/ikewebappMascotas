import { html, LitElement, css } from "lit-element";
import { store } from "../../redux/store";
import { connect } from "@brunomon/helpers";
import { idiomas } from "../../redux/datos/idiomas"
import { label } from "../css/label"
import { cabecera1 } from "../css/cabecera1"
import { btnCalendario } from "../css/btnCalendario"
import { cardCalendario } from "../css/cardCalendario"
import { btnFlotanteAlargado } from "../css/btnFlotanteAlargado"
import { modoPantalla } from "../../redux/actions/ui";
import { VACUNA, CONSULTA } from "../../../assets/icons/icons"
import { mediaConMenu01 } from "../css/mediaConMenu01"

const MODO_PANTALLA = "ui.timeStampPantalla"
export class pantallaCalendario extends connect(store, MODO_PANTALLA)(LitElement) {
    constructor() {
        super();
        this.hidden = true
        this.idioma = "ES"
        this.animal = "perro"
        this.itemVacunas = [{ animal: "perro", vacuna: "Perro Quíntuple Refuerzo", para: "Tos de las perreras - Hepatitis - Moquillo - Parvovirus", edad: "Cachorros", obligatoria: "Obligatoria" },
        { animal: "perro", vacuna: "Rabia", para: "Rabia", edad: "Cachorros", obligatoria: "Obligatoria" },
        { animal: "perro", vacuna: "Quíntuple", para: "Tos de las perreras - Hepatitis - Moquillo - Parvovirus", edad: "Cachorros", obligatoria: "Obligatoria" },
        { animal: "perro", vacuna: "Tetano", para: "Tetano", edad: "Cachorros", obligatoria: "Obligatoria" },
        { animal: "gato", vacuna: " Gato Quíntuple Refuerzo", para: "Tos de las perreras - Hepatitis - Moquillo - Parvovirus", edad: "Cachorros", obligatoria: "Obligatoria" },
        { animal: "gato", vacuna: "Rabia", para: "Rabia", edad: "Cachorros", obligatoria: "Obligatoria" },
        { animal: "gato", vacuna: "Quíntuple", para: "Tos de las perreras - Hepatitis - Moquillo - Parvovirus", edad: "Cachorros", obligatoria: "Obligatoria" },
        { animal: "gato", vacuna: "Tetano", para: "Tetano", edad: "Cachorros", obligatoria: "Obligatoria" }
        ]
    }

    static get styles() {
        return css`
        ${label}
        ${cabecera1}
        ${cardCalendario}
        ${btnCalendario}
        ${btnFlotanteAlargado}
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
        :host([hidden]){
            display: none; 
        }
        #cuerpo{
            display:grid;
            grid-template-rows:10% 90%;           
        }
        :host(:not([media-size="small"])) #cuerpo{
            width:70%;
            justify-self:center;
        }
        #campana{
            position:relative;
            background-image: var(--icon-campana-con-marca);
            background-color: transparent;
            background-repeat: no-repeat;
            background-position: right center;
            background-size: 1rem 1rem;
        }
        #cuerpoVacuna{
            background-color: transparent;
            display: grid;
            width: 100%;
            grid-template-columns: 100%;
            justify-items: center;
            overflow-y: auto; 
            overflow-x: hidden; 
            grid-gap:1rem;
        }
        #cuerpoVacuna::-webkit-scrollbar {
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
        #animales{
            display:grid;
            padding: 0 1rem 0 1rem;
            grid-template-columns:50% 50%;
            height:1.5rem;
            align-items:top;
        }
        #pie{
            position:relative;
            grid-area: Pie; 
            display:grid;
            overflow-x: none; 
        }
    `
    }
    render() {
        return html`
        <div id="gridContenedor">
            <div id="header">
                <div style="display:grid;width:100%;grid-template-columns:90% 10%;">
                    <div id="bar">
                        <div id="lblTitulo">${idiomas[this.idioma].calendario.titulo}</div>
                    </div>
                    <div id="campana" @click=${this.clickBotonNotificacion}></div>
                </div>    
                <div id="lblLeyenda">${idiomas[this.idioma].calendario.leyenda}</div>
            </div>
            <div id="cuerpo">
                <div id="animales" style="padding-top: .4rem;">
                    <div id="btnPerro" class="btnCalendario" pres @click="${this.perro}">
                        ${idiomas[this.idioma].calendario.perro}
                    </div>
                    <div id="btnGato" class="btnCalendario" nopres @click="${this.gato}">
                        ${idiomas[this.idioma].calendario.gato}
                    </div>
                </div>
                <div id="cuerpoVacuna" style="width:95%;justify-self: center;">
                    ${this.itemVacunas.filter(itemVacuna => { return itemVacuna.animal == this.animal }).map(dato => html`
                        <div id="ccDivEtiqueta">
                            <div id="ccDivVacuna">${dato.vacuna}</div>
                            <div id="ccDivPara">${dato.para}</div>
                            <div id="ccDivCachorro">${dato.edad}</div>
                            <div id="ccDivObligatorio">${dato.obligatoria}</div>
                        </div>
                    `)}
                </div>        
            </div>        
        </div>        
        <pie-componente id="pie" opcion="cuatro" >
        </pie-componente>
        <div id="bfaDivMas"  @click=${this.clickBotonVacuna}>
            ${VACUNA}
            <label>${idiomas[this.idioma].calendario.btn}</label>
        </div>
        `
    }
    perro() {
        this.shadowRoot.getElementById("btnPerro").setAttribute("pres", "")
        this.shadowRoot.getElementById("btnPerro").removeAttribute("nopres")
        this.shadowRoot.getElementById("btnGato").setAttribute("nopres", "")
        this.shadowRoot.getElementById("btnGato").removeAttribute("pres")
        this.animal = "perro"
        this.update();
    }
    gato() {
        this.shadowRoot.getElementById("btnPerro").setAttribute("nopres", "")
        this.shadowRoot.getElementById("btnPerro").removeAttribute("pres")
        this.shadowRoot.getElementById("btnGato").setAttribute("pres", "")
        this.shadowRoot.getElementById("btnGato").removeAttribute("nopres")
        this.animal = "gato"
        this.update();
    }
    clickBotonNotificacion() {
        store.dispatch(modoPantalla("notificacion", "calendario"))
    }
    clickBotonVacuna() {
        store.dispatch(modoPantalla("vacuna", "calendario"))
    }
    stateChanged(state, name) {
        if (name == MODO_PANTALLA && state.ui.quePantalla == "calendario") {
        }

    }
    firstUpdated() {
        // this.llenar()
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

window.customElements.define("pantalla-calendario", pantallaCalendario);