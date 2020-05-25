import {
    css
} from "lit-element"

export const cardMascotaVertical = css `
#cmhDivEtiqueta{
    display: grid; 
    height:14rem;
    width:8.5rem;
    background-color:var(--color-blanco);
    grid-template-rows: 50% 10% 10% 10% 10% 10% ;
    grid-gap:0rem;
    border-radius:.4rem ;           
    align-items: center;
    box-shadow: var(--shadow-elevation-4-box);
}
#cmhDivImagen{
    height:100%;
    width:100%;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 100%;
    border-radius:.4rem .4rem 0 0;           
}
#cmhDivTipo{
    font-size: var(--font-bajada-size);
    font-weight: var(--font-bajada-weight);
    padding-left: .2rem;
}
#cmhDivNombre{
    font-size: var(--font-header-h1-size);
    font-weight: var(--font-header-h1-weight);            
    padding-left: .2rem;
}         
#cmhDivRaza{
    font-size: var(--font-bajada-size);
    font-weight: var(--font-bajada-weight);            
    padding-left: .2rem;
} 
#cmhDivEdad{
    font-size: var(--font-bajada-size);
    font-weight: var(--font-bajada-weight);            
    padding-bottom: .8rem;
    padding-left: .2rem;
} 
#cmhDivConsultas{
    font-size: var(--font-bajada-size);
    font-weight: var(--font-bajada-weight);            
    padding-left: .2rem;
} 
`