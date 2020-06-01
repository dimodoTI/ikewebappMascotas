import { } from "../css/main.css"
import { } from "../css/media.css"
import { } from "../css/quicksand.css"
import { } from "../css/fontSizes.css"
import { } from "../css/colors.css"
import { } from "../css/shadows.css"
import { } from "../css/imagenes.css"
import {
    store
} from "../src/redux/store"
import {
    viewManager
} from "./views/manager"
import {
    modoPantalla, captureMedia
} from "./redux/actions/ui";

store.dispatch(captureMedia())
store.dispatch(modoPantalla("splash"))
