import {
  ODataEntity,
  ODataFetchFactory
} from "@brunomon/odata-fetch-factory"

import {
  fetchFactory
} from "../libs/fetchFactory"

const mascotasDomain = "http://64.227.109.20:8081"

const publicacionesDomain = "http://64.227.109.20:8082"

const webApiUsuarios = "http://64.227.109.20:8080/api"



const webApiMascotas = mascotasDomain + "/api"
const OdataMascotas = ODataFetchFactory({
  fetch: fetch,
  domain: mascotasDomain
})
const OdataPublicaciones = ODataFetchFactory({
  fetch: fetch,
  domain: publicacionesDomain
})


export const ikeUsuarioFetch = fetchFactory(webApiUsuarios, "Usuario")
export const ikeLoginFetch = fetchFactory(webApiUsuarios, "Autorizacion/login")
export const ikeRenovacionFetch = fetchFactory(webApiUsuarios, "Autorizacion/renovacion")
export const ikeRecuperoFetch = fetchFactory(webApiUsuarios, "Autorizacion/recupero")
export const ikeLogonFetch = fetchFactory(webApiUsuarios, "Autorizacion/logon")
export const ikeUpdateProfileFetch = fetchFactory(webApiUsuarios, "Autorizacion/updateProfile")

export const ikeMascotas = fetchFactory(webApiMascotas, "Mascotas")
export const ikeConfiguracion = fetchFactory(webApiMascotas, "Configuracion")
export const ikePuestos = fetchFactory(webApiMascotas, "Puestos")
export const ikeTramos = fetchFactory(webApiMascotas, "Tramos")
export const ikeReservas = fetchFactory(webApiMascotas, "Reservas")
export const ikeAtenciones = fetchFactory(webApiMascotas, "Atenciones")

export const ikeMascotasQuery = ODataEntity(OdataMascotas, "MascotasQuery")
export const ikeMascotasTipoQuery = ODataEntity(OdataMascotas, "MascotasTipoQuery")
export const ikeRazasQuery = ODataEntity(OdataMascotas, "RazasQuery")
export const ikeConfiguracionQuery = ODataEntity(OdataMascotas, "ConfiguracionQuery")
export const ikePuestosQuery = ODataEntity(OdataMascotas, "PuestosQuery")
export const ikeTramosQuery = ODataEntity(OdataMascotas, "TramosQuery")
export const ikeReservasQuery = ODataEntity(OdataMascotas, "ReservasQuery")
export const ikeAtencionesQuery = ODataEntity(OdataMascotas, "AtencionesQuery")

export const ikeOdataPublicaciones = ODataEntity(OdataPublicaciones, "PublicacionesQuery")