import { useState, useEffect, useCallback } from 'react';

export const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [responses, setResponses] = useState([]);

  const getResponses = useCallback(async () => {
    const response = await fetch(url, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "4b64913a5amsh811f53bd560bb6dp1aa97djsnddd46be6cbc0",
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
