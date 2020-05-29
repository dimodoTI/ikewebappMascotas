import {
    html,
    LitElement,
    css
} from "lit-element";
import {
    connect
} from "@brunomon/helpers"
import {
    store
} from "../redux/store";

import { cabecera3Componente } from "../views/componentes/cabecera3Componente";
import { marquesinaComponente } from "../views/componentes/marquesina";
import { pieComponente } from "../views/componentes/pie";

import { pantallaSplash } from "../views/formularios/splash";
import { pantallaOnboarding } from "../views/formularios/onboarding";
import { pantallaInicioSesion } from "../views/formularios/iniciosesion";
import { pantallaRecuperaClave } from "../views/formularios/recuperaclave";
import { pantallaRecuperaClaveMesg } from "../views/formularios/recuperaclavemsg";
import { pantallaCrearClave } from "../views/formularios/crearclave";
import { pantallaCrearClaveMsg } from "../views/formularios/crearclavemsg";
import { pantallaAccespPlan } from "../views/formularios/accesoplan";
import { pantallaVErCobertuta } from "../views/formularios/vercobertura";
import { pantallaUsuarioRegistro } from "../views/formularios/usuarioRegistro";
import { pantallaPlanDetalle } from "../views/formularios/planDetalle";
import { pantallaPrincipal } from "../views/formularios/principal";
import { pantallaUsuarioDetalle } from "../views/formularios/usuarioDetalle";
import { pantallaMascota } from "../views/formularios/mascota";
import { pantallaMisConsultas } from "../views/formularios/misConsultas";
import { pantallaCalendario } from "../views/formularios/calendario";
import { pantallaFotoGaleria } from "../views/formularios/fotoGaleria";
import { pantallaFotoVer } from "../views/formularios/fotoVer";
import { pantallaVideo } from "../views/formularios/video";
import { pantallaVideoCalificacion } from "../views/formularios/videoCalificacion";
import { pantallaVideoDetalle } from "../views/formularios/videoDetalle";
import { pantallarClaveModificar } from "../views/formularios/claveModificar";
import { pantallarClaveModificarMsg } from "./formularios/claveModificarMsg";
import { pantallaPlanContrata } from "./formularios/planContrata";
import { pantallaNotificacion } from "./formularios/notificacion";
import { pantallaVacuna } from "./formularios/vacuna";
import { pantallaVacunaMsg } from "./formularios/vacunaMsg";
import { pantallaMascotaAlta } from "./formularios/mascotaAlta";
import { pantallaMascotaAltaMsg } from "./formularios/mascotaAltaMsg";
import { pantallaMascotaVer } from "./formularios/mascotaVer";
import { pantallaConsulta } from "./formularios/consulta";
import { pantallaConsultaTurnos } from "./formularios/consultaTurnos";
import { pantallaConsultaDetalle } from "./formularios/consultaDetalle";
import { pantallaConsultaDetalleMsg } from "./formularios/consultaDetalleMsg";

const QUEPANTALLA = "ui.timeStampPantalla";
export class viewManager extends connect(store, QUEPANTALLA)(LitElement) {
    constructor() {
        super();
        this.current = "IKE-Mascotas";
    }

    static get styles() {
        return css`
        :host{
            display: grid;                 
            grid-gap:1rem;
             height:100vh;
            width: 100vw;
            padding:0;
            background-color:var(--color-gris-claro);
        }
        #splash{
            align-self: top;
            height: 100%;
            width: 100%;
          }
        `;
    }
    render() {
        return html`
        <pantalla-splash id='splash'></pantalla-splash>
        <pantalla-onboarding id="onboarding"></pantalla-onboarding>
        <pantalla-iniciosesion id="iniciosesion"></pantalla-iniciosesion>
        <pantalla-recuperaclave id="recuperaclave"></pantalla-recuperaclave>
        <pantalla-recuperaclavemsg id="recuperaclavemsg"></pantalla-recuperaclavemsg>
        <pantalla-crearclave id="crearclave"></pantalla-crearclave>
        <pantalla-crearclavemsg id="crearclavemsg"></pantalla-crearclavemsg>
        <pantalla-accesoplan id="accesoplan"></pantalla-accesoplan>
        <pantalla-vercobertura id="vercobertura"></pantalla-vercobertura>
        <pantalla-usuarioregistro id="usuarioregistro"></pantalla-usuarioregistro>
        <pantalla-plandetalle id="plandetalle"></pantalla-plandetalle>
        <pantalla-principal id="principal"></pantalla-principal>
        <pantalla-usuariodetalle id="usuariodetalle"></pantalla-usuariodetalle>
        <pantalla-mascota id="mascota"></pantalla-mascota>
        <pantalla-misconsultas id="misconsultas"></pantalla-misconsultas>
        <pantalla-calendario id="calendario"></pantalla-calendario>
        <pantalla-fotogaleria id="fotogaleria"></pantalla-fotogaleria>
        <pantalla-fotover id="fotover"></pantalla-fotover>
        <pantalla-video id="video"></pantalla-video>
        <pantalla-videocalificacion id="videocalificacion"></pantalla-videocalificacion>
        <pantalla-videodetalle id="videodetalle"></pantalla-videodetalle>
        <pantalla-clavemodificar id="clavemodificar"></pantalla-clavemodificar>
        <pantalla-clavemodificarmsg id="clavemodificarmsg"></pantalla-clavemodificarmsg>
        <pantalla-plancontrata id="plancontrata"></pantalla-plancontrata>
        <pantalla-notificacion id="notificacion"></pantalla-notificacion>
        <pantalla-vacuna id="vacuna"></pantalla-vacuna>
        <pantalla-vacunamsg id="vacunamsg"></pantalla-vacunamsg>
        <pantalla-mascotaalta accion="ALTA" id="mascotaalta"></pantalla-mascotaalta>
        <pantalla-mascotaalta accion="UPDATE" id="mascotaedit"></pantalla-mascotaalta>
        <pantalla-mascotaaltamsg id="mascotaaltamsg"></pantalla-mascotaaltamsg>
        <pantalla-mascotaver id="mascotaver"></pantalla-mascotaver>
        <pantalla-consulta id="consulta"></pantalla-consulta>
        <pantalla-consultaturnos id="consultaturnos"></pantalla-consultaturnos>
        <pantalla-consultadetalle id="consultadetalle"></pantalla-consultadetalle>
        <pantalla-consultadetallemsg id="consultadetallemsg"></pantalla-consultadetallemsg>
        `
    }

    stateChanged(state, name) {
        if (name == QUEPANTALLA) {
            if (this.shadowRoot.children.length > 0) {
                this.shadowRoot.querySelector("#splash").hidden = state.ui.quePantalla != "splash";
                this.shadowRoot.querySelector("#onboarding").hidden = state.ui.quePantalla != "onboarding";
                this.shadowRoot.querySelector("#iniciosesion").hidden = state.ui.quePantalla != "iniciosesion";
                this.shadowRoot.querySelector("#recuperaclave").hidden = state.ui.quePantalla != "recuperaclave";
                this.shadowRoot.querySelector("#recuperaclavemsg").hidden = state.ui.quePantalla != "recuperaclavemsg";
                this.shadowRoot.querySelector("#crearclave").hidden = state.ui.quePantalla != "crearclave";
                this.shadowRoot.querySelector("#crearclavemsg").hidden = state.ui.quePantalla != "crearclavemsg";
                this.shadowRoot.querySelector("#accesoplan").hidden = state.ui.quePantalla != "accesoplan";
                this.shadowRoot.querySelector("#vercobertura").hidden = state.ui.quePantalla != "vercobertura";
                this.shadowRoot.querySelector("#usuarioregistro").hidden = state.ui.quePantalla != "usuarioregistro";
                this.shadowRoot.querySelector("#plandetalle").hidden = state.ui.quePantalla != "plandetalle";
                this.shadowRoot.querySelector("#principal").hidden = state.ui.quePantalla != "principal";
                this.shadowRoot.querySelector("#usuariodetalle").hidden = state.ui.quePantalla != "usuariodetalle";
                this.shadowRoot.querySelector("#mascota").hidden = state.ui.quePantalla != "mascota";
                this.shadowRoot.querySelector("#misconsultas").hidden = state.ui.quePantalla != "misconsultas";
                this.shadowRoot.querySelector("#calendario").hidden = state.ui.quePantalla != "calendario";
                this.shadowRoot.querySelector("#fotogaleria").hidden = state.ui.quePantalla != "fotogaleria";
                this.shadowRoot.querySelector("#fotover").hidden = state.ui.quePantalla != "fotover";
                this.shadowRoot.querySelector("#video").hidden = state.ui.quePantalla != "video";
                this.shadowRoot.querySelector("#videocalificacion").hidden = state.ui.quePantalla != "videocalificacion";
                this.shadowRoot.querySelector("#videodetalle").hidden = state.ui.quePantalla != "videodetalle";
                this.shadowRoot.querySelector("#clavemodificar").hidden = state.ui.quePantalla != "clavemodificar";
                this.shadowRoot.querySelector("#clavemodificarmsg").hidden = state.ui.quePantalla != "clavemodificarmsg";
                this.shadowRoot.querySelector("#plancontrata").hidden = state.ui.quePantalla != "plancontrata";
                this.shadowRoot.querySelector("#notificacion").hidden = state.ui.quePantalla != "notificacion";
                this.shadowRoot.querySelector("#vacuna").hidden = state.ui.quePantalla != "vacuna";
                this.shadowRoot.querySelector("#vacunamsg").hidden = state.ui.quePantalla != "vacunamsg";
                this.shadowRoot.querySelector("#mascotaalta").hidden = state.ui.quePantalla != "mascotaalta";
                this.shadowRoot.querySelector("#mascotaaltamsg").hidden = state.ui.quePantalla != "mascotaaltamsg";
                this.shadowRoot.querySelector("#mascotaver").hidden = state.ui.quePantalla != "mascotaver";
                this.shadowRoot.querySelector("#mascotaedit").hidden = state.ui.quePantalla != "mascotaedit";
                this.shadowRoot.querySelector("#consulta").hidden = state.ui.quePantalla != "consulta";
                this.shadowRoot.querySelector("#consultaturnos").hidden = state.ui.quePantalla != "consultaturnos";
                this.shadowRoot.querySelector("#consultadetalle").hidden = state.ui.quePantalla != "consultadetalle";
                this.shadowRoot.querySelector("#consultadetallemsg").hidden = state.ui.quePantalla != "consultadetallemsg";
            }
        }

        this.update();
    }

    static get properties() {
        return {
            mediaSize: {
                type: String,
                reflect: true,
                attribute: 'media-size'

            }
        }
    }
}
window.customElements.define("view-manager", viewManager);