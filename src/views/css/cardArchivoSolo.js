import {
    css
} from "lit-element"

export const cardArchivoSolo = css`
        #cisDivEtiqueta{
            position:relative;
            display: grid; 
            height:2.5rem;
            width:100%;
            background-color:transparent;
            grid-template-columns: 100%;
            grid-gap:0rem;
            align-items: center;
        }
        #cisDivContenido{
            position:relative;
            display: grid;
            height:100%; 
            background-color:var(--color-blanco);
            grid-template-columns: 15% 85%;
            grid-gap:0rem;
            border-radius:.4rem ;           
            align-items: center;
            box-shadow: var(--shadow-elevation-3-box);
        }
        #cisDivIcomo{
            height:50%;
            width:50%;
            justify-self: center;
        }
        #cisDivNombre{
            font-size: var(--font-bajada-size);
            font-weight: var(--font-bajada-weight);   
            color: var(--color-celeste);            
        }
`