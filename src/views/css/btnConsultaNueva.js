import {
    css
} from "lit-element"

export const btnConsultaNueva = css `
#div-consultaNueva{
    position: relative;
    width: 95%;
    height: 2.5rem;
    background-color:var(--color-azul-oscuro);
    border-radius:.5rem;          
    display: grid;
    align-items:center;
    justify-items:center;
    grid-template-columns:75% auto;
    grid-template-rows: 100%;
    grid-gap:0rem;
}
#lbl-consultaNueva{
    color: var(--color-blanco);
    position: relative;
    display:flex;
}
#btn-consultaNueva:hover {    
    color: var(--color-blanco);
}
`