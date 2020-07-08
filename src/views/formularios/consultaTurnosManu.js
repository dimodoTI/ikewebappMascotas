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
import {
    modoPantalla,
    cancelarTimer
} from "../../redux/actions/ui";
import {
    idiomas
} from "../../redux/datos/idiomas"
import {
    AGENDA,
    HISTORIAL
} from "../../../assets/icons/icons"
import {
    cabecera1
} from "../css/cabecera1"
import {
    pieComponente
} from "../componentes/pie"

import {
    proxima
} from "../css/proxima"


const MODO_PANTALLA = "ui.timeStampPantalla"
export class pantallaConsultaTurnosManu extends connect(store, MODO_PANTALLA)(LitElement) {
    constructor() {
        super();

        this.idioma = "ES"
        this.titulo = "titulo"
        this.leyenda = "Leyenda"

        this.items = [{
                fecha: "20200524",
                atenciones: [{
                    hora: "16.00",
                }]

            },
            {
                fecha: "202005260",
                atenciones: []
            }

        ]

        this.items = [{
                fecha: "2020-05-24",
                hora: "16:00",
                idMascota: 1,
                Mascotas: {
                    Id: 1,
                    Nombre: "Ringo"
                },
                motivo: "Tos convulsa"
            },
            {
                fecha: "2020-05-24",
                hora: "16:00",
                idMascota: 2,
                Mascotas: {
                    Id: 2,
                    Nombre: "Collie"
                },
                motivo: "Orejas Infectadas"
            },
            {
                fecha: "2020-05-25",
                hora: "16:00",
                idMascota: 3,
                Mascotas: {
                    Id: 3,
                    Nombre: "Coqui"
                },
                motivo: "Renguea una pata"
            },
            {
                fecha: "2020-05-25",
                hora: "16:00",
                idMascota: 3,
                Mascotas: {
                    Id: 3,
                    Nombre: "Coqui"
                },
                motivo: "Renguea una pata"
            },
            {
                fecha: "2020-05-25",
                hora: "16:00",
                idMascota: 3,
                Mascotas: {
                    Id: 3,
                    Nombre: "Coqui"
                },
                motivo: "Renguea una pata"
            },
            {
                fecha: "2020-05-25",
                hora: "16:00",
                idMascota: 3,
                Mascotas: {
                    Id: 3,
                    Nombre: "Coqui"
                },
                motivo: "Renguea una pata"
            },
            {
                fecha: "2020-05-25",
                hora: "16:00",
                idMascota: 3,
                Mascotas: {
                    Id: 3,
                    Nombre: "Coqui"
                },
                motivo: "Renguea una pata"
            },
            {
                fecha: "2020-05-25",
                hora: "16:00",
                idMascota: 3,
                Mascotas: {
                    Id: 3,
                    Nombre: "Coqui"
                },
                motivo: "Renguea una pata"
            }

        ]

        this.dias = new Array();

        this.dias[0] = "Dom"
        this.dias[1] = "Lun"
        this.dias[2] = "Mar"
        this.dias[3] = "Mie"
        this.dias[4] = "Jue"
        this.dias[5] = "Vie"
        this.dias[6] = "Sab"
    }

    static get styles() {
        return css `
        ${cabecera1}
        ${proxima}

        :host{
            display: grid;
            background-color:var(--color-gris-fondo);
            height: 100%;
            width: 100%;   
            padding:0;
            margin:0;
            grid-template-rows: 19% 60% 12%;
        }

        :host([hidden]){
            display: none; 
        }

        .cuerpo{           
            display:grid
        }

        .contenedorLista{
            background-color:transparent;
            display:grid;
            grid-auto-flow:row;            
            padding-top:.84rem;
            
        }

        .tituloLista{
            display:grid;
            padding-left:0.84rem;
            color:var(--color-azul-oscuro);
            font-size:var(--font-header-h2-size);
            font-weight:var(--font-header-h2-weight);
            text-justify:left;
            background-color:transparent;
            padding-bottom:.84rem;
           
        }

        .row{
            display:grid;
            grid-auto-flow:column;
            grid-template-columns:1fr 5fr;
            color:var(--color-azul-oscuro);
            padding-bottom:.42rem;
            width:90%;
            padding-left:1.2rem;
        }
        .row .fecha{
            display:grid;
            grid-auto-flow:row;
            grid-template-rows:2fr ;
            align-self:center;
            background-color:transparent;
            padding-right:.42rem;
            justify-items:center;
        }

        .row .nroDia{
            font-size:var(--font-header-h1-size);
            font-weight:var(--font-header-h1-weight);
        }

        .row .dow{
            font-weight:var(--font-label-weight);
            font-size:var(--font-label-size);
        }

        .row .agenda{
            display:grid;
            grid-template-rows:1f 1f;
            background-color:var(--color-celeste-muy-claro);
            border: 1px solid var(-color-celeste-claro);
            padding-left:.42rem;
            width:100%;
            border-radius:.3rem;
            font-size:var(--font-label-size);
            font-weight:var(--font-label-weight);
        }

        .row .paciente{
            display:grid;
            grid-template-columns:auto 1fr ;
        }
       `
    }
    render() {
        return html `

            <div id="header">
                <div id="bar">
                    <div id="lblTitulo">${this.titulo}</div>
                </div>
                <div id="lblLeyenda">${this.leyenda}</div>
            </div>       

            <div id="cuerpo" class="cuerpo" style="padding-top:.84rem">
                <div class="proxima">
                    <div>
                        Consulta
                    </div>
                    <div style="text-align:right;text-decoration:underline;padding-right:.8rem">
                        Ingresar
                    </div>
                </div>


                <div class="contenedorLista">
                    <div class="tituloLista">
                        Lista
                    </div>
                    <div style="overflow-y:auto;height:80%">
                        ${this.items.map((item) => {
            return html`
                        <div class="row" .item=${item} @click=${this.editar}>
                            <div class="fecha">
                                <div class="nroDia">${this.nroDia(item.fecha)}</div>
                                <div class="dow">${this.dow(item.fecha)}</div>
                            </div>

                            <div class="agenda">
                                <div>${item.hora + " hs"}</div>
                                <div class="paciente">
                                    <div style="padding-right:.7rem">${item.Mascotas.Nombre}</div>
                                    <div>${" - " + item.motivo}</div>
                                </div>
                            </div>
                        </div>`})}                                              
                    </div>
                </div>
            </div>

            <div>
                <pie-componente  id="footer" opcion="dos"></pie-componente>
            </div>

        `
    }


    nroDia(fecha) {
        let d = new Date(fecha)
        return d.getDate() + 1
    }
    dow(fecha) {
        let d = new Date(fecha);
        let dia = d.getDay()
        return this.dias[dia]
    }

    editar(e) {
        return true
    }
    stateChanged(state, name) {
        if (name == MODO_PANTALLA && state.ui.quePantalla == "agenda") {
            store.dispatch(cancelarTimer())


        }
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
window.customElements.define("pantalla-consultaturnosmanu", pantallaConsultaTurnosMenu);