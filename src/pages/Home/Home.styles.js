import styled from "styled-components";

export const HomeContainer = styled.div``;

export const ErrorLabel = styled.h2`
  color: ${(props) => props.theme.colors.red};
  font-weight: ${(props) => props.theme.weight.regular};
  font-family: "Roboto", sans-serif;
  line-height: 19px;
  font-size: 16px;
`;

export const LoadingLabel = styled.span`
  color: ${(props) => props.theme.colors.red};
  font-weight: ${(props) => props.theme.weight.regular};
  font-family: "Roboto", sans-serif;
  line-height: 16px;
  font-size: 13px;
`;
