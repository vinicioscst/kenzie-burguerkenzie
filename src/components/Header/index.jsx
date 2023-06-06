import Logo from "./Logo";
import { FaShoppingCart } from "react-icons/fa";
import { StyledCartIcon, StyledHeader, StyledHeaderContainer, StyledMainContent } from "./style";
import InputSearch from "./InputSearch";

const Header = ({ setIsOpen, cartProducts, setInputSearch }) => {
  return (
    <StyledHeader>
      <StyledHeaderContainer>
        <StyledMainContent>
          <Logo />
          <StyledCartIcon>
            <FaShoppingCart onClick={() => setIsOpen(true)} />
            <span>{cartProducts.length}</span>
          </StyledCartIcon>
        </StyledMainContent>
        <InputSearch setInputSearch={setInputSearch} />
      </StyledHeaderContainer>
    </StyledHeader>
  );
};

export default Header;
