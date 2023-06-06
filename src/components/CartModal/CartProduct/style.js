import { css, styled } from "styled-components";


const defaultStyles = css`
    display: flex;
    align-items: flex-start;
`

export const StyledItemCard = styled.li`
    ${defaultStyles}
    justify-content: space-between;

    svg {
        fill: #BDBDBD;
        cursor: pointer;
    }
`

export const StyledItemCardInfo = styled.div`
    ${defaultStyles}
    gap: .625rem;

    img{
        width: 80px;
        object-fit: cover;
        background: var(--color-grey-100);
        border-radius: .3125rem;
    }
`