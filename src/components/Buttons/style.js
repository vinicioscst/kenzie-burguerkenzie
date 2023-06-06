import { css, styled } from "styled-components";



export const StyledButton = styled.button`
    border-radius: .5rem;
    font-size: 1rem;
    font-weight: 600;

    ${({type}) => {
     if(type === "default"){
        return css`
            padding: 1.2813rem 1.25rem;
         `
     } else if (type === "medium") {
        return css`
            padding: .6563rem 1.25rem;
        `
     }
  }}

${({color}) => {
     if(color === "green"){
        return css`
           background: var(--color-primary);
           color: white;
           transition: background 0.2s;

           &:hover {
            background: var(--color-primary-50);
           }
         `
     } else if (color === "gray") {
        return css`
           background: var(--color-grey-100);
           color: var(--color-grey-300);
           transition: background 0.2s;
           transition: color 0.2s;

           &:hover {
            background: var(--color-grey-300);
            color: var(--color-grey-100);
           }
        `
     }
  }}
`