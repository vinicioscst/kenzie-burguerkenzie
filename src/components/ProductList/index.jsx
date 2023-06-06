import Product from "./Product"
import { StyledProductsList } from "./style"


function ProductList({products}) {
    
    return (
      <StyledProductsList length={products.length}>
        {products.map((product) => (
            <Product key={product.id} product={product}/>
        ))}
      </StyledProductsList>
    )
  }
  
  export default ProductList