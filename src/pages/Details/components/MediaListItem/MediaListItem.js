import { useEffect, useState } from "react";
import PropTypes from "prop-types";

import api from "../../../../services";
import {
  MediaItemContainer,
  MediaItemTitle,
  MediaItemFigure,
  MediaItemImage,
} from "./MediaListItem.styles";

export const MediaListItem = ({ selfUrl }) => {
  const [itemData, setItemData] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getListData = async () => {
      setError(false);

      const response = await api.get(selfUrl);

      if (!response || response.error) {
        setError(true);
        return;
      }

      if (response && response.data) {
        setItemData(response.data.data);
        return;
      }
    };

    if (selfUrl) getListData();
  }, [selfUrl]);

  if (!itemData) return null;

  if (error) {
    return (
      <MediaItemContainer>
        <MediaItemTitle>
          Erro ao buscar informações do item de mídia!
        </MediaItemTitle>
      </MediaItemContainer>
    );
  }

  return (
    <MediaItemContainer>
      <MediaItemFigure>
        <MediaItemImage
          src={itemData.attributes.posterImage.tiny}
          alt={itemData.attributes.canonicalTitle}
        />
      </MediaItemFigure>
      <MediaItemTitle>{itemData.attributes.canonicalTitle}</MediaItemTitle>
    </MediaItemContainer>
  );
};

MediaListItem.propTypes = {
  selfUrl: PropTypes.string,
};

export default MediaListItem;
