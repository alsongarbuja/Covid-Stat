import { useState, useEffect, useCallback } from 'react';

export const useFetch = (url, host) => {
  const [loading, setLoading] = useState(true);
  const [responses, setResponses] = useState([]);

  const getResponses = useCallback(async () => {
    const response = await fetch(url, {
        "method": "GET",
        "mode": "cors",
        "headers": {
            "x-rapidapi-key": process.env.REACT_APP_RAPID_API_COVID_KEY,
            "x-rapidapi-host": host
        }
    });
    const responses = await response.json();
    setResponses(responses);
    setLoading(false);
  }, [url]);

  useEffect(() => {
    getResponses();
  }, [url, getResponses]);
  return { loading, responses };
};