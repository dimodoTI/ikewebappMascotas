import {css} from "lit-element"

export const cabecera1 = css `
#header{
    position: relative;
    display:grid;
    width: 100%;
    align-content: center;
    justify-items: left;
    padding:1.5rem;
    border-radius:0 0 20px 20px;
    background-color: var(--color-blanco);
 }
#lblTitulo{
    position: relative;
    font-size: var(--font-header-h1-size);
    font-weight: var(--font-header-h1-weight);
}
#lblLeyenda{
    position: relative;
    background-color: transparent;
    font-size: var(--font-bajada-size);
    font-weight: var(--font-bajada-weight);
}
`