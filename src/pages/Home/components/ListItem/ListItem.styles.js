import styled from "styled-components";

export const ItemContainer = styled.li`
  display: flex;
  align-items: center;
  padding: 20px 0;
  border-bottom: 2px solid ${(props) => props.theme.colors.redDisable};
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    background-color: rgba(212, 32, 38, 0.1);
  }
  @media (max-width: 767px) {
    padding: 20px 30px;
  }
`;

export const ImgContainer = styled.div`
  display: flex;
  align-items: center;
  flex: 1 0 30%;
  margin-right: 10px;
`;

export const FigureImg = styled.figure`
  margin: 0;
  margin-right: 25px;
  width: 58px;
  height: 58px;
  border-radius: 50%;
  overflow: hidden;
`;

export const ImgItem = styled.img`
  max-width: 100%;
`;

export const ItemName = styled.h4`
  margin: 0;
  padding: 0;
  font-family: "Roboto", sans-serif;
  font-weight: ${(props) => props.theme.weight.regular};
  font-size: 21px;
  line-height: 24px;
  color: ${(props) => props.theme.colors.text};
`;

export const ItemDescription = styled.p`
  margin: 0;
  padding: 0;
  font-family: "Roboto", sans-serif;
  font-weight: ${(props) => props.theme.weight.regular};
  font-size: 21px;
  line-height: 24px;
  color: ${(props) => props.theme.colors.text};
`;

export const DescriptionContainer = styled.div`
  flex: 1 1 100%;
  @media (max-width: 767px) {
    display: none;
  }
`;
