import { styled } from "styled-components";


export const ProductCard = styled.li`

    border: .125rem solid var(--color-grey-100);
    border-radius: .3125rem;
    
    &:hover {
        border: .125rem solid var(--color-primary);

        button {
            background: var(--color-primary);
            color: white;
            transition: background 0.2s;
        }

        button:hover {
            background: var(--color-primary-50);
        }
    }

    img {
        background-color: var(--color-grey-000);
        width: 100%;
        height: 9.375rem;
        
        border-radius: .3125rem .3125rem 0 0;

        object-fit: contain;
    }
`

export const ProductInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: .875rem;
    align-items: flex-start;

    padding: 1.375rem;
`