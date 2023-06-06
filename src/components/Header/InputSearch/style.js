import { styled } from "styled-components";


export const StyledForm = styled.form`
    position: relative;

    button {
        position: absolute;
        top: .6875rem;
        right: .6875rem;

        padding: .75rem 1.25rem;
    }
`

export const StyledInput = styled.input`
    width: 100%;
    padding: 1.2813rem .9375rem;

    border: .125rem solid var(--color-grey-100);
    border-radius: .5rem;

    color: var(--color-grey-600);
    font-size: 1rem;

    &::placeholder {
        color: var(--color-grey-100);
    }
`