import {} from "../css/main.css"
import {} from "../css/media.css"
import {} from "../css/quicksand.css"
import {} from "../css/fontSizes.css"
import {} from "../css/colors.css"
import {} from "../css/shadows.css"
import {} from "../css/imagenes.css"
import {
    store
} from "../src/redux/store"
import {
    viewManager
} from "./views/manager"
import {
    modoPantalla,
    captureMedia
} from "./redux/actions/ui";

import {
    get as getPublicidad
} from "./redux/actions/publicidad";

import {
    get as getReserva
} from "./redux/actions/reserva";
import {
    login,
    recupero,
    renovacion,
    logon,
    updateProfile
} from "./redux/actions/autorizacion"
import {
    patch,
    add,
    remove,
    get as getUsuario
} from "./redux/actions/usuario"

import {
    patch as patchMascotas,
    add as addMascotas,
    remove as removeMascotas,
    get as getMascotas,
    update as updateMascotas
} from "./redux/actions/mascotas"

import {

    get as getMascotasTipo,

} from "./redux/actions/mascotasTipo"

import {

    get as getRazas,

} from "./redux/actions/razas"

import {
    getParameterByName
} from "./libs/helpers"

import {
    get as getPublicaciones
} from "./redux/actions/publicacion"

import {
    get as getCalendario
} from "./redux/actions/calendario"

import {
    get as getVacunas
} from "./redux/actions/vacunas"


store.dispatch(captureMedia())
if (getParameterByName("ticket")) {
    store.dispatch(modoPantalla("crearclave"))
} else {
    store.dispatch(modoPantalla("splash"))
}
store.dispatch(getReserva())

store.dispatch(getRazas({
    orderby: "idMascotasTipo,Descripcion"
}))
store.dispatch(getMascotasTipo({
    orderby: "Descripcion"
}))

store.dispatch(getPublicaciones({}))

store.dispatch(getCalendario({
    expand: "MascotasTipo, Vacuna"

}))


store.dispatch(getVacunas({}))





/* ---- Razas -----------*/
// store.dispatch(getRazas())
// store.dispatch(getRazas(1))

/* store.dispatch(addRazas({
    "idMascotasTipo": 1,
    "Descripcion": "Callejero",
    "Activo": true
})) */


/* store.dispatch(patchRazas(5, [{
        "op": "replace",
        "path": "/Descripcion",
        "value": "Gato Callejero"
    },
    {
        "op": "replace",
        "path": "/idMascotasTipo",
        "value": 2
    }
])) */

/* store.dispatch(updateRazas(6, {
    "Id": 6,
    "idMascotasTipo": 2,
    "descripcion": "Cabeza de termo",
    "activo": true
})) */

//store.dispatch(removeRazas(6))

/*-------Fin de Razas---------*/

/*-------MascotasTipo---------*/
//store.dispatch(getMascotastipo())
//store.dispatch(getMascotastipo(1))

/* store.dispatch(addMascotasTipo({

    "Descripcion": "Vaca",
    "Activo": true
})) */

/* store.dispatch(patchMascotasTipo(6, [{
        "op": "replace",
        "path": "/Descripcion",
        "value": "Vaca Voladora"
    },
    {
        "op": "replace",
        "path": "/Activo",
        "value": false
    }
])) */


/* store.dispatch(updateMascotasTipo(6, {
    "Id": 6,
    "descripcion": "Vaquita de San Antonio",
    "activo": true
})) */

// store.dispatch(removeMascotasTipo(6))

/*----------Fin MascotasTipo---------- */

/*----------Mascotas------------------*/

//store.dispatch(getMascotas())
//store.dispatch(getMascotas(2))
/* store.dispatch(addMascotas({
    "idUsuario": 2,
    "idRaza": 1,
    "Nombre": "Sultan",
    "FechaNacimiento:": "2001-01-01T00:00:00",
    "Foto:": "",
    "Activo": true
})) */

/* store.dispatch(patchMascotas(4, [{
        "op": "replace",
        "path": "/Nombre",
        "value": "Tom"
    },
    {
        "op": "replace",
        "path": "/Activo",
        "value": true
    },
    {
        "op": "replace",
        "path": "/idRaza",
        "value": 2
    }
])) */

/* store.dispatch(updateMascotas(2, {
    "id": 2,
    "idUsuario": 2,
    "idRaza": 1,
    "nombre": "Boby",
    "fechaNacimiento": "2001-01-01T00:00:00",
    "foto": null,
    "activo": true
}))
 */

// store.dispatch(removeMascotas(4))
/*-------------Fin Mascotas ---------------*/


//store.dispatch(login("yo@yo.yo", "administrador"))

//store.dispatch(recupero("yo@yo.yo"))

//store.dispatch(renovacion("eb6c5d8a-cd85-46b9-b0fd-d37614d09c05", "admin"))

// traer un usuario
//store.dispatch(getUsuario(2, "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjIiLCJyb2xlIjoiQWRtaW4iLCJuYmYiOjE1OTE2NjA0NTcsImV4cCI6MTU5MTY2NTg1NywiaWF0IjoxNTkxNjYwNDU3fQ.OeQTzYSxHZ2AH5hsmNLAgNbDO3GvB9rB0U4YlYmOikI"))

// traer todos los usuarios
//store.dispatch(getUsuario(null, "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjIiLCJyb2xlIjoiQWRtaW4iLCJuYmYiOjE1OTE2NjA0NTcsImV4cCI6MTU5MTY2NTg1NywiaWF0IjoxNTkxNjYwNDU3fQ.OeQTzYSxHZ2AH5hsmNLAgNbDO3GvB9rB0U4YlYmOikI"))

/* store.dispatch(patch(2, [{
    "op": "replace",
    "path": "/Perfil",
    "value": "Admin"
}], "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjIiLCJyb2xlIjoiQWRtaW4iLCJuYmYiOjE1OTE2NTg5NjksImV4cCI6MTU5MTY2NDM2OSwiaWF0IjoxNTkxNjU4OTY5fQ.I1HnLkt6f-iUD9aGEmLyFTtPNjoQU5M6LkzamiAsLbg")) */

/* store.dispatch(add({
    "nombre": "cliente",
    "apellido": "nuevo",
    "email": "cliente@ike.com",
    "perfil": "Cliente"
}, "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjIiLCJyb2xlIjoiQWRtaW4iLCJuYmYiOjE1OTE2NTg5NjksImV4cCI6MTU5MTY2NDM2OSwiaWF0IjoxNTkxNjU4OTY5fQ.I1HnLkt6f-iUD9aGEmLyFTtPNjoQU5M6LkzamiAsLbg")) */

/* store.dispatch(remove(3, "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjIiLCJyb2xlIjoiQWRtaW4iLCJuYmYiOjE1OTE2NTg5NjksImV4cCI6MTU5MTY2NDM2OSwiaWF0IjoxNTkxNjU4OTY5fQ.I1HnLkt6f-iUD9aGEmLyFTtPNjoQU5M6LkzamiAsLbg")) */

// store.dispatch(logon("Cliente", "Logon" , "cliente@ike.com", 20257844) )

//store.dispatch(updateProfile("Cliente", "Perez", 20257844, "", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjciLCJyb2xlIjoiQ2xpZW50ZSIsIm5iZiI6MTU5MTczMDI1OCwiZXhwIjoxNTkxNzM1NjU4LCJpYXQiOjE1OTE3MzAyNTh9.HXdFivKO2I0U0Ty2v1uz6NvzYjB03_aAwvxTs8t_Kww"))