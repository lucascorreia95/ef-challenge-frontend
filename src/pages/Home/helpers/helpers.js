import api from "../../../services";

export const getOffset = (selected, limitPage) => {
  return selected * limitPage;
};

export const getResultsFromServices = async (
  nameString,
  offset,
  limit,
  setResults,
  setItemsCount,
  setError,
  setLoading
) => {
  try {
    setError("");
    setLoading(true);

    const response = await api.get(
      `/characters?filter[name]=${nameString}&page[limit]=${limit}&page[offset]=${offset}`
    );

    if (!response || response.data.data.length === 0) {
      setError("Nenhum resultado encontrado!");
      setResults([]);
      setItemsCount(0);
      setLoading(false);
      return;
    }

    if (response && response.data) {
      setResults(response.data.data);
      setItemsCount(response.data.meta.count);
      setLoading(false);
      return;
    }
  } catch (e) {
    console.log(e);
    setError("Não foi possível buscar os resultados!");
    setResults([]);
    setItemsCount(0);
    setLoading(false);
    return;
  }
};

export const handleInputValueChange = ({ target }, setInputValue) => {
  setInputValue(target.value);
};

export const handleInputonKeyDown = (
  { keyCode },
  inputValue,
  limitPage,
  setResults,
  setItemsCount,
  setError,
  setLoading
) => {
  if (keyCode === 13) {
    getResultsFromServices(
      inputValue,
      0,
      limitPage,
      setResults,
      setItemsCount,
      setError,
      setLoading
    );
  }
};
