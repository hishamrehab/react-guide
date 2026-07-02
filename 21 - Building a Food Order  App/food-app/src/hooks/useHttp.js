import { useState, useEffect, useCallback } from "react";

async function sendHttpRequest(url, config) {
  const response = await fetch(url, config);
  const resData = await response.json();

  if (!response.ok) {
    throw new Error(
      resData.message || "Something went wrong!, failed to send request!"
    );
  }

  return resData;
}

export default function useHttp(url, config, initialData) {
  const [data, setData] = useState(initialData);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const sendRequest = useCallback(
    async function sendRequest(requestData) {
      setIsLoading(true);
      setError(null);
      try {
        const requestConfig = { ...config };
        if (requestData) {
          requestConfig.body = JSON.stringify(requestData);
        }
        const resData = await sendHttpRequest(url, requestConfig);
        setData(resData);
        return resData;
      } catch (error) {
        setError(
          error.message || "Something went wrong!, failed to send request!"
        );
      } finally {
        setIsLoading(false);
      }
    },
    [url, config]
  );

  const clearData = useCallback(() => {
    setData(initialData);
  }, [initialData]);

  useEffect(() => {
    if (config && (config.method === "GET" || !config.method)) {
      sendRequest();
    }
  }, [sendRequest, config]);

  return {
    data,
    error,
    isLoading,
    sendRequest,
    clearData,
  };
}
