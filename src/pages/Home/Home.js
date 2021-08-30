import { useState } from "react";

import Input from "./components/Input";
import List from "./components/List";
import Pagination from "./components/Pagination";
import { HomeContainer, ErrorLabel, LoadingLabel } from "./Home.styles";
import {
  getOffset,
  getResultsFromServices,
  handleInputValueChange,
  handleInputonKeyDown,
} from "./helpers";

export const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [results, setResults] = useState([]);
  const [itemsCount, setItemsCount] = useState(0);
  const [limitPage] = useState(10);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <HomeContainer>
      <Input
        value={inputValue}
        onChange={(event) => handleInputValueChange(event, setInputValue)}
        onKeyDown={(event) =>
          handleInputonKeyDown(
            event,
            inputValue,
            limitPage,
            setResults,
            setItemsCount,
            setError,
            setLoading
          )
        }
      />
      {!!error && <ErrorLabel>Erro: {error}</ErrorLabel>}
      {loading && <LoadingLabel>Carregando resultados...</LoadingLabel>}
      {results.length > 0 && (
        <>
          <List listData={results} />
          <Pagination
            onPageChange={({ selected }) => {
              if (inputValue) {
                getResultsFromServices(
                  inputValue,
                  getOffset(selected, limitPage),
                  limitPage,
                  setResults,
                  setItemsCount,
                  setError,
                  setLoading
                );
              }
            }}
            pageCount={Number((itemsCount / limitPage).toFixed())}
          />
        </>
      )}
    </HomeContainer>
  );
};

export default Home;
