import Logo from "./Logo"
import { FaShoppingCart } from "react-icons/fa"
import { StyledCartIcon, StyledHeader, StyledHeaderContainer, StyledMainContent } from "./style"
import InputSearch from "./InputSearch"

const Header = () => {

    return (
        <StyledHeader>
            <StyledHeaderContainer>
                <StyledMainContent>
                    <Logo />
                    <StyledCartIcon>
                        <FaShoppingCart />
                        <span>0</span>
                    </StyledCartIcon>
                </StyledMainContent>
                <InputSearch />
            </StyledHeaderContainer>
        </StyledHeader>
    )
}


export default Header