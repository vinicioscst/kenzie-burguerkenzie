import { StyledBodyText, StyledBodyText600, StyledTitle3 } from "../../../styles/typography";
import { StyledButton } from "../../Buttons/style";
import { ProductCard, ProductInfo } from "./style";

function Product({ product, filteredProducts, setCartProducts, cartProducts, toast }) {
  const price = product.price.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const addToCart = (productId) => {
    const findProduct = filteredProducts.find(
      (product) => product.id === productId
    );
    const findProductInCart = cartProducts.find(
      (cartProduct) => cartProduct.id === findProduct.id
    );

    if (findProductInCart) {
      toast.error("Item não pode ser adicionado novamente!");
    } else {
      setCartProducts((cartProducts) => [...cartProducts, findProduct]);
      toast.success("Item adicionado ao carrinho!");
    }
  };

  return (
    <ProductCard>
      <img src={product.img} alt={`Imagem do produto ${product.name}`} />
      <ProductInfo>
        <StyledTitle3>{product.name}</StyledTitle3>
        <StyledBodyText>{product.category}</StyledBodyText>
        <StyledBodyText600 type="price">{price}</StyledBodyText600>
        <StyledButton
          type="medium"
          color="gray"
          onClick={() => addToCart(product.id)}
        >
          Adicionar
        </StyledButton>
      </ProductInfo>
    </ProductCard>
  );
}

export default Product;
