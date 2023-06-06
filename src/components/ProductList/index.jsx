import Product from "./Product"
import { StyledMain, StyledProductsList } from "./style"


function ProductList({products, setCartProducts, cartProducts, toast}) {

    return (
      <StyledMain>
        <StyledProductsList length={products.length}>
            {products.map((product) => (
                <Product key={product.id} product={product} products={products} setCartProducts={setCartProducts} cartProducts={cartProducts} toast={toast} />
            ))}
        </StyledProductsList>
      </StyledMain>
    )
  }
  
  export default ProductList