import { useState, useEffect, useCallback } from 'react';

export const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [responses, setResponses] = useState([]);

  const getResponses = useCallback(async () => {
    const response = await fetch(url, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "a8c35d66fcmshafc301555f8d79dp1f965bjsn7862c2adff73",
            "x-rapidapi-host": "covid-193.p.rapidapi.com"
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
