import { StyledBodyText600, StyledHeadlineText } from "../../../styles/typography";
import { StyledCartTotal } from "./style";


const CartTotal = ({cartProducts}) => {
    const values = cartProducts.map((item) => item.price);
    const totalValue = values.reduce((acc, cur) => acc + cur, 0)

    const formattedTotalValue = totalValue.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });

    return (
        <StyledCartTotal>
            <StyledHeadlineText>Total</StyledHeadlineText>
            <StyledBodyText600>{formattedTotalValue}</StyledBodyText600>
        </StyledCartTotal>
    )
}


export default CartTotal