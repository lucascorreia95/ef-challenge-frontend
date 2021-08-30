import PropTypes from "prop-types";

import { InputContainer, InputLabel, InputText } from "./Input.styles";

export const Input = ({ value, onChange, onKeyDown }) => {
  return (
    <InputContainer>
      <InputLabel htmlFor="Name">Nome do Personagem</InputLabel>
      <InputText
        type="text"
        id="Name"
        name="Name"
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
    </InputContainer>
  );
};

Input.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  onKeyDown: PropTypes.func,
};

export default Input;
