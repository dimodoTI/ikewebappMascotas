import {
  ODataEntity,
  ODataFetchFactory
} from "@brunomon/odata-fetch-factory"

import {
  fetchFactory
} from "../libs/fetchFactory"

const mascotasDomain = "http://64.227.109.20:8081"

const webApiUsuarios = "http://64.227.109.20:8080/api"

const webApiMascotas = mascotasDomain + "/api"
const OdataMascotas = ODataFetchFactory({
  fetch: fetch,
  domain: mascotasDomain
})



export const ikeUsuarioFetch = fetchFactory(webApiUsuarios, "Usuario")
export const ikeLoginFetch = fetchFactory(webApiUsuarios, "Autorizacion/login")
export const ikeRenovacionFetch = fetchFactory(webApiUsuarios, "Autorizacion/renovacion")
export const ikeRecuperoFetch = fetchFactory(webApiUsuarios, "Autorizacion/recupero")
export const ikeLogonFetch = fetchFactory(webApiUsuarios, "Autorizacion/logon")
export const ikeUpdateProfileFetch = fetchFactory(webApiUsuarios, "Autorizacion/updateProfile")

export const ikeMascotas = fetchFactory(webApiMascotas, "Mascotas")


export const ikeMascotasQuery = ODataEntity(OdataMascotas, "MascotasQuery")
export const ikeMascotasTipoQuery = ODataEntity(OdataMascotas, "MascotasTipoQuery")
export const ikeRazasQuery = ODataEntity(OdataMascotas, "RazasQuery")