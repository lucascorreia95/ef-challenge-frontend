import styled from "styled-components";

export const MediaItemContainer = styled.li`
  display: flex;
  align-items: center;
  margin: 5px 0;
  @media (max-width: 767px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const MediaItemTitle = styled.h4`
  color: ${(props) => props.theme.colors.red};
  font-weight: ${(props) => props.theme.weight.light};
  font-family: "Roboto", sans-serif;
  font-size: 21px;
  line-height: 24px;
  margin: 15px 0;
  @media (max-width: 767px) {
    flex: 0 0 100%;
    text-align: center;
  }
`;

export const MediaItemFigure = styled.figure`
  margin: 0;
  margin-right: 15px;
  overflow: hidden;
`;

export const MediaItemImage = styled.img`
  max-width: 100%;
`;
