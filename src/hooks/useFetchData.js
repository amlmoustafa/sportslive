import { useEffect, useState } from "react";

const useFetchData = (fetchApi) => {
  const [isLoading, setLoading] = useState(true);
  const [fetchedData, setFetchedData] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  function handleApiErrors(reason) {
    if (reason.message === "Network Error!") {
      setErrorMessage("something went wrong!");
    } else if (reason?.response?.status === 401) {
      setErrorMessage("Error!");
    }
  }

  function getData() {
    if (!fetchApi) {
      throw Error("should pass a callback to hook");
    }
    setLoading(true);
    return fetchApi()
      .then((res) => {
        setFetchedData(res.data);
      })
      .catch((reason) => {
        handleApiErrors(reason);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    isLoading,
    fetchedData,
    setFetchedData,
    errorMessage,
  };
};

export default useFetchData;
