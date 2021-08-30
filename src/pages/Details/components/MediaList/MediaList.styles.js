import styled from "styled-components";

export const MediaContainer = styled.div`
  width: 100%;
`;

export const MediaTitle = styled.h4`
  color: ${(props) => props.theme.colors.red};
  font-weight: ${(props) => props.theme.weight.light};
  font-family: "Roboto", sans-serif;
  font-size: 21px;
  line-height: 24px;
  margin: 15px 0;
  @media (max-width: 767px) {
    padding: 0 10px;
    text-align: center;
  }
`;

export const MediaListEl = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  @media (max-width: 767px) {
    padding: 0 10px;
  }
`;
