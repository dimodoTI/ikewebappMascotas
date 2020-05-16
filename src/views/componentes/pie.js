import {html,LitElement,css} from "lit-element";
import {store} from "../../redux/store";
import {connect} from "@brunomon/helpers";
import {label} from "../css/label"
import { HOME, MASCOTA, VACUNA, CONSULTA, FOTO } from "../../../assets/icons/icons";
export class pieComponente extends connect(store)(LitElement) {
    constructor() {
        super();
        this.btn1 = {}
    }

    static get styles() {
        return css`
        ${label}
        :host{
            position: absolute;
            display: grid;
            bottom: 0rem;
            left: 0rem;  
            height:100%;
            width: 100vw;
            display:grid;
            align-items:center; 
            justify-content:center;
            background-color: transparent;;
            grid-template-columns:20% 20% 20% 20% 20%;
            grid-template-rows: 50% 50%;
            grid-gap:0rem;
        }
        .img{
            position:relative;
            display: flex;
            align-items:center; 
            justify-content:center;
            height: 80%;
            width: 80%;
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
        }
        #svg{
            color:var(--color-negro);
        }
        `
    } 
    render() {
        return html `
            <div id="img-home" class="img">
                ${HOME}
            </div>
            <div id="img-mascota" class="img">
                ${MASCOTA}
            </div>  
            <div id="img-consulta" class="img">
                ${CONSULTA}
            </div>
            <div id="img-vacuna" class="img">
                ${VACUNA}
            </div>  
            <div id="img-foto" class="img">
                ${FOTO}
            </div>          
            <div id="lbl-home" class="lbl">
                Inicio
            </div>
            <div id="lbl-mascota" class="lbl">
                Mascotas
            </div>
            <div id="lbl-consulta" class="lbl">
                Consultas
            </div>
            <div id="lbl-vacuna" class="lbl">
                Vacunas
            </div>
            <div id="lbl-foto" class="lbl">
                Fotos
            </div>
        `
    }
    stateChanged(state, name) {
    }
    firstUpdated() {
    }
    clickBoton1() {
        this.btn1();
    }
    static get properties() {
        return {
            btn1: {
                type: Object,
                reflect: null
            },
            titulo: {
                type: String,
                reflect: ""
            },
            leyenda: {
                type: String,
                reflect: ""
            }
        }
    }
}

window.customElements.define("pie-componente", pieComponente);