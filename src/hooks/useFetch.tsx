import { useState, useEffect } from "react";

const useFetch = (url: string) => {
  const [data, setData] = useState<any>(null);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean | null>(null);

  useEffect(() => {
    let cancel = false;

    const fetchData = async function () {
      setLoading(true);
      return await fetch(url)
        .then(async data => {
          if (cancel) return;
          const response = await data.json();
          setData(response);
          setLoading(false);
        })
        .catch(error => {
          if (cancel) return;
          setError(error);
          setData(null);
          setLoading(false);
        });
    }

    fetchData();

    return () => {
      cancel = true
    };
  }, [url]);

  return {
    data, isLoading, isError: error
  }
}

export default useFetch;
