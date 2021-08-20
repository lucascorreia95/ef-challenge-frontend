import ListItem from "../ListItem";

import {
  ListContainer,
  ListTitleContainer,
  ListTitleItem,
  ListEl,
} from "./List.styles";

export const List = () => {
  return (
    <ListContainer>
      <ListTitleContainer>
        <ListTitleItem width="30%" marginR="10px">
          Personagem
        </ListTitleItem>
        <ListTitleItem width="70%" marginR="0px">
          Detalhes
        </ListTitleItem>
      </ListTitleContainer>
      <ListEl>
        <ListItem
          srcImg="https://assets.dragoart.com/images/11939_501/how-to-draw-iron-man-easy_5e4c9ed9b16b58.14188289_53732_3_3.png"
          altImg="Alt Image"
          name="Tony Marquinhos"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
          pharetra eu ligula at fringilla. Curabitur vitae condimentum
          felis. Ut suscipit tellus non mauris consectetur, nec sollicitudin
          enim cursus. Quisque et leo at lectus aliquam mattis. Praesent
          condimentum enim nisi, sed rhoncus nibh volutpat vel. Ut tempor et
          tortor a convallis. Class aptent taciti sociosqu ad litora
          torquent per conubia nostra, per inceptos himenaeos. Maecenas nec
          finibus lectus."
        />
      </ListEl>
    </ListContainer>
  );
};

export default List;
