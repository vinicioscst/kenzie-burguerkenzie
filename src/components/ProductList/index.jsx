import Product from "./Product"
import { StyledMain, StyledProductsList } from "./style"


function ProductList({products}) {
    
    return (
      <StyledMain>
        <StyledProductsList length={products.length}>
            {products.map((product) => (
                <Product key={product.id} product={product}/>
            ))}
        </StyledProductsList>
      </StyledMain>
    )
  }
  
  export default ProductList