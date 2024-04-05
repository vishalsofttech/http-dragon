import { useEffect, useState } from "react";

export const useRequest = (request, { dependcies }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  
  useEffect(() => {
    setLoading(true);
    request.call({
      next: (res) => {
        setLoading(false);
        setData(res.data);
      },
      error: (err) => {
        setLoading(false);
        setError(err);
      },
    });
  }, dependcies);

  return [loading,error,data];
};
