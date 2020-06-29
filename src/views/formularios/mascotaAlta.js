import {
    html,
    LitElement,
    css,
    TemplateResult
} from "lit-element";
import {
    store
} from "../../redux/store";
import {
    connect
} from "@brunomon/helpers";
import {
    idiomas
} from "../../redux/datos/idiomas"
import {
    button
} from "../css/button"
import {
    ikeInput
} from "../css/ikeInput"
import {
    cabecera1
} from "../css/cabecera1"
import {
    select
} from "../css/select"
import {
    modoPantalla
} from "../../redux/actions/ui";
import {
    ATRAS,
    CAMARA,
    CAMARAROLLO
} from "../../../assets/icons/icons"
import {
    mediaConMenu01
} from "../css/mediaConMenu01"

import {
    add as addMascotas,
    patch as patchMascotas
} from "../../redux/actions/mascotas"




const MASCOTAS_EDIT = "mascotas.editTimeStamp"
const MASCOTASTIPO_TIMESPAM = "mascotastipo.timeStamp"
const RAZAS_TIMESTAMP = "razas.timeStamp"
const FOTOS_TIMESTAMP = "fotos.timeStamp"

export class pantallaMascotaAlta extends connect(store, MASCOTAS_EDIT, MASCOTASTIPO_TIMESPAM, RAZAS_TIMESTAMP, FOTOS_TIMESTAMP)(LitElement) {
    constructor() {
        super();
        this.hidden = true
        this.idioma = "ES"
        this.item = []
        this.razas = []
        this.mascotasTipo = [];
        this.modo = ""
    }

    static get styles() {
        return css `
        ${ikeInput}
        ${button}
        ${cabecera1}
        ${select}
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
        :host([media-size="small"]) #gridContenedor{
            grid-row-start:1;
            grid-row-end:3;
        }
        #cuerpo{
            background-color: transparent;
            display:grid;
            padding:1rem;
            grid-auto-flow:row;
            grid-gap:.5rem;
            overflow-y: auto; 
            overflow-x: hidden; 
        }
        #cuerpo::-webkit-scrollbar {
            display: none;
        }
        :host(:not([media-size="small"])) #cuerpo{
            width:65%;
            justify-self:center;
        }
        #foto{
            display:grid;
            height: calc(60vw - 2rem);
            width: 100%;
            background-color: var(--color-gris-claro);
            border-radius: .5rem;
            overflow-y: hidden;
           justify-content: center;
           position: relative;
        }
        #fotoBoton{
            position:absolute;
            width: 6rem;
            align-self: flex-end;
            justify-self: end;
          
            bottom:.5rem;
            right:.5rem;
        }
        #divTapa{
            display:none;
            position:absolute;
            height:100vh;
            width: 100vw;
            background-color:var(--color-negro);
            opacity:.6;
            z-index:10;
        }
        #divMensaje{
            position:absolute;
            display:none;
            bottom:1rem;
            grid-template-rows: 70% 30%;
            grid-gap: .5rem;
            height:30%;
            width: 100%;
            background-color:transparent;
            font-size: var(--font-header-h1-size);
            font-weight: var(--font-header-h1-weight);
            z-index:12;
        }
        #divMensaje1{
            position:relative;
            display:grid;
            grid-template-rows: 49.5% 1% 49.5%;
            grid-template-columns: 20% 80%;
            border: 2px solid var(--color-gris-oscuro);
            grid-gap: 0;
            height:100%;
            width:95%;
            justify-self: center;
            background-color:var(--color-gris-claro);
            border-radius: 1rem;
            opacity:1;
            cursor: pointer;
        }        
        #divMensaje2{
            position:relative;
            display:grid;
            border: 2px solid var(--color-gris-oscuro);
            grid-gap: .5rem;
            height:100%;
            width:95%;
            justify-self: center;
            background-color:var(--color-blanco);
            border-radius: 1rem;
            justify-content: center;
            align-content: center;
            color: var(--color-azul);
            cursor: pointer;
        }
        #divMsj1Linea1Col1{
            display:grid;
        }
        #divMsj1Linea1Col1 svg{
            fill: var(--color-azul);
            stroke: var(--color-azul);
            width: 40%;
            justify-self: center;
        }
        #divMsj1Linea1Col2{
            display:grid;
            color: var(--color-gris-oscuro);
            align-items: center;
        }
        #divMsj1Linea2{
            grid-column-start:1;
            grid-column-end:3;
            background-color:var(--color-gris);
            opacity:.6;
        }
        #divMsj1Linea3Col1{
            display:grid;
        }
        #divMsj1Linea3Col1 svg{
            fill: var(--color-azul);
            width: 40%;
            justify-self: center;
        }
        #divMsj1Linea3Col2{
            display:grid;
            color: var(--color-gris-oscuro);
            align-items: center;
        }
        #pie{
            position:relative;
            grid-area: Pie; 
            display:grid;
            overflow-x: none; 
        }
        :host([media-size="small"]) #pie{
            display:none;
        }
        `
    }
    render() {
        return html `
        <div id="gridContenedor">
            <div id="header">        
                <div id="bar">
                    <div @click=${this.clickAtras}>${ATRAS}</div>
                    <div id="lblTitulo">${this.modo == "A"
                ? idiomas[this.idioma].mascotaalta.titulo : idiomas[this.idioma].mascotaedit.titulo}
                    </div>
                </div>
                <div id="lblLeyenda">${this.modo == "A"
                ? idiomas[this.idioma].mascotaalta.leyenda : idiomas[this.idioma].mascotaedit.leyenda}
                </div>
            </div>
            <div id="cuerpo">
                <div id="foto" >
                    <img src="" id = "fotoMascota">
                    <button id="fotoBoton" btn3 @click=${this.clickFoto}>${this.modo == "A"
                ? idiomas[this.idioma].mascotaalta.btn1 : idiomas[this.idioma].mascotaedit.btn1}
                    </button>
                </div>
                
                
                <div id="selectMascota" class="select" style="width:100%;height:3.4rem" > 
                    <label >${idiomas[this.idioma].mascotaalta.mascota}</label>
                    <select style="width:100%;height:1.7rem; color:black" id="mascota"  @change="${this.cambioTipo}" > 
                        <option  value="0">Elija Tipo de Mascota</option>                          
                        ${this.mascotasTipo.map((p)=>{
                            return html `
                            <option style="color:black" .selected="${this.item.Raza.idMascotasTipo==p.Id}" value="${p.Id}">${p.Descripcion}</option>
                             `}
                                )}

                    </select>
                       
                </div> 


                <div class="ikeInput">
                    <label id="lblNombre">${idiomas[this.idioma].mascotaalta.nombre}</label>
                    <input id="txtNombre"   placeholder=${idiomas[this.idioma].mascotaalta.nombre_ph} .value="${this.item.Nombre}">
                    <label id="lblErrorNombre" error oculto>"Nombre Erroneo"</label>
                </div>

                <div class="ikeInput">
                    <label id="lblFecha">${idiomas[this.idioma].mascotaalta.fecha}</label>
                    <input id="txtFecha"  type="date" placeholder=${idiomas[this.idioma].mascotaalta.fecha_ph}  .value="${this.item.FechaNacimiento?this.item.FechaNacimiento.substr(0,10):""}">
                    <label id="lblErrorFecha" error oculto>"Fecha Erroneo"</label>
                </div>


                <div  class="select" style="width:100%;height:3.4rem"> 
                    <label >${idiomas[this.idioma].mascotaalta.raza}</label>
                    <select id="selectRaza" style="width:100%;height:1.7rem;"  >          
                    ${this.razas.map((p)=>{
                            return html `
                            <option style="color:black" .selected="${this.item.idRaza==p.Id}" value="${p.Id}">${p.Descripcion}</option>
                             `}
                                )}                      
                    </select>
                </div>  

   
                <button style="width:95%;height:2rem;justify-self: center;" id="btn-recuperar" btn1 @click=${this.clickGrabar}>
                    ${this.modo == "A"
                ? idiomas[this.idioma].mascotaalta.btn2 : idiomas[this.idioma].mascotaedit.btn2}
                </button>
                <div style="height:1rem"></div>
            </div>
            <div id="divTapa">
            </div>
            <div id="divMensaje">
                <div id=divMensaje1>
                    <div style="display:grid;grid-auto-flow:column" @click="${this.abreFoto}">
                        <div id="divMsj1Linea1Col1">
                            ${CAMARA}
                        </div>
                        <div id="divMsj1Linea1Col2">
                            ${idiomas[this.idioma].mascotaalta.btnCamara}
                        </div>
                    </div>
                    <div id="divMsj1Linea2">
                    </div>
                    <div id="divMsj1Linea3Col1">
                        ${CAMARAROLLO}
                    </div>
                    <div id="divMsj1Linea3Col2">
                    ${idiomas[this.idioma].mascotaalta.btnImagen}
                </div>
                </div>
                <div id=divMensaje2 @click=${this.clickCancelar}>
                    ${idiomas[this.idioma].mascotaalta.btnCancelar}
                </div>
            </div>
        </div>
        <pie-componente id="pie" opcion="cinco" media-size="${this.mediaSize}">
        </pie-componente>
    `
    }

    clickAtras() {
        store.dispatch(modoPantalla(store.getState().ui.pantallaQueLLamo, store.getState().ui.quePantalla))
    }
    clickFoto() {
        this.shadowRoot.querySelector("#divTapa").style.display = "grid";
        this.shadowRoot.querySelector("#divMensaje").style.display = "grid";
    }

    abreFoto() {
        store.dispatch(modoPantalla("fotos", "mascotaalta"))
    }
    clickCancelar() {
        this.shadowRoot.querySelector("#divTapa").style.display = "none";
        this.shadowRoot.querySelector("#divMensaje").style.display = "none";
    }

    asignarValores(olditem) {
        let item = {
            ...olditem
        }
        item.Nombre = this.shadowRoot.querySelector("#txtNombre").value
        item.FechaNacimiento = this.shadowRoot.querySelector("#txtFecha").value
        item.idRaza = this.shadowRoot.querySelector("#selectRaza").value
        item.idUsuario = store.getState().cliente.datos.id
        item.Foto = store.getState().fotos.foto
        item.Activo = true

        delete item.Raza

        return item
    }

    generaPathch(olditem) {
        let item = {
            ...olditem
        }

        let datosPatch = [{
                "op": "replace",
                "path": "/Nombre",
                "value": this.shadowRoot.querySelector("#txtNombre").value
            },
            {
                "op": "replace",
                "path": "/FechaNacimiento",
                "value": this.shadowRoot.querySelector("#txtFecha").value
            },
            {
                "op": "replace",
                "path": "/idRaza",
                "value": this.shadowRoot.querySelector("#selectRaza").value
            },
            {
                "op": "replace",
                "path": "/Foto",
                "value": store.getState().fotos.foto
            }
        ]
        return datosPatch

    }




    clickGrabar() {


        if (this.modo == "A") {
            store.dispatch(addMascotas(this.asignarValores(this.item), store.getState().cliente.datos.token))
        } else {
            store.dispatch(patchMascotas(this.item.Id, this.generaPathch(this.item), store.getState().cliente.datos.token))
        }

        store.dispatch(modoPantalla("mascotaaltamsg"));
        //            }
        //       }
    }


    stateChanged(state, name) {
        if (name == MASCOTASTIPO_TIMESPAM || name == RAZAS_TIMESTAMP) {
            if (state.mascotastipo.entities && state.razas.entities) {


                this.update()
            }
        }

        if (name == FOTOS_TIMESTAMP && state.fotos.quien == "mascota") {
            const foto = this.shadowRoot.querySelector("#fotoMascota")
            foto.src = state.fotos.foto
        }


        if (name == MASCOTAS_EDIT) {
            this.mascotasTipo = [...state.mascotastipo.entities]
            this.razas = [...state.razas.entities]
            this.modo = state.mascotas.modo

            this.item = state.mascotas.entities.currentItem





            this.update()
        }

    }

    cambioTipo(e) {

        this.razas = store.getState().razas.entities.filter(r => r.idMascotasTipo == parseInt(e.currentTarget.value, 10))
        this.update()
    }



    static get properties() {
        return {
            hidden: {
                type: Boolean,
                reflect: true
            },
            accion: {
                type: String,
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

window.customElements.define("pantalla-mascotaalta", pantallaMascotaAlta);