import { AiOutlineClose } from "react-icons/ai"
import { StyledModal, StyledModalCartList, StyledModalContainer, StyledModalContent, StyledModalHeader } from "./style"
import { StyledButton } from "../Buttons/style"
import CartProduct from "./CartProduct"
import { StyledTitle3 } from "../../styles/typography"
import CartTotal from "./CartTotal"

const CartModal = ({setIsOpen, cartProducts, setCartProducts, toast}) => {

    const clearCart = () => {
            toast.success("Todos os itens foram removidos com sucesso!")
            setCartProducts([])
    }

    const removeItem = (itemId) => {
        toast.success("Item removido com sucesso!")
        setCartProducts((cartProducts) => cartProducts.filter((item) => item.id !== itemId))
    }


    return (
        <StyledModal role="dialog">
            <StyledModalContainer>
                <StyledModalHeader>
                    <h3>Carrinho de compras</h3>
                    <AiOutlineClose onClick={() => setIsOpen(false)}/>
                </StyledModalHeader>
                <StyledModalContent>
                    {cartProducts.length > 0 ? (
                        <>
                            <StyledModalCartList>
                                {cartProducts.map((product) => (
                                    <CartProduct key={product.id} product={product} removeItem={removeItem} />
                                ))}
                            </StyledModalCartList>
                            <CartTotal cartProducts={cartProducts}/>
                            <StyledButton type="default" color="gray" onClick={() => clearCart()}>Remover Todos</StyledButton>
                        </>
                    ) : (
                        <StyledTitle3>Não há itens no carrinho</StyledTitle3>
                    )}
                </StyledModalContent>
            </StyledModalContainer>
        </StyledModal>
    )
}

export default CartModal