import { FaSearch } from "react-icons/fa";
import { StyledForm, StyledInput } from "./style";
import { StyledButton } from "../../Buttons/style";

const InputSearch = ({ setInputSearch }) => {
  return (
    <StyledForm>
      <StyledInput
        type="text"
        placeholder="Digitar Pesquisa"
        onChange={(event) => setInputSearch(event.target.value)}
      />
      <StyledButton
        type="medium"
        color="green"
        onClick={(event) => event.preventDefault()}
      >
        <FaSearch />
      </StyledButton>
    </StyledForm>
  );
};

export default InputSearch;
