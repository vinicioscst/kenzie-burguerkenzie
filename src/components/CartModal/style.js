import { styled } from "styled-components";


export const StyledModal = styled.div`
    position: fixed;

    display: flex;
    align-items: center;
    justify-content: center;

    inset: 0;
    width: 100%;
    height: 100dvh;
    background: rgba(0, 0, 0, 0.25);
`

export const StyledModalContainer = styled.div`
    position: relative;

    width: 100%;
    max-width: 500px;

    background: white;
    border: .0625rem solid var(--color-grey-000);
    border-radius: .3125rem;

    margin: 0 1rem;
`

export const StyledModalHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    background: var(--color-primary);
    border-radius: .3125rem .3125rem 0 0;
    padding: 1.25rem;
    margin: -1px -1px 0;

    color: white;

    svg {
        fill: rgba(255, 255, 255, 0.5);
        cursor: pointer;
    }
`

export const StyledModalContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 18px;
    
    padding: 1rem;
`

export const StyledModalCartList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 1.125rem;
`