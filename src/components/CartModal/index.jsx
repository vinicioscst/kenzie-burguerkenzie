import { AiOutlineClose } from "react-icons/ai";
import { StyledModal, StyledModalCartList, StyledModalContainer, StyledModalContent, StyledModalHeader, } from "./style";
import { StyledButton } from "../Buttons/style";
import CartProduct from "./CartProduct";
import { StyledTitle3 } from "../../styles/typography";
import CartTotal from "./CartTotal";
import { useEffect, useRef } from "react";

const CartModal = ({ setIsOpen, cartProducts, setCartProducts, toast }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleOutClick = (event) => {
      if (!modalRef.current?.contains(event.target)) {
        setIsOpen(false);
      }
    };

    window.addEventListener("mousedown", handleOutClick);

    return () => {
      window.removeEventListener("mousedown", handleOutClick);
    };
  }, []);


  useEffect(() => {
    const handleKeydown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, []);


  const clearCart = () => {
    toast.success("Todos os itens foram removidos com sucesso!");
    setCartProducts([]);
  };

  const removeItem = (itemId) => {
    toast.success("Item removido com sucesso!");
    setCartProducts((cartProducts) =>
      cartProducts.filter((item) => item.id !== itemId)
    );
  };


  return (
    <StyledModal role="dialog">
      <StyledModalContainer ref={modalRef}>
        <StyledModalHeader>
          <h3>Carrinho de compras</h3>
          <AiOutlineClose onClick={() => setIsOpen(false)} />
        </StyledModalHeader>

        <StyledModalContent>
          {cartProducts.length > 0 ? (
            <>
              <StyledModalCartList>
                {cartProducts.map((product) => (
                  <CartProduct key={product.id} product={product} removeItem={removeItem} />
                ))}
              </StyledModalCartList>

              <CartTotal cartProducts={cartProducts} />
              <StyledButton type="default" color="gray" onClick={() => clearCart()}>Remover Todos</StyledButton>
            </>
          ) : (
            <StyledTitle3>Não há itens no carrinho</StyledTitle3>
          )}
        </StyledModalContent>
      </StyledModalContainer>
    </StyledModal>
  );
};

export default CartModal;
