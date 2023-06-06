import { StyledBodyText, StyledBodyText600, StyledTitle3 } from "../../../styles/typography"
import Button from "../../Buttons"
import { ProductCard, ProductInfo } from "./style";


function Product({product}) {
    
    const price = product.price.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    });

    return (
        <ProductCard>
            <img src={product.img} alt={`Imagem do produto ${product.name}`} />
            <ProductInfo>
                <StyledTitle3>{product.name}</StyledTitle3>
                <StyledBodyText>{product.category}</StyledBodyText>
                <StyledBodyText600 type="price">{price}</StyledBodyText600>
                <Button buttonType="medium" buttonColor="gray">Adicionar</Button>
            </ProductInfo>
        </ProductCard>
    )
  }
  
  export default Product