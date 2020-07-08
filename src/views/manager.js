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

import {
    cabecera3Componente
} from "../views/componentes/cabecera3Componente";
import {
    marquesinaComponente
} from "../views/componentes/marquesina";
import {
    pieComponente
} from "../views/componentes/pie";

import {
    pantallaSplash
} from "../views/formularios/splash";
import {
    pantallaOnboarding
} from "../views/formularios/onboarding";
import {
    pantallaInicioSesion
} from "../views/formularios/iniciosesion";
import {
    pantallaRecuperaClave
} from "../views/formularios/recuperaclave";
import {
    pantallaRecuperaClaveMesg
} from "../views/formularios/recuperaclavemsg";
import {
    pantallaCrearClave
} from "../views/formularios/crearclave";
import {
    pantallaCrearClaveMsg
} from "../views/formularios/crearclavemsg";
import {
    pantallaAccespPlan
} from "../views/formularios/accesoplan";
import {
    pantallaVErCobertuta
} from "../views/formularios/vercobertura";
import {
    pantallaUsuarioRegistro
} from "../views/formularios/usuarioRegistro";
import {
    pantallaPlanDetalle
} from "../views/formularios/planDetalle";
import {
    pantallaPrincipal
} from "../views/formularios/principal";
import {
    pantallaUsuarioDetalle
} from "../views/formularios/usuarioDetalle";
import {
    pantallaMascota
} from "../views/formularios/mascota";
import {
    pantallaMisConsultas
} from "../views/formularios/misConsultas";
import {
    pantallaCalendario
} from "../views/formularios/calendario";
import {
    pantallaFotoGaleria
} from "../views/formularios/fotoGaleria";
import {
    pantallaFotoVer
} from "../views/formularios/fotoVer";
import {
    pantallaVideo
} from "../views/formularios/video";
import {
    pantallaVideoCalificacion
} from "../views/formularios/videoCalificacion";
import {
    pantallaVideoDetalle
} from "../views/formularios/videoDetalle";
import {
    pantallarClaveModificar
} from "../views/formularios/claveModificar";
import {
    pantallarClaveModificarMsg
} from "./formularios/claveModificarMsg";
import {
    pantallaPlanContrata
} from "./formularios/planContrata";
import {
    pantallaNotificacion
} from "./formularios/notificacion";
import {
    pantallaVacuna
} from "./formularios/vacuna";
import {
    pantallaVacunaMsg
} from "./formularios/vacunaMsg";
import {
    pantallaMascotaAlta
} from "./formularios/mascotaAlta";
import {
    pantallaMascotaAltaMsg
} from "./formularios/mascotaAltaMsg";
import {
    pantallaMascotaVer
} from "./formularios/mascotaVer";
import {
    pantallaConsulta
} from "./formularios/consulta";
import {
    pantallaConsultaTurnos
} from "./formularios/consultaTurnos";
import {
    pantallaConsultaDetalle
} from "./formularios/consultaDetalle";
import {
    pantallaConsultaDetalleMsg
} from "./formularios/consultaDetalleMsg";

import {
    fotosComponente
} from "../views/componentes/fotos"
const MEDIA_CHANGE = "ui.media.timeStamp"
const QUEPANTALLA = "ui.timeStampPantalla";
export class viewManager extends connect(store, MEDIA_CHANGE, QUEPANTALLA)(LitElement) {
    constructor() {
        super();
        this.current = "IKE-Mascotas";
    }

    static get styles() {
        return css `
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
            z-index:1
        }
        `
    }
    render() {
        return html `
        <pantalla-splash id="splash" media-size="${this.mediaSize}"></pantalla-splash>
        <pantalla-onboarding id="onboarding" media-size="${this.mediaSize}"></pantalla-onboarding>
        <pantalla-iniciosesion id="iniciosesion" media-size="${this.mediaSize}"></pantalla-iniciosesion>
        <pantalla-recuperaclave id="recuperaclave" media-size="${this.mediaSize}"></pantalla-recuperaclave>
        <pantalla-recuperaclavemsg id="recuperaclavemsg" media-size="${this.mediaSize}"></pantalla-recuperaclavemsg>
        <pantalla-crearclave id="crearclave" media-size="${this.mediaSize}"></pantalla-crearclave>
        <pantalla-crearclavemsg id="crearclavemsg" media-size="${this.mediaSize}"></pantalla-crearclavemsg>
        <pantalla-accesoplan id="accesoplan" media-size="${this.mediaSize}"></pantalla-accesoplan>
        <pantalla-vercobertura id="vercobertura" media-size="${this.mediaSize}"></pantalla-vercobertura>
        <pantalla-usuarioregistro id="usuarioregistro" media-size="${this.mediaSize}"></pantalla-usuarioregistro>
        <pantalla-plandetalle id="plandetalle" media-size="${this.mediaSize}"></pantalla-plandetalle>
        <pantalla-principal id="principal" media-size="${this.mediaSize}"></pantalla-principal>
        <pantalla-usuariodetalle id="usuariodetalle" media-size="${this.mediaSize}"></pantalla-usuariodetalle>
        <pantalla-mascota id="mascota" media-size="${this.mediaSize}"></pantalla-mascota>
        <pantalla-misconsultas id="misconsultas" media-size="${this.mediaSize}"></pantalla-misconsultas>
        <pantalla-calendario id="calendario" media-size="${this.mediaSize}"></pantalla-calendario>
        <pantalla-fotogaleria id="fotogaleria" media-size="${this.mediaSize}"></pantalla-fotogaleria>
        <pantalla-fotover id="fotover" media-size="${this.mediaSize}"></pantalla-fotover>
        <pantalla-video id="video" media-size="${this.mediaSize}"></pantalla-video>
        <pantalla-videocalificacion id="videocalificacion" media-size="${this.mediaSize}"></pantalla-videocalificacion>
        <pantalla-videodetalle id="videodetalle" media-size="${this.mediaSize}"></pantalla-videodetalle>
        <pantalla-clavemodificar id="clavemodificar" media-size="${this.mediaSize}"></pantalla-clavemodificar>
        <pantalla-clavemodificarmsg id="clavemodificarmsg" media-size="${this.mediaSize}"></pantalla-clavemodificarmsg>
        <pantalla-plancontrata id="plancontrata" media-size="${this.mediaSize}"></pantalla-plancontrata>
        <pantalla-notificacion id="notificacion" media-size="${this.mediaSize}"></pantalla-notificacion>
        <pantalla-vacuna id="vacuna" media-size="${this.mediaSize}"></pantalla-vacuna>
        <pantalla-vacunamsg id="vacunamsg" media-size="${this.mediaSize}"></pantalla-vacunamsg>
        <pantalla-mascotaalta accion="ALTA" id="mascotaalta" media-size="${this.mediaSize}"></pantalla-mascotaalta>
        <pantalla-mascotaalta accion="UPDATE" id="mascotaedit" media-size="${this.mediaSize}"></pantalla-mascotaalta>
        <pantalla-mascotaaltamsg id="mascotaaltamsg" media-size="${this.mediaSize}"></pantalla-mascotaaltamsg>
        <pantalla-mascotaver id="mascotaver" media-size="${this.mediaSize}"></pantalla-mascotaver>
        <pantalla-consulta id="consulta" media-size="${this.mediaSize}"></pantalla-consulta>
        <pantalla-consultaturnos id="consultaturnos" media-size="${this.mediaSize}"></pantalla-consultaturnos>
        <pantalla-consultadetalle id="consultadetalle" media-size="${this.mediaSize}"></pantalla-consultadetalle>
        <pantalla-consultadetallemsg id="consultadetallemsg" media-size="${this.mediaSize}"></pantalla-consultadetallemsg>
        <fotos-componente id="fotos" media-size="${this.mediaSize}"></fotos-componente>
        `
    }

    stateChanged(state, name) {
        if (name == QUEPANTALLA || name == MEDIA_CHANGE) {
            this.mediaSize = state.ui.media.size
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
                if (state.ui.quePantalla != "notificacion") {
                    this.shadowRoot.querySelector("#principal").hidden = state.ui.quePantalla != "principal";
                    this.shadowRoot.querySelector("#mascota").hidden = state.ui.quePantalla != "mascota";
                    this.shadowRoot.querySelector("#misconsultas").hidden = state.ui.quePantalla != "misconsultas";
                    this.shadowRoot.querySelector("#calendario").hidden = state.ui.quePantalla != "calendario";
                    this.shadowRoot.querySelector("#fotogaleria").hidden = state.ui.quePantalla != "fotogaleria";
                }
                this.shadowRoot.querySelector("#notificacion").hidden = state.ui.quePantalla != "notificacion";
                this.shadowRoot.querySelector("#usuariodetalle").hidden = state.ui.quePantalla != "usuariodetalle";
                this.shadowRoot.querySelector("#fotover").hidden = state.ui.quePantalla != "fotover";
                if (state.ui.quePantalla != "videocalificacion") {
                    this.shadowRoot.querySelector("#video").hidden = state.ui.quePantalla != "video";
                }
                this.shadowRoot.querySelector("#videocalificacion").hidden = state.ui.quePantalla != "videocalificacion";
                this.shadowRoot.querySelector("#videodetalle").hidden = state.ui.quePantalla != "videodetalle";
                this.shadowRoot.querySelector("#clavemodificar").hidden = state.ui.quePantalla != "clavemodificar";
                this.shadowRoot.querySelector("#clavemodificarmsg").hidden = state.ui.quePantalla != "clavemodificarmsg";
                this.shadowRoot.querySelector("#plancontrata").hidden = state.ui.quePantalla != "plancontrata";
                if (state.ui.quePantalla != "vacunamsg") {
                    this.shadowRoot.querySelector("#vacuna").hidden = state.ui.quePantalla != "vacuna";
                }
                this.shadowRoot.querySelector("#vacunamsg").hidden = state.ui.quePantalla != "vacunamsg";
                if (state.ui.quePantalla != "mascotaaltamsg") {
                    this.shadowRoot.querySelector("#mascotaalta").hidden = state.ui.quePantalla != "mascotaalta";
                    this.shadowRoot.querySelector("#mascotaedit").hidden = state.ui.quePantalla != "mascotaedit";
                }
                this.shadowRoot.querySelector("#mascotaaltamsg").hidden = state.ui.quePantalla != "mascotaaltamsg";
                this.shadowRoot.querySelector("#mascotaver").hidden = state.ui.quePantalla != "mascotaver";
                this.shadowRoot.querySelector("#consulta").hidden = state.ui.quePantalla != "consulta";
                this.shadowRoot.querySelector("#consultaturnos").hidden = state.ui.quePantalla != "consultaturnos";
                if (state.ui.quePantalla != "consultadetallemsg") {
                    this.shadowRoot.querySelector("#consultadetalle").hidden = state.ui.quePantalla != "consultadetalle";
                }
                this.shadowRoot.querySelector("#consultadetallemsg").hidden = state.ui.quePantalla != "consultadetallemsg";
                this.shadowRoot.querySelector("#fotos").hidden = state.ui.quePantalla != "fotos";
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