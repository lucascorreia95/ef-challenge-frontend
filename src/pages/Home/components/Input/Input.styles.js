import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 34px;
`;

export const InputLabel = styled.label`
  color: ${(props) => props.theme.colors.red};
  font-weight: ${(props) => props.theme.weight.regular};
  font-family: "Roboto", sans-serif;
  line-height: 19px;
  font-size: 16px;
`;

export const InputText = styled.input`
  color: ${(props) => props.theme.colors.text};
  font-weight: ${(props) => props.theme.weight.regular};
  font-family: "Roboto", sans-serif;
  line-height: 19px;
  font-size: 16px;
  width: 400px;
  height: 31px;
  border: 1px solid ${(props) => props.theme.colors.grey};
  border-radius: 5px;
`;
