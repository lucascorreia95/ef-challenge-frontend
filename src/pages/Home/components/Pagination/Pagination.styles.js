import styled from "styled-components";

export const PaginationContainer = styled.div`
  padding: 16px 0;
  @media (max-width: 767px) {
    padding: 16px 30px;
  }

  .pagination {
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    list-style: none;
  }
  .previous {
    border: none;
    a {
      width: 0;
      height: 0;
      border: 13px solid transparent;
      border-right-color: red;
      display: block;
    }
  }
  .next {
    border: none;
    a {
      width: 0;
      height: 0;
      border: 13px solid transparent;
      border-left-color: red;
      display: block;
    }
  }
  .previous.disabled a,
  .next.disabled a {
    opacity: 30%;
  }
  .break-me {
    border: none;
  }
  li {
    color: ${(props) => props.theme.colors.red};
    font-weight: ${(props) => props.theme.weight.regular};
    font-family: "Roboto", sans-serif;
    font-size: 21px;
    line-height: 24px;
    border: 1px solid ${(props) => props.theme.colors.red};
    border-radius: 50%;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 10px;
    cursor: pointer;
    &.active {
      color: ${(props) => props.theme.colors.white};
      background-color: ${(props) => props.theme.colors.red};
    }
  }
`;
