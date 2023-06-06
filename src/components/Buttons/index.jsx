import { StyledButton } from "./style"

const Button = ({buttonType, buttonColor, children}) => {

    return (
        <StyledButton type={buttonType} color={buttonColor}>{children}</StyledButton>
    )
}


export default Button