import { css, styled } from "styled-components";


export const StyledProductsList = styled.main`
    
    display: grid;

    ${({ length }) => {
      return css`
        grid-template-columns: repeat(${length}, 300px);
      `;
    }}

    gap: 1.25rem;
    overflow-x: auto;
    margin: 2.125rem auto;
    padding: 0 1rem;
`