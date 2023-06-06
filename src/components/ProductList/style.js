import { css, styled } from "styled-components";

export const StyledMain = styled.main`
  max-width: 1368px;
  margin: 2.125rem auto;
  padding: 0 1rem;

  @media (min-width: 450px) {
    max-width: calc(1368px + 6rem);
    padding: 0 3rem;
  }
`;

export const StyledProductsList = styled.ul`
  display: grid;

  ${({ length }) => {
    return css`
      grid-template-columns: repeat(${length}, 18.75rem);
    `;
  }}

  gap: 1.25rem;
  overflow-x: auto;

  @media (min-width: 769px) {
    grid-template-columns: repeat(auto-fill, 18.75rem);
    justify-content: center;
    gap: 3.5rem;
  }
`;
