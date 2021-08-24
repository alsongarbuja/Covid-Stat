import { useState, useEffect, useCallback } from 'react';

export const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [responses, setResponses] = useState([]);

  const getResponses = useCallback(async () => {
    const response = await fetch(url, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": process.env.REACT_APP_RAPID_API_COVID_KEY,
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

export const useFetchApi = (url) => {
  const [loading, setLoading] = useState(true);
  const [responses, setResponses] = useState([]);

  const getResponses = useCallback(async () => {
    const response = await fetch(url, {
        "method": "GET",
        "headers": {
            "mode": "cors",
            "X-Api-Key": process.env.REACT_APP_NEWS_API_KEY
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
}