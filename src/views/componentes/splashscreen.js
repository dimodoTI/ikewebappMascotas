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

export class splashScreen extends connect(store)(LitElement) {
    constructor() {
        super();
    }

    static get styles() {
        return css`
        :host{
            display: grid;
            justify-content: center;
            align-items:center; 
            position: absolute;
            top: 0rem;
            left: 0rem;  
            height:100%;
            width: 100%;
            background-color:var(--color-celeste);
        }
        :host([hidden]){
            display:none ;
        }
        #cuerpo{
            display: block;
            height: 90vmin;
            width: 90vmin;
            background-image:var(--imagen-logo-splash);
            background-repeat: no-repeat;
            background-position: center;
            background-size: 100%;
        }
        `
    }
    render() {
        return html `
        <div id="cuerpo">
        </div>
        `
    }

}
window.customElements.define("splash-screen", splashScreen);