import PropTypes from "prop-types";

import {
  ItemContainer,
  ImgContainer,
  FigureImg,
  ImgItem,
  ItemName,
  ItemDescription,
  DescriptionContainer,
} from "./ListItem.styles";

export const ListItem = ({ srcImg, altImg, name, description, onClick }) => {
  return (
    <ItemContainer onClick={onClick}>
      <ImgContainer>
        <FigureImg>
          <ImgItem src={srcImg} alt={altImg} />
        </FigureImg>
        <ItemName>{name}</ItemName>
      </ImgContainer>
      <DescriptionContainer>
        <ItemDescription>{description}</ItemDescription>
      </DescriptionContainer>
    </ItemContainer>
  );
};

ListItem.propTypes = {
  srcImg: PropTypes.string,
  altImg: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  onClick: PropTypes.func,
};

export default ListItem;
