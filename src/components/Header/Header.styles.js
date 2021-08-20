import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  padding-bottom: 3px;
  box-sizing: border-box;
  margin-bottom: 34px;
  @media (max-width: 767px) {
    margin-bottom: 12px;
    padding: 0 30px;
  }
`;

export const HeaderTitle = styled.h1`
  color: ${(props) => props.theme.colors.red};
  font-weight: ${(props) => props.theme.weight.black};
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  font-size: 27px;
  line-height: 32px;
  margin: 0;
  @media (max-width: 767px) {
    font-size: 16px;
    line-height: 19px;
  }
`;

export const HeaderTitleL = styled.span`
  font-weight: ${(props) => props.theme.weight.light};
  margin: 0;
`;

export const HeaderName = styled.h2`
  color: ${(props) => props.theme.colors.red};
  font-weight: ${(props) => props.theme.weight.light};
  font-family: "Roboto", sans-serif;
  font-size: 27px;
  line-height: 32px;
  margin: 0;
  @media (max-width: 767px) {
    display: none;
  }
`;

export const HeaderBorder = styled.div`
  position: absolute;
  bottom: -3px;
  left: 0;
  height: 4px;
  width: 54px;
  background-color: ${(props) => props.theme.colors.red};
  @media (max-width: 767px) {
    left: 30px;
  }
`;
