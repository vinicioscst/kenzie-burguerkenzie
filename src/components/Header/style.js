import { styled } from "styled-components";


export const StyledHeader = styled.header`
    width: 100%;
    background-color: var(--color-grey-000);
`

export const StyledHeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1rem;

    width: 100%;
    max-width: 1368px;

    margin: 0 auto;


    padding: 1.25rem 1rem;
`

export const StyledMainContent = styled.div`

    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;

    width: inherit;
`

export const StyledCartIcon = styled.div`

    position: relative;
    width: fit-content;
    margin-top: .9375rem;
    margin-right: .6875rem;

    svg {
        width: 1.5625rem;
        fill: #bdbdbd;
    }

    span {
        position: absolute;
        top: -.9375rem;
        right: -.6875rem;
        border-radius: .4375rem;


        background: var(--color-primary);
        padding: .2rem .3rem;

        font: 900 .875rem var(--font);
        color: white;
        text-align: left;
    }
`