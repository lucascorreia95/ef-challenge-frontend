import PropTypes from "prop-types";

import {
  HeaderContainer,
  HeaderTitle,
  HeaderTitleL,
  HeaderName,
  HeaderBorder,
} from "./Header.styles";

export const Header = ({ name }) => {
  return (
    <HeaderContainer>
      <HeaderTitle>
        busca marvel <HeaderTitleL>teste front-end</HeaderTitleL>
      </HeaderTitle>
      <HeaderName>{name}</HeaderName>
      <HeaderBorder />
    </HeaderContainer>
  );
};

Header.propTypes = {
  name: PropTypes.string,
};

export default Header;
