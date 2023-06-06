import { css, styled } from "styled-components";


export const StyledMain = styled.main`
    max-width: 1368px;
    margin: 2.125rem auto;
    padding: 0 1rem;
`

export const StyledProductsList = styled.ul`
    
    display: grid;

    ${({ length }) => {
      return css`
        grid-template-columns: repeat(${length}, 18.75rem);
      `;
    }}

    gap: 1.25rem;
    overflow-x: auto;
`