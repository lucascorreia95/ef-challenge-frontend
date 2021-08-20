import styled from "styled-components";

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ListTitleContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ListTitleItem = styled.span`
  color: ${(props) => props.theme.colors.white};
  font-weight: ${(props) => props.theme.weight.regular};
  font-size: 16px;
  font-family: "Roboto", sans-serif;
  line-height: 19px;
  background-color: ${(props) => props.theme.colors.red};
  flex: 1 1 ${(props) => props.width};
  box-sizing: border-box;
  padding: 5px 0 5px 10px;
  margin-right: ${(props) => props.marginR};
  @media (max-width: 767px) {
    display: ${(props) => (props.hideMobile ? "none" : "block")};
    margin-right: 0;
  }
`;

export const ListEl = styled.ul`
  margin: 0;
  padding: 0;
`;
