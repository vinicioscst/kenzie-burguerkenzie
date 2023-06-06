import { styled } from "styled-components";


export const StyledCartTotal = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding-top: .9375rem;
    border-top: .125rem solid var(--color-grey-100);
    padding-bottom: 2px;

    span {
        color: var(--color-grey-600);
        font-weight: 600;
    }
`