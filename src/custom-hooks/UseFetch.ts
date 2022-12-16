import { useState, useEffect, useCallback } from 'react';

export type dynamicObject = {[key: string]: any}

export const useFetch = (url: string, host: string) => {
  const [loading, setLoading] = useState(true);
  const [responses, setResponses] = useState<dynamicObject>([]);

  const getResponses = useCallback(async () => {
    const response = await fetch(url, {
        "method": "GET",
        "mode": "cors",
        "headers": <{
          "x-rapidapi-key": string,
          "x-rapidapi-host": string
        }>{
            "x-rapidapi-key": process.env.REACT_APP_RAPID_API_COVID_KEY,
            "x-rapidapi-host": host
        }
    });
    const responses = await response.json();
    setResponses(responses);
    setLoading(false);
  }, [url, host]);

  useEffect(() => {
    getResponses();
  }, [url, getResponses]);
  return { loading, responses };
};