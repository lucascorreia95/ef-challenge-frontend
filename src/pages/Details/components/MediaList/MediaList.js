import { useEffect, useState } from "react";
import PropTypes from "prop-types";

import api from "../../../../services";
import MediaListItem from "../MediaListItem";
import { MediaContainer, MediaTitle, MediaListEl } from "./MediaList.styles";

export const MediaList = ({ id }) => {
  const [listData, setListData] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getListData = async () => {
      setError(false);

      const response = await api.get(
        `https://kitsu.io/api/edge/characters/${id}/media-characters`
      );

      if (!response || response.error) {
        setError(true);
        return;
      }

      if (response && response.data) {
        setListData(response.data.data);
        return;
      }
    };

    if (id) getListData();
  }, [id]);

  if (!listData) return null;

  if (error) {
    return (
      <MediaContainer>
        <MediaTitle>Erro ao buscar informações de mídia!</MediaTitle>
      </MediaContainer>
    );
  }

  return (
    <MediaContainer>
      <MediaTitle>Lista de Mídias</MediaTitle>
      <MediaListEl>
        {listData.map((item) => {
          return (
            <MediaListItem
              key={item.id}
              selfUrl={item.relationships.media.links.related}
            />
          );
        })}
      </MediaListEl>
    </MediaContainer>
  );
};

MediaList.propTypes = {
  id: PropTypes.string,
};

export default MediaList;
