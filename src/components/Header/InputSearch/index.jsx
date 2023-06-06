import { FaSearch } from "react-icons/fa"
import { StyledForm, StyledInput } from "./style"
import Button from "../../Buttons"

const InputSearch = () => {


    return (
        <StyledForm>
            <StyledInput type="text" placeholder="Digitar Pesquisa" />
            <Button buttonType="medium" buttonColor="green"><FaSearch/></Button>
        </StyledForm>
    )
}


export default InputSearch