import { html, LitElement, css } from "lit-element";
import { store } from "../../redux/store";
import { connect } from "@brunomon/helpers";
import { label } from "../css/label"
import { HOME, MASCOTA, VACUNA, CONSULTA, FOTO } from "../../../assets/icons/icons";
import { modoPantalla } from "../../redux/actions/ui";
import { idiomas } from "../../redux/datos/idiomas"

export class pieComponente extends connect(store)(LitElement) {
    constructor() {
        super();
        this.opcion = ""
        this.idioma = "ES"
    }

    static get styles() {
        return css`
        ${label}
        :host{
            display: grid;
            align-items:center; 
            justify-content:center;
            background-color: var(--color-blanco);;
            grid-template-columns:repeat(5,2fr);
            grid-template-rows: 60% 40%;
            grid-gap:0rem;
        }
        .img{
            position:relative;
            display: flex;
            align-items:center; 
            justify-content:center;
            height: 80%;
            width: 80%;
            cursor:pointer;
        }
        .img + .select{
            cursor: not-allowed;
            pointer-events: none;  
        }
        .lbl{
            position:relative;
            display: flex;
            align-items:center; 
            justify-content:center;
            height: 80%;
            width: 80%;
            font-size: var(--font-bajada-size);
            font-weight: var(--font-bajada-weight);
            color:var(--color-gris-medio);
        }
        .lbl + .select{
            color:var(--color-negro);
        }

        svg{
            stroke:var(--color-gris);
        }
        .select svg{
            stroke:var(--color-negro);
            fill:var(--color-gris-claro);    
        }
        `
    }
    attributeChangedCallback(name, oldVal, newVal) {
        console.log('attribute change: ', name, newVal);
        super.attributeChangedCallback(name, oldVal, newVal);
    }

    render() {
        return html`
            <div id="img-home"  @click="${this.clickBoton1}" class="img ${this.opcion == 'uno' ? 'select' : ''}">
                ${HOME}
            </div>
            <div id="img-mascota"  @click="${this.clickBoton2}" class="img ${this.opcion == 'dos' ? 'select' : ''}">
                ${MASCOTA}
            </div>  
            <div id="img-consulta"  @click="${this.clickBoton3}" class="img ${this.opcion == 'tres' ? 'select' : ''}">
                ${CONSULTA}
            </div>
            <div id="img-vacuna"  @click="${this.clickBoton4}" class="img ${this.opcion == 'cuatro' ? 'select' : ''}">
                ${VACUNA}
            </div>  
            <div id="img-foto"  @click="${this.clickBoton5}" class="img ${this.opcion == 'cinco' ? 'select' : ''}">
                ${FOTO}
            </div>          
            <div id="lbl-home" select class="lbl ${this.opcion == 'uno' ? 'select' : ''}">
                ${idiomas[this.idioma].pie.inicio}
            </div>
            <div id="lbl-mascota" class="lbl ${this.opcion == 'dos' ? 'select' : ''}">
                ${idiomas[this.idioma].pie.mascota}
            </div>
            <div id="lbl-consulta" class="lbl ${this.opcion == 'tres' ? 'select' : ''}">
                ${idiomas[this.idioma].pie.consulta}
            </div>
            <div id="lbl-vacuna" class="lbl ${this.opcion == 'cuatro' ? 'select' : ''}">
                ${idiomas[this.idioma].pie.vacuna}
            </div>
            <div id="lbl-foto" class="lbl ${this.opcion == 'cinco' ? 'select' : ''}">
                ${idiomas[this.idioma].pie.foto}
            </div>
        `
    }
    clickBoton1() {
        store.dispatch(modoPantalla("principal", "principal"))
    }
    clickBoton2() {
        store.dispatch(modoPantalla("mascota", "principal"))
    }
    clickBoton3() {
        store.dispatch(modoPantalla("misconsultas", "principal"))
    }
    clickBoton4() {
        store.dispatch(modoPantalla("calendario", "principal"))
    }
    clickBoton5() {
        store.dispatch(modoPantalla("fotogaleria", "principal"))
    }

    static get properties() {
        return {
            opcion: {
                type: String
            }
        }
    }
}

window.customElements.define("pie-componente", pieComponente);