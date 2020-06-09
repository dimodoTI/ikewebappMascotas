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

store.dispatch(captureMedia())
store.dispatch(modoPantalla("splash"))
store.dispatch(getPublicidad())
store.dispatch(getReserva())


//store.dispatch(login("yo@yo.yo", "yo"))

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