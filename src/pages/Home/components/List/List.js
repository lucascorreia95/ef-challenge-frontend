import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";

import ListItem from "../ListItem";

import {
  ListContainer,
  ListTitleContainer,
  ListTitleItem,
  ListEl,
} from "./List.styles";

export const List = ({ listData }) => {
  const history = useHistory();

  const handleItemClick = (id) =>
    history.push({
      pathname: `/details/${id}`,
      params: id,
    });

  return (
    <ListContainer>
      <ListTitleContainer>
        <ListTitleItem width="30%" marginR="10px">
          Personagem
        </ListTitleItem>
        <ListTitleItem width="70%" marginR="0px" hideMobile>
          Detalhes
        </ListTitleItem>
      </ListTitleContainer>
      <ListEl>
        {listData.map((item) => {
          return (
            <ListItem
              key={item.id}
              srcImg={
                item.attributes.image ? item.attributes.image.original : ""
              }
              altImg={item.attributes.name}
              name={item.attributes.name}
              description={item.attributes.description}
              onClick={() => handleItemClick(item.id)}
            />
          );
        })}
      </ListEl>
    </ListContainer>
  );
};

List.propTypes = {
  listData: PropTypes.array,
};

export default List;
