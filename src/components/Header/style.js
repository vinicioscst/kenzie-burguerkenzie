import { styled } from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  background-color: var(--color-grey-000);
`;

export const StyledHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;

  width: 100%;
  max-width: 1368px;

  margin: 0 auto;

  padding: 1.25rem 1rem;

  @media (min-width: 450px) {
    max-width: calc(1368px + 6rem);
    padding: 1.25rem 3rem;
  }

  @media (min-width: 769px) {
    flex-direction: row;
  }
`;

export const StyledMainContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  width: inherit;
`;

export const StyledCartIcon = styled.div`
  position: relative;
  width: fit-content;
  margin-top: 0.9375rem;
  margin-right: 0.6875rem;

  svg {
    width: 1.5625rem;
    fill: #bdbdbd;
    cursor: pointer;
  }

  span {
    position: absolute;
    top: -0.9375rem;
    right: -0.6875rem;
    border-radius: 0.4375rem;

    background: var(--color-primary);
    padding: 0.2rem 0.3rem;

    font: 900 0.875rem var(--font);
    color: white;
    text-align: left;

    pointer-events: none;
  }
`;
