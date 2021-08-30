import styled from "styled-components";

export const DetailsContainer = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
`;

export const DetailsTitle = styled.h2`
  color: ${(props) => props.theme.colors.red};
  font-weight: ${(props) => props.theme.weight.light};
  font-family: "Roboto", sans-serif;
  font-size: 27px;
  line-height: 32px;
  margin: 15px 0;
`;

export const DetailsDescription = styled.p`
  margin: 10px;
  padding: 0;
  font-family: "Roboto", sans-serif;
  font-weight: ${(props) => props.theme.weight.regular};
  font-size: 16px;
  line-height: 19px;
  color: ${(props) => props.theme.colors.text};
`;

export const DetailsFigure = styled.figure`
  margin: 0;
  overflow: hidden;
`;

export const DetailsImage = styled.img`
  max-width: 100%;
`;
