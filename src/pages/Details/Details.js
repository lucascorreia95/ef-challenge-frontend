import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import api from "../../services";
import MediaList from "./components/MediaList";
import {
  DetailsContainer,
  DetailsTitle,
  DetailsDescription,
  DetailsFigure,
  DetailsImage,
} from "./Details.styles";

export const Details = () => {
  const [details, setDetails] = useState(null);
  const [error, setError] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const getDataDetails = async () => {
      setError(false);

      const response = await api.get(
        `https://kitsu.io/api/edge/characters/${id}`
      );

      if (!response || response.error) {
        setError(true);
        return;
      }

      if (response && response.data) {
        setDetails(response.data.data);
        return;
      }
    };

    if (id) getDataDetails();
  }, [id]);

  if (!details) return null;

  if (error) {
    return (
      <DetailsContainer>
        <DetailsTitle>Erro ao buscar informações!</DetailsTitle>
      </DetailsContainer>
    );
  }

  return (
    <DetailsContainer>
      <DetailsFigure>
        <DetailsImage
          src={details.attributes.image.original}
          alt={details.attributes.name}
        />
      </DetailsFigure>
      <DetailsTitle>{details.attributes.name}</DetailsTitle>
      <DetailsDescription>{details.attributes.description}</DetailsDescription>
      <MediaList id={id} />
    </DetailsContainer>
  );
};

export default Details;
