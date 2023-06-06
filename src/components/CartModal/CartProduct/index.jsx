import { FaTrash } from "react-icons/fa";
import { StyledItemCard, StyledItemCardInfo } from "./style";
import { StyledTitle3 } from "../../../styles/typography";

const CartProduct = ({ product, removeItem }) => {
  return (
    <StyledItemCard>
      <StyledItemCardInfo>
        <img src={product.img} alt={`Imagem do produto ${product.name}`} />
        <StyledTitle3>{product.name}</StyledTitle3>
      </StyledItemCardInfo>
      <FaTrash onClick={() => removeItem(product.id)} />
    </StyledItemCard>
  );
};

export default CartProduct;
