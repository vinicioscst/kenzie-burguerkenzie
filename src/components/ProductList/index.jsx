import Product from "./Product";
import { StyledMain, StyledProductsList } from "./style";

function ProductList({ filteredProducts, setCartProducts, cartProducts, toast }) {
  return (
    <StyledMain>
      <StyledProductsList length={filteredProducts.length}>
        {filteredProducts.map((product) => (
          <Product
            key={product.id}
            product={product}
            filteredProducts={filteredProducts}
            setCartProducts={setCartProducts}
            cartProducts={cartProducts}
            toast={toast}
          />
        ))}
      </StyledProductsList>
    </StyledMain>
  );
}

export default ProductList;
